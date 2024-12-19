import { SiGithub } from "react-icons/si";
import { LuScrollText } from "react-icons/lu";
import { FaHome } from "react-icons/fa";

import '../styles/Navbar.css';
import { AiOutlineExperiment } from "react-icons/ai";

const NavBar = ({ignoreLogo}) => {
    
    return (
        <nav id='nav_links'>
            
            <a href='/'> <FaHome fill="black"/> </a>
            {
                ignoreLogo !== "projects" &&
                <a href='/projects'><AiOutlineExperiment color="black"/> </a>
            }
            
            {
                ignoreLogo !== "experience" &&
                <a href='/experience'> <LuScrollText color="black" /> </a>
            }

            <a href="https://github.com/mroz-michael/" target="#"><SiGithub fill="black"/></a>
        </nav>
    )
}

export default NavBar;