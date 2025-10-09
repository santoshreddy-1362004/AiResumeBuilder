import React from "react";
function Home(){
    return(
        <>
   <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Company Name</label>
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    />
    <div id="emailHelp" className="form-text">
      company you are applying to 
    </div>
  </div>

  <div>
    <label className="applyingAsA" htmlFor="applyingAsA">
    Applying as a 
    </label>
     <select className="form-select" aria-label="applying As a" id="applyingAsA">
  
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
     <select className="form-select" aria-label="applying As a" id="coverLetterTone">
  
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
   <textarea name ="jobDescription" id= "jobDescription" cols="30" rows="10"></textarea>
  
  </div>
  <div className="mb-3 form-check">
    <label className="form-check-label" htmlFor="jobDescription">
     currentResume 
    </label>
   <textarea name ="currentResume " id= "currentResume " cols="30" rows="10"></textarea>
    
  </div>

  <button type="button" className="btn btn-primary">
    generate cover letter
  </button>
</form>

        </>
    )
}

export default Home;