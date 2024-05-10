import Home from '../pages/home';
import Portfolio from '../pages/portfolio';
import Contact from '../pages/contact';
import NotFound from '../pages/notfound';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SiteAnimation from '../components/siteanimation';


export default function Main(props) {
    const [language, setLanguage] = useState('HU');
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [githubLink, setGithubLink] = useState('github-link github-link-appearance');
    const [github, setGithub] = useState('github');
    const [linkedinLink, setLinkedinLink] = useState('linkedin-link linkedin-link-appearance');
    const [linkedin, setLinkedin] = useState('linkedin');
    const [aboutClass, setAboutClass] = useState('about about-visible');


    const [arrowRight, setArrowRight] = useState(
        location.pathname === '/' ? 'directionRight directionRightHome directionRightAppearance ' :
            'directionRight directionRightPortfolio directionRightAppearance');
    const [arrowLeft, setArrowLeft] = useState(
        location.pathname === '/portfolio' ? 'directionLeft directionLeftPortfolio directionLeftAppearance ' :
            'directionLeft directionLeftContact directionLeftAppearance'
    );

    const homeUseStates = {
        aboutClass,
        arrowRight,
        githubLink,
        github,
        linkedin,
        linkedinLink,
        setLanguage,
        language
    };

    const portfolioUseStates = {
        arrowRight,
        arrowLeft,
        setLanguage,
        language,
    };


    const arrowNeed = {
        displayLocation,
        location,
        setAboutClass,
        setFooterClass: props.setFooterClass,
        setArrowLeft,
        setArrowRight,
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
        setMainClass: props.setMainClass
    };


    

    useEffect(() => {
        

        if (location.pathname !== displayLocation.pathname) {
            props.setPageChange(true);
            setTimeout(() => {
                if (props.isMenuActive) {
                    setTimeout(() => {
                        SiteAnimation({ ...arrowNeed });
                        props.setMenuActive(false);
                    }, 1500);
                }
                else {
                    SiteAnimation({ ...arrowNeed });
                }
            }, 10);
        }
    }, [location]);

    return (
        <Routes locaton={displayLocation}>
            <Route path='/' element={<Home {...homeUseStates} />} />
            <Route path='/portfolio' element={<Portfolio {...portfolioUseStates} />} />
            <Route path='/contact' element={<Contact arrowLeft={arrowLeft} setLanguage={setLanguage} language={language} />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
};