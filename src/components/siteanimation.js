import Portfolio from "../pages/portfolio";
import Home from "../pages/home";
import Contact from "../pages/contact";
import ClickLeftArrow from "./clickleftarrow";
import ClickRightArrow from "./clickrightarrow";


const SiteAnimation = (props) => {
    const home = {
        language: props.language,
        setLanguage: props.setLanguage,
        github: props.github,
        linkedin: props.linkedin,
        aboutClass: props.aboutClass
    }

    if (props.displayLocation.pathname === "/") {
        if (props.location.pathname === "/portfolio")
            props.setPage(<Portfolio language={props.language} setLanguage={props.setLanguage} />);
        else if (props.location.pathname === "/contact") props.setPage(<Contact language={props.language} setLanguage={props.setLanguage} />);
        ClickRightArrow(props.arrowNeed);
    }
    else if (props.displayLocation.pathname === "/contact") {
        if (props.location.pathname === "/portfolio")
            props.setPage(<Portfolio language={props.language} setLanguage={props.setLanguage} />);
        else if (props.location.pathname === "/") props.setPage(<Home {...home} />);
        ClickLeftArrow(props.arrowNeed);
    }
    else if (props.displayLocation.pathname === "/portfolio") {
        if (props.location.pathname === "/contact") { props.setPage(<Contact language={props.language} setLanguage={props.setLanguage} />); ClickRightArrow(props.arrowNeed); }
        else if (props.location.pathname === "/") { props.setPage(<Home {...home} />); ClickLeftArrow(props.arrowNeed); }
    }
    else {
        props.setPage(<Home {...home} />);
        ClickLeftArrow(props.arrowNeed);
    }
};

export default SiteAnimation;