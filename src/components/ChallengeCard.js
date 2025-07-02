import React from 'react';

export default function ChallengeCard({ title, desc, reward }) {
  return (
    <div style={{background:'#fff',borderRadius:'10px',padding:'1rem',boxShadow:'0 2px 6px rgba(0,0,0,0.05)'}}>
      <h3 style={{marginBottom:'0.5rem'}}>{title}</h3>
      <p style={{fontSize:'0.9rem',marginBottom:'0.5rem'}}>{desc}</p>
      <span style={{color:'var(--primary)',fontWeight:600}}>{reward}</span>
    </div>
  );
}
