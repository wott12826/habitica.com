import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header>
      <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'1rem 0'}}>
        <a href="index.html" className="logo" style={{fontWeight:700,fontSize:'1.5rem',color:'var(--primary)'}}>Habitica</a>
        <nav className="nav">
          <a href="index.html">Home</a>
          <a href="challenges.html">Challenges</a>
          <a href="faq.html">FAQ</a>
        </nav>
      </div>
    </header>
  );
}
