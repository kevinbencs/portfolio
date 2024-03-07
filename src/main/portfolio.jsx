import React from 'react';
import {Link} from 'react-router-dom';

export default function Portfolio(props) {


  return (
    <>
      <article className='portfolio'>
        <h2>Web developer portfolio</h2>
        <section>My skills: HTML, CSS, Javascript, React, Node.JS</section>
      </article>
      <nav>
            <Link to='/contact' className = {props.arrowRight}>
                <span></span>
            </Link>
            <Link to='/' className = {props.arrowLeft}>
                <span></span>
            </Link>
        </nav>
    </>
    
  )
}


