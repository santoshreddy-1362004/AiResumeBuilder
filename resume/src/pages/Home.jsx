import React from "react";
import { useState } from "react";
//AIzaSyBycc2KKX_ueqc0fs1hroByuCjL4JM_g0M
function Home(){
  const [formData, setFormData] = useState({
    companyName:"",
    applyingAsA:"Experienced",
    coverLetterTone:"Formal",
    jobDescription:"",
    currentresume:""
  })

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
} catch (error) {
  console.error(error);
}
  }
    return(
        <>
   <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Company Name</label>
    <input
      type="text"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      value={formData.companyName} 
      onChange={(e)=>setFormData({...formData,companyName:e.target.value})}
    />
    <div id="emailHelp" className="form-text">
      company you are applying to 
    </div>
  </div>

  <div>
    <label className="applyingAsA" htmlFor="applyingAsA">
    Applying as a 
    </label>
     <select className="form-select" aria-label="applying As a" id="applyingAsA"
       value={formData.applyingAsA} onChange={(e)=>setFormData({...formData,applyingAsA:e.target.value})}
  >
  <option value="Fresher">Fresher</option>
  <option value="Experienced">Experienced</option>
  
</select>
 <div id="emailHelp" className="form-text">
      Are u applying as a fresher or experienced
    </div>

  </div>

  <div>
    <label className="applyingAsA" htmlFor="coverLetterTone">
      cover Letter Tone   
    </label>
     <select className="form-select" aria-label="applying As a" id="coverLetterTone"
      value={formData.coverLetterTone} onChange={(e)=>setFormData({...formData,coverLetterTone:e.target.value})}
     >

  
  <option value="Formal">Formal</option>
  <option value="Informal">Informal</option>
  <option value="casual">casual</option>
  
</select>
 <div id="emailHelp" className="form-text">
      Are u applying as a fresher or experienced
    </div>

  </div>


 

  <div className="mb-3 form-check">
    <label className="form-check-label" htmlFor="jobDescription">
      enter the job description
    </label>
   <textarea 
     name="jobDescription" 
     id="jobDescription" 
     cols="30" 
     rows="10"
     className="form-control"
     value={formData.jobDescription} 
     onChange={(e)=>setFormData({...formData,jobDescription:e.target.value})}
   ></textarea>
  </div>
  <div className="mb-3 form-check">
    <label className="form-check-label" htmlFor="currentResume">
     currentResume 
    </label>
   <textarea 
     name="currentResume" 
     id="currentResume" 
     cols="30" 
     rows="10"
     className="form-control"
     value={formData.currentresume} 
     onChange={(e)=>setFormData({...formData,currentresume:e.target.value})}
   ></textarea>
  </div>

  <button type="button" className="btn btn-primary" onClick ={handleGenerateData}>
    generate cover letter
  </button>
</form>

        </>
    )
}

export default Home;