import React from "react";
import { useState, useEffect } from "react";

function Home(){
  const [formData, setFormData] = useState({
    companyName:"",
    applyingAsA:"Experienced",
    coverLetterTone:"Formal",
    jobDescription:"",
    currentresume:""
  })

  const [geminiResponse,setGeminiResponse]=useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

 async function handleGenerateData(){
    console.log("FormData",formData);
    const prompt=` You are a professional career coach and resume optimization expert. 
Your task is to generate a personalized cover letter, improve the resume content, 
and provide an ATS (Applicant Tracking System) analysis.

Inputs:
Company Name: ${formData.companyName}
Experience Level: ${formData.applyingAsA}  (Fresher / Experienced)
Job Description: ${formData.jobDescription}
Current Resume: ${formData.currentResume} (If empty, assume no resume exists and create a draft)
Preferred Tone: ${formData.coverLetterTone}

Output (format clearly in sections):

1. Tailored Cover Letter  
Write a professional cover letter addressed to ${formData.companyName}.  
Use the specified tone: ${formData.coverLetterTone}.  
Highlight relevant skills and experiences based on the job description.  

2. Updated Resume Content  
Suggest optimized resume summary, bullet points, and skills tailored to ${formData.jobDescription}.  
Ensure the content is concise, achievement-focused, and ATS-friendly.  

3. Keyword Match Analysis  
Extract the most important keywords from the job description.  
Check if they exist in the provided resume (if given).  
List missing keywords that should be added.  

4. ATS Score Estimate (0–100)  
Provide a rough ATS match score for the current resume against the job description.  
Explain the reasoning briefly (e.g., missing keywords, formatting issues, irrelevant content).  

Ensure the response is structured, clear, and easy to display in a React app. `;
    const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';
const options = {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'X-goog-api-key': import.meta.env.VITE_GEMINI_API_KEY
  },
  body: `{"contents":[{"parts":[{"text":"${prompt}"}]}]}`
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log('gemini generated',data.candidates[0].content.parts[0].text);
  setGeminiResponse(data.candidates[0].content.parts[0].text);
} catch (error) {
  console.error(error);
}
  }

  const formatMarkdownText = (text) => {
    return text.split('\n').map((line, index) => {
      // Handle code blocks
      if (line.trim().startsWith('```') && line.trim().endsWith('```')) {
        return null; // Skip code block markers
      }
      if (line.trim() === '```') {
        return null; // Skip standalone code block markers
      }
      
      // Handle main section headers (starting with **)
      if (line.match(/^\*\*\d+\.\s.*\*\*$/)) {
        const cleanTitle = line.replace(/^\*\*|\*\*$/g, '');
        return (
          <h3 key={index} style={{
            color: '#1f2937',
            marginTop: '32px',
            marginBottom: '16px',
            borderBottom: '2px solid #3b82f6',
            paddingBottom: '8px',
            fontSize: '1.25rem',
            fontWeight: '600',
            letterSpacing: '-0.025em'
          }}>
            {cleanTitle}
          </h3>
        );
      }
      
      // Handle subsection headers (starting with **)
      if (line.match(/^\*\*[a-zA-Z].*\*\*$/)) {
        const cleanTitle = line.replace(/^\*\*|\*\*$/g, '');
        return (
          <h4 key={index} style={{
            color: '#374151',
            marginTop: '24px',
            marginBottom: '12px',
            fontSize: '1.1rem',
            fontWeight: '600'
          }}>
            {cleanTitle}
          </h4>
        );
      }
      
      // Handle lettered subsections (a), b), c))
      if (line.match(/^\*\*[a-z]\)\s.*\*\*$/)) {
        const cleanTitle = line.replace(/^\*\*|\*\*$/g, '');
        return (
          <h5 key={index} style={{
            color: '#059669',
            marginTop: '20px',
            marginBottom: '12px',
            fontSize: '1rem',
            fontWeight: '600'
          }}>
            {cleanTitle}
          </h5>
        );
      }
      
      // Handle bullet points
      if (line.match(/^\* \*\*.*\*\*/)) {
        const cleanText = line.replace(/^\* \*\*|\*\*$/g, '').replace(/\*\*/g, '');
        return (
          <li key={index} style={{
            marginBottom: '8px',
            lineHeight: '1.6',
            color: '#374151',
            fontSize: '0.9rem'
          }}>
            <strong>{cleanText}</strong>
          </li>
        );
      }
      
      // Handle regular bullet points
      if (line.match(/^\* /)) {
        const cleanText = line.replace(/^\* /, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        return (
          <li key={index} style={{
            marginBottom: '8px',
            lineHeight: '1.6',
            color: '#374151',
            fontSize: '0.9rem'
          }} dangerouslySetInnerHTML={{__html: cleanText}}>
          </li>
        );
      }
      
      // Handle regular paragraphs with bold text
      if (line.trim().length > 0) {
        const cleanText = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        return (
          <p key={index} style={{
            lineHeight: '1.6',
            marginBottom: '12px',
            color: '#374151',
            fontSize: '0.9rem'
          }} dangerouslySetInnerHTML={{__html: cleanText}}>
          </p>
        );
      }
      
      // Empty lines for spacing
      return <br key={index} />;
    }).filter(element => element !== null);
  };

    return(
        <div style={{
          minHeight: '100vh',
          backgroundColor: '#f8f9fa',
          padding: '0'
        }}>
          {/* Professional Header */}
          <header style={{
            backgroundColor: '#1f2937',
            color: 'white',
            padding: '30px 0',
            borderBottom: '3px solid #3b82f6'
          }}>
            <div style={{
              maxWidth: '1200px',
              margin: '0 auto',
              padding: '0 20px'
            }}>
              <h1 style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                margin: '0',
                letterSpacing: '-0.025em'
              }}>
                Professional Resume Builder
              </h1>
              <p style={{
                fontSize: '1.1rem',
                margin: '8px 0 0 0',
                color: '#d1d5db',
                fontWeight: '400'
              }}>
                Enterprise-grade AI-powered resume and cover letter optimization
              </p>
            </div>
          </header>

          {/* Main Content */}
          <main style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '40px 20px',
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: '40px',
            alignItems: 'start'
          }}>
            
            {/* Application Form */}
            <section style={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '32px',
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
            }}>
              <div style={{
                borderBottom: '2px solid #f3f4f6',
                marginBottom: '24px',
                paddingBottom: '16px'
              }}>
                <h2 style={{
                  color: '#111827',
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  margin: '0',
                  letterSpacing: '-0.025em'
                }}>
                  Application Information
                </h2>
                <p style={{
                  color: '#6b7280',
                  fontSize: '0.9rem',
                  margin: '4px 0 0 0'
                }}>
                  Please provide the following details for personalized optimization
                </p>
              </div>

              <form>
                <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="companyName" style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '6px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Target Company
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    placeholder="Enter company name"
                    value={formData.companyName} 
                    onChange={(e)=>setFormData({...formData,companyName:e.target.value})}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontSize: '0.9rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
                      backgroundColor: '#fff',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#3b82f6';
                      e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="applyingAsA" style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '6px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Experience Level
                  </label>
                  <select 
                    id="applyingAsA"
                    value={formData.applyingAsA} 
                    onChange={(e)=>setFormData({...formData,applyingAsA:e.target.value})}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontSize: '0.9rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
                      backgroundColor: '#fff',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#3b82f6';
                      e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <option value="Fresher">Entry Level / Graduate</option>
                    <option value="Experienced">Experienced Professional</option>
                  </select>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="coverLetterTone" style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '6px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Communication Style
                  </label>
                  <select 
                    id="coverLetterTone"
                    value={formData.coverLetterTone} 
                    onChange={(e)=>setFormData({...formData,coverLetterTone:e.target.value})}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontSize: '0.9rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
                      backgroundColor: '#fff',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#3b82f6';
                      e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <option value="Formal">Corporate / Formal</option>
                    <option value="Informal">Professional / Conversational</option>
                    <option value="casual">Approachable / Casual</option>
                  </select>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="jobDescription" style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '6px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Position Requirements
                  </label>
                  <textarea 
                    name="jobDescription" 
                    id="jobDescription" 
                    rows="8"
                    placeholder="Paste the complete job description including requirements, responsibilities, and qualifications..."
                    value={formData.jobDescription} 
                    onChange={(e)=>setFormData({...formData,jobDescription:e.target.value})}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontSize: '0.9rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
                      backgroundColor: '#fff',
                      resize: 'vertical',
                      minHeight: '120px',
                      fontFamily: 'inherit',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#3b82f6';
                      e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }}
                  ></textarea>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label htmlFor="currentResume" style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '6px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Current Resume Content
                  </label>
                  <textarea 
                    name="currentResume" 
                    id="currentResume" 
                    rows="8"
                    placeholder="Paste your existing resume content for optimization (optional)..."
                    value={formData.currentresume} 
                    onChange={(e)=>setFormData({...formData,currentresume:e.target.value})}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontSize: '0.9rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
                      backgroundColor: '#fff',
                      resize: 'vertical',
                      minHeight: '120px',
                      fontFamily: 'inherit',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#3b82f6';
                      e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }}
                  ></textarea>
                </div>

                <button 
                  type="button" 
                  onClick={handleGenerateData}
                  style={{
                    width: '100%',
                    padding: '14px 24px',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: 'white',
                    backgroundColor: '#1f2937',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease-in-out',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#111827';
                    e.target.style.transform = 'translateY(-1px)';
                    e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#1f2937';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  Generate Professional Documents
                </button>
              </form>
            </section>

            </section>

            {/* Results Section */}
            <section style={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '32px',
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
              maxHeight: '800px',
              overflowY: 'auto'
            }}>
              <div style={{
                borderBottom: '2px solid #f3f4f6',
                marginBottom: '24px',
                paddingBottom: '16px'
              }}>
                <h2 style={{
                  color: '#111827',
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  margin: '0',
                  letterSpacing: '-0.025em'
                }}>
                  Generated Analysis
                </h2>
                <p style={{
                  color: '#6b7280',
                  fontSize: '0.9rem',
                  margin: '4px 0 0 0'
                }}>
                  AI-powered resume optimization and career guidance
                </p>
              </div>

              {!geminiResponse ? (
                <div style={{
                  textAlign: 'center',
                  padding: '60px 20px',
                  color: '#9ca3af'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    margin: '0 auto 24px auto',
                    backgroundColor: '#f3f4f6',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem'
                  }}>
                    �
                  </div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    marginBottom: '12px',
                    color: '#374151'
                  }}>
                    Analysis Ready
                  </h3>
                  <p style={{
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                    maxWidth: '400px',
                    margin: '0 auto'
                  }}>
                    Complete the application form to receive your personalized resume optimization, 
                    cover letter, and ATS compatibility analysis.
                  </p>
                </div>
              ) : (
                <div style={{
                  backgroundColor: '#f9fafb',
                  border: '1px solid #f3f4f6',
                  borderRadius: '6px',
                  padding: '24px'
                }}>
                  <div>
                    {formatMarkdownText(geminiResponse)}
                  </div>
                </div>
              )}
            </section>
          </main>
        </div>
    );
}

export default Home;