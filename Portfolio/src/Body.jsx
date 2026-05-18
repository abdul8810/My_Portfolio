import "./Body.css"
function Body(){
   return(
    <div className="Body-card">
    <div className="left-Card">
        <h3> welcome to my portfolio</h3>
        <br></br>
        <h1>Hello, My name's </h1><br></br>
        <h1>Abdul Rahman</h1>
        <br></br>
        <div className="para">
          <p>I am a MERN Stack Developer passionate about<br></br>
             building modern web applications.</p>
        </div>
        <div className="body-button">
             <a href="public/Resume.pdf" download="Abdul_CV.pdf">
             <button>Download CV</button>
         </a>
  
        </div>
        </div>
        
        <div className="right-card">
            <img src="/myphoto1.jpg"/>

        </div>
        </div>


   ) 
}
export default Body;