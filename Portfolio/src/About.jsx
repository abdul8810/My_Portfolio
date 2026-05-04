import "./About.css"
export default function About(){
    return(
        <div className="Main-card1">
            <div className="left-card2">
             <img src="/abdul.jpg" alt="Image"/>
            </div>
            <div className="right-card2">
               <h1>About ME</h1>
               <p>Hello! I'm Abdul Rahman, a passionate web developer and a student. I love building modern and user-friendly web experiences. Currently, I am learning and growing in web development and always eager to improve my skills. My goal is to become a professional full-stack developer. </p>
               
                <h2>Skills</h2>
                <p className="lant">Language and database/Libraries and framework</p>
                <p>Html5, CSS, JavaScript (ES6+), React.js, Python, Sql, Bootstrap, Tailwind CSS, Vite, AOS, React bits UI
                </p>
                <h2>Tools & platform API</h2>
                <p className="parth">Git, GitHub,Axios, React Router, React Icons, Postman, React Context API, REST APIs, GitHub Pages, Netlify,</p>
                <h2>Education</h2>
                <span>2022-2026</span>
                <p>Bachelor of Technology (B-Tech)</p>
                <p>Dr A.P.J Abdul kalam Texhnical University,Lucknow | year of graduation :2026</p>
                <span>2022</span>
                <p>12th from Sarvodaya Bal Vidyalaya Anand Vihar (Central Board of Secondary Education).</p>
                <span>2020</span>
                <p>P.N.N.Mohan Public School (Central Board of Secondary Education)</p>
               

            </div>
        </div>
    )
}