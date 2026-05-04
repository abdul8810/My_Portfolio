import TelegramIcon from '@mui/icons-material/Telegram';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import emailjs from "@emailjs/browser"
import "./Contact.css"
export default function Contact(){
    const sendEmail=(e)=>{
        e.preventDefault();
        emailjs.sendForm(
            "service_5kv9kdlP",
            "template_g9w6gb4",
            e.target,
            "fjP1kFjj4ArWb3DFy"
        )
  .then(() => {
    alert("Message sent!");
    e.target.reset();
  })
  .catch((error) => {
    console.log(error);
    alert("Error Sending Message ");
  });
};
    return(
        <div className="contact">
            <div className="left-contact">
                <div className="contact-heading">Contact Me</div>
                <div className='telegram-icon'>
                     <TelegramIcon className='icon'/><span>arahman98469@gmail.com</span>
                </div>
               <div className='phone-icon'>
                <PhoneIcon className='icon'/><span>+91 8810246829</span>
               </div>
               <div className='icons'>
                <GitHubIcon/>
                <LinkedInIcon/>
                </div>
                <a href="public/CV.pdf" download="Abdul_CV.pdf"><button>Download CV</button></a>
                
         </div>
         <form className="right-contact" onSubmit={sendEmail}>
            <input placeholder='Enter Your Name' type='text' name="name" required/>
            <input placeholder='Enter gmail' type='text' name="email" required/>
            <textarea placeholder='Your message and Number' type="text" rows={6} name="message"/>
            <button type="submit">Submit</button>
         </form>

        </div>
    )
}