import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { GrGithub } from "react-icons/gr";
import { LuScrollText } from "react-icons/lu";
import { AiOutlineExperiment } from "react-icons/ai";



const Home = () => {
    const navigate = useNavigate();

    return (
        <main id='main_container'>
            <header className='header'>
                <p className='first_line'>
                    <span className='first-line'>Hi! I'm Michael,</span>
                </p>
                <p className="second_line">
                    <span className='second-line'>Welcome to My Website ^_^</span>
                </p>
            </header>
            <nav id='button_links'>
                <Button label="Projects" logo={<AiOutlineExperiment />} clickHandler={() => navigate('/projects')} />
                <Button label="Experience" logo={<LuScrollText/>} clickHandler={() => navigate('/experience')} />
                <Button label="GitHub" logo={<GrGithub />} clickHandler={() => window.open("https://github.com/mroz-michael","#") } />
            </nav>
        </main>
    );
}

export default Home;
