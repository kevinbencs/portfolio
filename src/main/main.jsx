import Home from '../pages/home';
import Portfolio from '../pages/portfolio';
import Contact from '../pages/contact';
import NotFound from '../pages/notfound';
import {Routes, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import "../content/content.css";


export default function Main(props){
    const [language, setLanguage] = useState('HU');

    useEffect(() => {
        if(language === 'HU'){
            props.setHomeText({
                'h1': 'Hello, az én nevem ',
                 'about': 'Egy full-stack webfejlesztő vagyok.'
            });
            props.setPortfolioText({
                'h1':'Webfejlesztő portfólió', 
                'section': 'Készségeim: HTML, CSS, Javascript, React, Node.JS, Sass, Bootstrapp'
            });
            props.setContactText({
                'h1':'Kapcsolat', 
                'h2': 'Egyéb elérhetőség', 
                'p': 'Ha fel szeretnéd venni velem a kapcsolatot, töltsd ki az űrlapot vagy küldj egy email-t a kevinbencs8@gmail.com címre.',
                'button': 'ELKÜLD'
            });
        }
        else{
            props.setHomeText({
                'h1': 'Hello, my name is ', 
                'about': 'I am a full-stack web developer.'
            });
            props.setPortfolioText({
                'h1':'Web developer portfolio', 
                'section': 'My skills: HTML, CSS, Javascript, React, Node.JS, Sass, Bootstrapp'
            });
            props. setContactText({
                'h1':'Get in touch', 
                'h2': 'Let\'s get social', 
                'p': 'If you wanna get in touch, fill up the form or send an email to kevinbencs8@gmail.com.',
                'button': 'SUBMIT YOUR MESSAGE'
            });
        }
    },[language]);

    return(
    <main>
        <Routes location={props.displayLocation}>
            <Route path="/" element={
                <>
                <div className = 'scene'> 
                    <div className = {`${props.mainClass} main`}>
                    <section className = {`${props.currentClass} current`} >
                        <Home aboutClass = {props.aboutClass} arrowRight = {props.arrowRight} 
                            githubLink = {props.githubLink} github = {props.github} linkedin = {props.linkedin} 
                            linkedinLink = {props.linkedinLink} 
                            homeText = {props.homeText}
                            setLanguage = {setLanguage}
                            language = {language}/>
                    </section>
                    </div>
                </div>
                {props.isPageChange && 
                    <div className = {`${props.sceneClass} scene-move`}>
                        <div className = 'main-move'>
                            <section className = 'loader'>{props.page}</section>
                        </div>
                    </div>
                }
                
                </>
            }/>

            <Route path="/portfolio" element={
                <>
                <div className = 'scene'> 
                    <div className = {`${props.mainClass} main`}>
                    <section className = {`${props.currentClass} current`}>
                        <Portfolio arrowRight = {props.arrowRight} arrowLeft = {props.arrowLeft}
                        setLanguage = {setLanguage}
                        language = {language}
                        portfolioText = {props.portfolioText}/>
                    </section>
                    </div>
                </div>
                {props.isPageChange && 
                    <div className = {`${props.sceneClass} scene-move`}>
                        <div className = 'main-move'>
                            <section className = 'loader'>{props.page}</section>
                        </div>
                    </div>
                }
                </>
            }/>

            <Route path="/contact" element={
                <>
                <div className = 'scene'> 
                    <div className = {`${props.mainClass} main`}>
                    <section className = {`${props.currentClass} current`}>
                        <Contact arrowLeft = {props.arrowLeft}
                        setLanguage = {setLanguage}
                        language = {language}
                        contactText = {props.contactText}/>
                    </section>
                    </div>
                </div>
                {props.isPageChange && 
                    <div className = {`${props.sceneClass} scene-move`}>
                        <div className = 'main-move'>
                            <section className = 'loader'>{props.page}</section>
                        </div>
                    </div>
                }
                </>
            }/>

            <Route path='*' element = {
                <>
                <div className = 'scene'> 
                    <div className = {`${props.mainClass} main`}>
                    <section className = {`${props.currentClass} current`}>
                        <NotFound setLanguage = {setLanguage} language = {language}/>
                    </section>
                    </div>
                </div>
                {props.isPageChange && 
                    <div className = {`${props.sceneClass} scene-move`}>
                        <div className = 'main-move'>
                            <section className = 'loader'>{props.page}</section>
                        </div>
                    </div>
                }
                </> 
            }/>
        </Routes>
    </main>
    )
};