import Card from "./MyServiceCard";
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import "./MyService.css";
export default function MyServices(){
    const services=[{
        icon:<CodeIcon/>,
        title:"Web development",
        desc:"I build responsive and interactive websites using HTML, CSS, JavaScript (ES6+), React.js, Bootstrap, Tailwind CSS. My code is clean, scalable, and optimized for performance. From landing pages to full sites, I bring ideas to life"
    },{
        icon:<DesignServicesIcon/>,
        title:"WEB DESIGN",
        desc:"I craft intuitive and user-friendly designs focused on UI/UX. Each layout is visually appealing and tailored for your audience. Designs are made to engage, convert, and leave a lasting impression."
    }
]
    return(
        <div className="service">
            <header>My Services</header>
            <div className="Card-container">
            {services.map((item,index)=>(
                <Card
                key={index}
                title={item.title}
                desc={item.desc}
                icon={item.icon}

                />
            ))}
           </div>
        </div>
    )
}