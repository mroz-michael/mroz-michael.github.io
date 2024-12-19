import { FaJava, FaNode} from "react-icons/fa6";
import { IoLogoPython, IoLogoCss3, IoLogoReact, IoLogoJavascript, IoLogoHtml5,  } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { SiExpress, SiGithub } from "react-icons/si";



const Project = ({name, description, tech_used, url}) => {

    const logos = {
        "java": <FaJava />,
        "node": <FaNode />,
        "python": <IoLogoPython />,
        "css": <IoLogoCss3 />,
        "react": <IoLogoReact />,
        "js": <IoLogoJavascript />,
        "html": <IoLogoHtml5/>, 
        "mongodb": <DiMongodb />,
        "express": <SiExpress />
    }

    
    return(
        <section className="project_info">
            <header id='project_header'>
                <div id='title_row'>
                    <h3 id='project_name'>{name}</h3>
                    <a href={url}><SiGithub fill="black" /></a>
                </div>
                <div id='logo_container'>
                    <ul className="project_logos">
                        {tech_used.map(t => <li key={t}>{logos[t]}</li>)}
                    </ul>
                </div>
            </header>
            <p>{description}</p>
        </section>
    )
}

export default Project;