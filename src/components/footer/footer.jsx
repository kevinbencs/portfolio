import React from 'react';
import './footer.css';

export default function Footer(props) {
    let year = new Date().getFullYear();
    const copyright = ('\u00A9');
  return (
    <footer className = {props.footerClass}>
        Copyright {copyright} {year} Bencs Kevin
    </footer>
  )
}
