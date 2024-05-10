import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "./main.css";
import SiteAnimation from '../siteanimation';
import Home from '../../pages/home';
import Portfolio from '../../pages/portfolio';
import Contact from '../../pages/contact';
import { Routes, Route, Navigate } from 'react-router-dom';


export default function Main(props) {
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [githubLink, setGithubLink] = useState('github-link github-link-appearance');
    const [github, setGithub] = useState('github');
    const [linkedinLink, setLinkedinLink] = useState('linkedin-link linkedin-link-appearance');
    const [linkedin, setLinkedin] = useState('linkedin');
    const [aboutClass, setAboutClass] = useState(location.pathname === '/' ?
        'about-visible' : 'about-hidden'
    );

    const arrowNeed = {
        location,
        setAboutClass,
        setFooterClass: props.setFooterClass,
        setArrowLeft: props.setArrowLeft,
        setArrowRight: props.setArrowRight,
        setGithubLink,
        setLinkedinLink,
        setDisplayLocation,
        setPage: props.setPage,
        setHamburgerMenu: props.setHamburgerMenu,
        setGithub,
        setLinkedin,
        setPageChange: props.setPageChange,
        setSceneClass: props.setSceneClass,
        setCurrentClass: props.setCurrentClass,
        setMainClass: props.setMainClass,
        displayLocation,
        setLanguageHide: props.setLanguageHide
    };

    const mainNeed = {
        location,
        displayLocation,
        aboutClass,
        arrowLeft: props.arrowLeft,
        arrowRight: props.arrowRight,
        github,
        githubLink,
        linkedin,
        linkedinLink,
        page: props.page,
        isPageChange: props.isPageChange,
        mainClass: props.mainClass,
        currentClass: props.currentClass,
        sceneClass: props.sceneClass,
        language: props.language,
        setLanguage: props.setLanguage,
        arrowNeed,
        setPage: props.setPage,
    };


    useEffect(() => {
        if (location.pathname !== displayLocation.pathname) {
            props.setPageChange(true);
            setTimeout(() => {
                if (props.isMenuActive) {
                    setTimeout(() => {
                        SiteAnimation(mainNeed);
                        props.setMenuActive(false);
                    }, 1500);
                }
                else {

                    SiteAnimation(mainNeed);
                }
            }, 10);
        }
        else {
            props.setMenuActive(() => false);
        }
    }, [location]);



    return (
        <Routes location={displayLocation}>
            <Route path="/" element={<Home aboutClass={aboutClass} 
                githubLink={githubLink} github={github} linkedin={linkedin}
                linkedinLink={linkedinLink}
                setLanguage={props.setLanguage}
                language={props.language} />
            }
            />
            <Route path="/portfolio" element={<Portfolio setLanguage={props.setLanguage} language={props.language} />} />
            <Route path="/contact" element={<Contact setLanguage={props.setLanguage} language={props.language} />} />
            <Route path='*' element={<Navigate to='/' replace={true} />} />
        </Routes>
    )
};