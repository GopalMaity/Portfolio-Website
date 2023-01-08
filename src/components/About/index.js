import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect,useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About =() => {

    const [letterClass, setLetterClass] = useState('text-animate') 

    

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return() => clearTimeout(timer)
      }, []);

    return(
        <>
        <div className="container about-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','m','e']}
                    idx={15}
                    />
                </h1>
                 <p>
                 I am a Final Year Information Technology Undergraduate who is passionate about creating software that is scalable and solves complex problems. I have learned Full Stack Development(MERN) and love to create web apps.
                 </p>
                 <p>Skills : </p>

                 <p>Languages: Java, Javascript, HTML, CSS</p>
                 <p>Frameworks: React, Node.js, Express, MongoDB, Bootstrap</p>
                 <p>Tools: Git, VS Code, Github</p>
                 <p>Subjects: DBMS, DSA, OOP,</p>

                 <p>Soft Skills: Time Management, Teamwork, Communication, Problem Solving
                 </p>

                 <p>*Currently Looking for an opportunity as a Software Developer or Related opportunity.</p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                    </div>
                </div>

            </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default About