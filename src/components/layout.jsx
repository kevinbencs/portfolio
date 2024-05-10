import React, { useEffect } from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import ScrollTop from './scrolltop';
import { useLocation, Link } from 'react-router-dom';

export default function Layout(props) {
  const location = useLocation();

  useEffect(() => {
    props.setArrowRight(
      location.pathname === '/' ? 'directionRight directionRightHome directionRightAppearance ' :
        'directionRight directionRightPortfolio directionRightAppearance'
    );
    props.setArrowLeft(
      location.pathname === '/portfolio' ? 'directionLeft directionLeftPortfolio directionLeftAppearance ' :
        'directionLeft directionLeftContact directionLeftAppearance'
    );

  }, []);
  return (
    <>
      <Header {...props.menu} />
      <ScrollTop />
      <main>

        <nav>
          {location.pathname !== '/contact' &&
            <Link to={location.pathname === '/' ? '/portfolio' : '/contact'} className={props.arrowRight}>
              <span></span>
            </Link>
          }
          {location.pathname !== '/' &&
            <Link to={location.pathname === '/portfolio' ? '/' : '/portfolio'} className={props.arrowLeft}>
              <span></span>
            </Link>
          }
        </nav>

        <div className='scene'>
          <div className={`${props.mainClass} main`}>
            <div className={`${props.currentClass} current`} >
              {props.children}
            </div>
          </div>
        </div>
        {props.isPageChange &&
          <div className={`${props.sceneClass} scene-move`}>
            <div className='main-move'>
              <div className='loader'>{props.page}</div>
            </div>
          </div>
        }
      </main>
      <Footer footerClass={props.footerClass} />
    </>
  )
}
