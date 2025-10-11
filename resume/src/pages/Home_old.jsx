import React from "react";
import { useState, useEffect } from "react";
//AIzaSyBycc2KKX_ueqc0fs1hroByuCjL4JM_g0M
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
    'X-goog-api-key': 'AIzaSyBycc2KKX_ueqc0fs1hroByuCjL4JM_g0M'
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
    return(
        <div style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '40px 20px'
        }}>
          {/* Header Section */}
          <div style={{
            textAlign: 'center',
            marginBottom: '40px'
          }}>
            <h1 style={{
              color: 'white',
              fontSize: '3rem',
              fontWeight: '700',
              marginBottom: '10px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}>
              AI Resume Builder
            </h1>
            <p style={{
              color: 'rgba(255,255,255,0.9)',
              fontSize: '1.2rem',
              fontWeight: '300'
            }}>
              Create tailored resumes and cover letters with AI assistance
            </p>
          </div>

          {/* Main Container */}
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: '40px',
            alignItems: 'start'
          }}>
            
            {/* Form Section */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              backdropFilter: 'blur(10px)'
            }}>
              <h2 style={{
                color: '#333',
                fontSize: '1.8rem',
                fontWeight: '600',
                marginBottom: '30px',
                textAlign: 'center'
              }}>
                Job Application Details
              </h2>

              <form>
                <div style={{ marginBottom: '25px' }}>
                  <label htmlFor="companyName" style={{
                    display: 'block',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#333',
                    marginBottom: '8px'
                  }}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="companyName"
                    placeholder="Enter the company name"
                    value={formData.companyName} 
                    onChange={(e)=>setFormData({...formData,companyName:e.target.value})}
                    style={{
                      padding: '12px 16px',
                      fontSize: '1rem',
                      border: '2px solid #e1e5e9',
                      borderRadius: '10px',
                      transition: 'all 0.3s ease',
                      backgroundColor: '#f8f9fa'
                    }}
                  />
                  <small style={{
                    color: '#6c757d',
                    fontSize: '0.875rem',
                    marginTop: '5px',
                    display: 'block'
                  }}>
                    The company you are applying to
                  </small>
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <label htmlFor="applyingAsA" style={{
                    display: 'block',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#333',
                    marginBottom: '8px'
                  }}>
                    Experience Level
                  </label>
                  <select 
                    className="form-select" 
                    id="applyingAsA"
                    value={formData.applyingAsA} 
                    onChange={(e)=>setFormData({...formData,applyingAsA:e.target.value})}
                    style={{
                      padding: '12px 16px',
                      fontSize: '1rem',
                      border: '2px solid #e1e5e9',
                      borderRadius: '10px',
                      transition: 'all 0.3s ease',
                      backgroundColor: '#f8f9fa'
                    }}
                  >
                    <option value="Fresher">Fresher</option>
                    <option value="Experienced">Experienced</option>
                  </select>
                  <small style={{
                    color: '#6c757d',
                    fontSize: '0.875rem',
                    marginTop: '5px',
                    display: 'block'
                  }}>
                    Select your experience level
                  </small>
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <label htmlFor="coverLetterTone" style={{
                    display: 'block',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#333',
                    marginBottom: '8px'
                  }}>
                    Cover Letter Tone
                  </label>
                  <select 
                    className="form-select" 
                    id="coverLetterTone"
                    value={formData.coverLetterTone} 
                    onChange={(e)=>setFormData({...formData,coverLetterTone:e.target.value})}
                    style={{
                      padding: '12px 16px',
                      fontSize: '1rem',
                      border: '2px solid #e1e5e9',
                      borderRadius: '10px',
                      transition: 'all 0.3s ease',
                      backgroundColor: '#f8f9fa'
                    }}
                  >
                    <option value="Formal">Formal</option>
                    <option value="Informal">Informal</option>
                    <option value="casual">Casual</option>
                  </select>
                  <small style={{
                    color: '#6c757d',
                    fontSize: '0.875rem',
                    marginTop: '5px',
                    display: 'block'
                  }}>
                    Choose the tone for your cover letter
                  </small>
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <label htmlFor="jobDescription" style={{
                    display: 'block',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#333',
                    marginBottom: '8px'
                  }}>
                    Job Description
                  </label>
                  <textarea 
                    name="jobDescription" 
                    id="jobDescription" 
                    cols="30" 
                    rows="6"
                    className="form-control"
                    placeholder="Paste the complete job description here..."
                    value={formData.jobDescription} 
                    onChange={(e)=>setFormData({...formData,jobDescription:e.target.value})}
                    style={{
                      padding: '12px 16px',
                      fontSize: '1rem',
                      border: '2px solid #e1e5e9',
                      borderRadius: '10px',
                      transition: 'all 0.3s ease',
                      backgroundColor: '#f8f9fa',
                      resize: 'vertical',
                      minHeight: '120px'
                    }}
                  ></textarea>
                  <small style={{
                    color: '#6c757d',
                    fontSize: '0.875rem',
                    marginTop: '5px',
                    display: 'block'
                  }}>
                    Copy and paste the job posting details
                  </small>
                </div>

                <div style={{ marginBottom: '30px' }}>
                  <label htmlFor="currentResume" style={{
                    display: 'block',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#333',
                    marginBottom: '8px'
                  }}>
                    Current Resume
                  </label>
                  <textarea 
                    name="currentResume" 
                    id="currentResume" 
                    cols="30" 
                    rows="6"
                    className="form-control"
                    placeholder="Paste your current resume content here (optional)..."
                    value={formData.currentresume} 
                    onChange={(e)=>setFormData({...formData,currentresume:e.target.value})}
                    style={{
                      padding: '12px 16px',
                      fontSize: '1rem',
                      border: '2px solid #e1e5e9',
                      borderRadius: '10px',
                      transition: 'all 0.3s ease',
                      backgroundColor: '#f8f9fa',
                      resize: 'vertical',
                      minHeight: '120px'
                    }}
                  ></textarea>
                  <small style={{
                    color: '#6c757d',
                    fontSize: '0.875rem',
                    marginTop: '5px',
                    display: 'block'
                  }}>
                    Your existing resume content for optimization
                  </small>
                </div>

                <button 
                  type="button" 
                  onClick={handleGenerateData}
                  style={{
                    width: '100%',
                    padding: '15px 30px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: 'white',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    border: 'none',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 20px rgba(102, 126, 234, 0.3)'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 12px 25px rgba(102, 126, 234, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.3)';
                  }}
                >
                  🚀 Generate AI-Powered Resume & Cover Letter
                </button>
              </form>
            </div>
            </div>

            {/* Response Section */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              backdropFilter: 'blur(10px)',
              maxHeight: '800px',
              overflowY: 'auto'
            }}>
              <h2 style={{
                color: '#333',
                fontSize: '1.8rem',
                fontWeight: '600',
                marginBottom: '30px',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'
              }}>
                <span>🤖</span> AI Generated Response
              </h2>

              {!geminiResponse ? (
                <div style={{
                  textAlign: 'center',
                  padding: '60px 20px',
                  color: '#6c757d'
                }}>
                  <div style={{
                    fontSize: '4rem',
                    marginBottom: '20px',
                    opacity: '0.3'
                  }}>
                    📄
                  </div>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: '500',
                    marginBottom: '10px',
                    color: '#495057'
                  }}>
                    Ready to Generate Your Content
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.6'
                  }}>
                    Fill out the form and click the generate button to create your AI-powered resume and cover letter.
                  </p>
                </div>
              ) : (
                <div className="gemini-response-container" style={{
                  backgroundColor: '#f8f9fa',
                  padding: '20px',
                  borderRadius: '15px',
                  border: '1px solid #dee2e6'
                }}>
                  {(() => {
                    try {
                      // Try to parse as JSON first
                      const jsonResponse = JSON.parse(geminiResponse);
                      return (
                        <div>
                          {/* JSON parsing logic remains the same as before */}
                          {/* Cover Letter Section */}
                          {jsonResponse.coverLetter && (
                            <div style={{ marginBottom: '30px' }}>
                              <h3 style={{
                                color: '#007bff',
                                marginBottom: '15px',
                                borderBottom: '2px solid #007bff',
                                paddingBottom: '5px'
                              }}>
                                1. {jsonResponse.coverLetter.title}
                              </h3>
                              <div style={{
                                backgroundColor: 'white',
                                padding: '15px',
                                borderRadius: '8px',
                                border: '1px solid #e9ecef'
                              }}>
                                <pre style={{
                                  whiteSpace: 'pre-wrap',
                                  fontFamily: 'Arial, sans-serif',
                                  fontSize: '14px',
                                  lineHeight: '1.6',
                                  margin: 0
                                }}>
                                  {jsonResponse.coverLetter.content}
                                </pre>
                              </div>
                            </div>
                          )}

                          {/* Resume Update Section */}
                          {jsonResponse.resumeUpdate && (
                            <div style={{ marginBottom: '30px' }}>
                              <h3 style={{
                                color: '#007bff',
                                marginBottom: '15px',
                                borderBottom: '2px solid #007bff',
                                paddingBottom: '5px'
                              }}>
                                2. {jsonResponse.resumeUpdate.title}
                              </h3>
                              
                              {jsonResponse.resumeUpdate.summary && (
                                <div style={{ marginBottom: '20px' }}>
                                  <h5 style={{ color: '#6c757d', fontWeight: 'bold' }}>Summary:</h5>
                                  <p style={{ lineHeight: '1.6', color: '#495057' }}>
                                    {jsonResponse.resumeUpdate.summary}
                                  </p>
                                </div>
                              )}

                              {jsonResponse.resumeUpdate.bulletPoints && (
                                <div style={{ marginBottom: '20px' }}>
                                  <h5 style={{ color: '#6c757d', fontWeight: 'bold' }}>Optimized Bullet Points:</h5>
                                  <ul style={{ paddingLeft: '20px' }}>
                                    {jsonResponse.resumeUpdate.bulletPoints.map((point, index) => (
                                      <li key={index} style={{ marginBottom: '10px', lineHeight: '1.6' }}>
                                        {point.optimized}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {jsonResponse.resumeUpdate.skills && (
                                <div>
                                  <h5 style={{ color: '#6c757d', fontWeight: 'bold' }}>Recommended Skills:</h5>
                                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {jsonResponse.resumeUpdate.skills.map((skill, index) => (
                                      <span key={index} style={{
                                        backgroundColor: '#007bff',
                                        color: 'white',
                                        padding: '4px 8px',
                                        borderRadius: '4px',
                                        fontSize: '12px'
                                      }}>
                                        {skill}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}

                          {/* Keyword Analysis Section */}
                          {jsonResponse.keywordAnalysis && (
                            <div style={{ marginBottom: '30px' }}>
                              <h3 style={{
                                color: '#007bff',
                                marginBottom: '15px',
                                borderBottom: '2px solid #007bff',
                                paddingBottom: '5px'
                              }}>
                                3. {jsonResponse.keywordAnalysis.title}
                              </h3>
                              
                              {jsonResponse.keywordAnalysis.extractedKeywords && (
                                <div style={{ marginBottom: '15px' }}>
                                  <h5 style={{ color: '#6c757d', fontWeight: 'bold' }}>Extracted Keywords:</h5>
                                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                    {jsonResponse.keywordAnalysis.extractedKeywords.map((keyword, index) => (
                                      <span key={index} style={{
                                        backgroundColor: '#28a745',
                                        color: 'white',
                                        padding: '3px 6px',
                                        borderRadius: '3px',
                                        fontSize: '11px'
                                      }}>
                                        {keyword}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {jsonResponse.keywordAnalysis.missingKeywords && (
                                <div>
                                  <h5 style={{ color: '#6c757d', fontWeight: 'bold' }}>Missing Keywords:</h5>
                                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                    {jsonResponse.keywordAnalysis.missingKeywords.map((keyword, index) => (
                                      <span key={index} style={{
                                        backgroundColor: '#dc3545',
                                        color: 'white',
                                        padding: '3px 6px',
                                        borderRadius: '3px',
                                        fontSize: '11px'
                                      }}>
                                        {keyword}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}

                          {/* ATS Score Section */}
                          {jsonResponse.atsScore && (
                            <div>
                              <h3 style={{
                                color: '#007bff',
                                marginBottom: '15px',
                                borderBottom: '2px solid #007bff',
                                paddingBottom: '5px'
                              }}>
                                4. {jsonResponse.atsScore.title}
                              </h3>
                              
                              <div style={{
                                backgroundColor: 'white',
                                padding: '15px',
                                borderRadius: '8px',
                                border: '1px solid #e9ecef'
                              }}>
                                <div style={{ marginBottom: '15px' }}>
                                  <h5 style={{ color: '#6c757d', fontWeight: 'bold' }}>Score:</h5>
                                  <div style={{
                                    fontSize: '24px',
                                    fontWeight: 'bold',
                                    color: jsonResponse.atsScore.score >= 80 ? '#28a745' : 
                                           jsonResponse.atsScore.score >= 60 ? '#ffc107' : '#dc3545'
                                  }}>
                                    {jsonResponse.atsScore.score}/100
                                  </div>
                                </div>
                                <div>
                                  <h5 style={{ color: '#6c757d', fontWeight: 'bold' }}>Reasoning:</h5>
                                  <p style={{ lineHeight: '1.6', color: '#495057', margin: 0 }}>
                                    {jsonResponse.atsScore.reasoning}
                                  </p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    } catch (e) {
                      // Parse markdown-formatted text
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
                                color: '#007bff',
                                marginTop: '25px',
                                marginBottom: '15px',
                                borderBottom: '2px solid #007bff',
                                paddingBottom: '5px'
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
                                color: '#6c757d',
                                marginTop: '20px',
                                marginBottom: '12px',
                                fontWeight: 'bold'
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
                                color: '#28a745',
                                marginTop: '15px',
                                marginBottom: '10px',
                                fontWeight: 'bold'
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
                                color: '#495057'
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
                                color: '#495057'
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
                                marginBottom: '10px',
                                color: '#495057'
                              }} dangerouslySetInnerHTML={{__html: cleanText}}>
                              </p>
                            );
                          }
                          
                          // Empty lines for spacing
                          return <br key={index} />;
                        }).filter(element => element !== null);
                      };

                      return (
                        <div>
                          {formatMarkdownText(geminiResponse)}
                        </div>
                      );
                    }
                  })()}
                </div>
              )}
            </div>
          </div>
        </div>
    );
}

export default Home;