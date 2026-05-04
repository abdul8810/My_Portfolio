
import "./MyService.css"
export default function Card({icon,title,desc}){
    return(
        <div className="card">
            <div className="icon">{icon}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    )
}