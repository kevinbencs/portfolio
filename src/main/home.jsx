import React from 'react';
import './page.css';
import {Link} from 'react-router-dom';
import GithubLogo from '../images/github-mark-white.png';
import LinkedinLogo from '../images/linkedin.png';
import  Portrait from '../images/portrait.png'


export default function Home(props) {
  return (
    <>
      <section className= {props.aboutClass}>
        <img src={Portrait} alt='Portrait' className='portrait'/>
        <h2>Hello, my name is Bencs Kevin</h2>
        <section>I am full-stack web developer</section>
      </section>
      <nav>
        <Link to='/portfolio' className={props.arrowRight}>
            <span></span>
        </Link>
        <Link rel='noopener' target='_blank' to='https://github.com/' className = {props.githubLink} >
          <img src={GithubLogo} alt='github link' className={props.github}/>
        </Link>
        <Link rel='noopener' target='_blank' to='https://hu.linkedin.com/' className={props.linkedinLink}>
          <img src={LinkedinLogo} alt='linkedin link' className={props.linkedin}/>
        </Link>
      </nav>
    </>
  )
}
