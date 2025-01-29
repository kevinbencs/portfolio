import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import Layout from './components/layout';
import Main from './components/main/main';

const getLang = () =>{
  const lan = localStorage.getItem('lan');
  if(lan !== null) return lan;
  else return 'HU';
}

function App() {
  const [isMenuActive, setMenuActive] = useState(false);
  const [hamburgerMenu, setHamburgerMenu] = useState('hamburger-menu-hov hamburger-menu-appearance');
  const [footerClass, setFooterClass] = useState('footer-visibility');
  const [language, setLanguage] = useState(getLang());
  const [sceneClass, setSceneClass] = useState('scene-move-right');
  const [currentClass, setCurrentClass] = useState('');
  const [mainClass, setMainClass] = useState('');
  const [isPageChange, setPageChange] = useState(false);
  const [page, setPage] = useState('');
  const [languageHide, setLanguageHide] = useState('language-show');
  const [arrowRight, setArrowRight] = useState();
  const [arrowLeft, setArrowLeft] = useState();

  const menu = {
    isMenuActive,
    setMenuActive,
    hamburgerMenu,
    setHamburgerMenu,
    page,
    sceneClass,
    currentClass,
    mainClass,
    isPageChange,
    language,
    setLanguage,
    languageHide
  };

  const content = {
    setMenuActive,
    setFooterClass,
    isMenuActive,
    setHamburgerMenu,
    setLanguage,
    language,
    sceneClass,
    setSceneClass,
    currentClass,
    setCurrentClass,
    mainClass,
    setMainClass,
    isPageChange,
    setPageChange,
    page,
    setPage,
    setLanguageHide,
    arrowLeft,
    arrowRight,
    setArrowLeft,
    setArrowRight
  }


  return (
    <div className="App">
      <BrowserRouter>
        <Layout menu={menu} footerClass={footerClass} {...content}>
          <Main {...content} />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
