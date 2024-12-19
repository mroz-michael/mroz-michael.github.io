import Project from "./Project";
import '../styles/Projects.css';
import { useNavigate } from "react-router-dom";
import { AiOutlineExperiment } from "react-icons/ai";
import NavBar from "./NavBar";


const Projects = () => {
    const navigate = useNavigate();
    const projectData = [

        {"name": "Compiler Front End",
            "description": "A scanner and parser that tokenize and parse txt file input according to a JSON-like grammar.",
            "tech_used": ["python"],
            "github_link": "https://github.com/mroz-michael/compiler_frontend"
        },
    
        { "name": "Dal CS Review Site",
            "description": "A MERN stack web app with user authentication that displays Dalhousie CS courses, allowing users to create reviews.",
            "tech_used": ["react", "mongodb", "js", "express", "node", "html", "css"],
            "github_link": "https://github.com/mroz-michael/cs-dal-courseinfo"
        },
    
        { "name": "CLI Chess",
            "description": "A command line version of Chess using Java Object-Oriented Principles.",
            "tech_used": ["java"],
            "github_link": "https://github.com/mroz-michael/cli-chess"
        },
    
        { "name": "Inventory Manager",
            "description": "A MERN stack web app that performs CRUD operations on a ficticious inventory of products.",
            "tech_used": ["react", "mongodb", "js", "express", "node", "html", "css"],
            "github_link": "https://github.com/mroz-michael/web-inventory_manager"
        }
    ]
    
    return (
        <section id='projects_section'>
            <header id='projects_header'>
                <div id='projects_title_container'>
                    <AiOutlineExperiment />
                    <h3>Projects</h3>
                </div>
               <NavBar ignoreLogo={"projects"}/>
            </header>
            <ul id="project_list">
                {projectData.map(project => 
                    <Project 
                        key={project.name}
                        name={project.name} 
                        tech_used={project.tech_used} 
                        description={project.description}
                        url={project.github_link}
                    />                    
                )}
            </ul>
        </section>
    )
}

export default Projects