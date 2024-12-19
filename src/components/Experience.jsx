import { LuScrollText } from "react-icons/lu";
import NavBar from './NavBar';
import '../styles/Experience.css';
import { IoSchoolSharp } from "react-icons/io5";
import { FaUserTie, FaAward } from "react-icons/fa";
import Job from "./Job";
import { SiGithub } from "react-icons/si";

const Experience = () => {
    return(
        
        <section id='experience_section'>
            
            <header id='experience_main_header'>
                <div id='experience_title_container'>
                    <LuScrollText />
                    <h3>Experience</h3>
                </div>
            <NavBar ignoreLogo={"experience"}/>
            </header>

            <section id='academic_experience'>
                <header className="experience_section_header">
                    <IoSchoolSharp/>
                    <p>Academic Experience</p>
                </header>
                <ul>
                    <li>I'm currently in the 2nd year of a Bachelor of Computer Science from Dalhousie University</li>
                    <p className='gpa'>GPA as of Fall 2024: 4.25/4.30</p>
                    <li> I also have a degree in General Business studies from Athabasca University</li>
                    <p className="gpa">GPA: 4.0/4.0</p>
                </ul>
            </section>

            <section id='professional_experience'>
                <header className="experience_section_header">
                    <FaUserTie/>
                    <p>Professional Experience</p>
                </header>
                <ul id="jobs_list">
                    <li>
                        <Job title="Teaching Assistant" 
                            employer="Dalhousie University"
                            date="Fall 2024" 
                            location="Halifax"
                            description="As a TA for Dalhousie's Intro to Web Development course, I took pride in providing academic support and working with my peers to maintain an effective and inclusive learning environment."
                        />
                    </li>
                    <li>
                        <Job title="Marker"
                            employer="Dalhousie University"
                            date="Fall 2024-Present"
                            location="Halifax"
                            description="I also have experience marking for Web Development and (upcoming) Discrete Math courses! Being a marker keeps me practicing my ability to pay attention to details, and I sincerely enjoy providing constructive and meaningful feedback to students."
                        
                        />
                    </li>
                    <li>
                        <Job title="Human Resources Intern"
                            employer="Scholten's"
                            date="Spring 2022"
                            location="Remote"
                            description="In a past life, I studied business with a focus on HR Management. Although I came to realize it wasn't the right fit for me, I'm grateful for the invaluable exeprience I gained about business strategy and professional communication."
                        
                        />
                    </li>
                </ul>
            </section>

            <section id='misc_experience'>
                <header className="experience_section_header">
                    <FaAward/>
                    <p>Awards & Other Experience</p>
                </header>
                <ul>
                    <li className='hackathon_container'>
                        <Job title="NASA Space Apps Challenge Hackathon Halifax 1st Place Winner"
                            date="October 2024"
                            description={
                                <div>
                                <a href="https://github.com/ElliotGBA/spaceapps2024/blob/master/README.md" target="#">Solar System Simulator <SiGithub color="black"/> </a>
                                <p>I participated in my first hackathon in October 2024. Teaming with four other 2nd-year CS students, we developed an interactive web app over a weekend and won first place in the Halifax region.</p>
                                </div>
                                } 
                        />
                    </li>
                    <li>
                    <Job title="Sexton Scholar"
                        date="Fall 2023, Winter 2024, Fall 2024"
                        description='The Sexton Scholar designation is awarded to Dalhousie CS students who achieve a 3.85 or higher GPA for the semester.'         
                    />
                    </li>
                </ul>
            </section>
        </section>
    )
}

export default Experience;