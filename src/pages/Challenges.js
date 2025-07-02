import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChallengeCard from '../components/ChallengeCard';

export default function Challenges() {
  const list = [
    { title: 'Первая неделя', desc: 'Завершите все задачи', reward: '+100 XP' },
    { title: 'Рабочие привычки', desc: 'Ежедневные встречи и отчеты', reward: '+200 XP' },
  ];

  return (
    <>
      <Header />
      <main className="container" style={{paddingTop:'2rem'}}>
        <h1 style={{marginBottom:'1rem'}}>Испытания</h1>
        <div className="grid" style={{gridTemplateColumns:'repeat(auto-fill,minmax(250px,1fr))'}}>
          {list.map((c,i) => (
            <ChallengeCard key={i} {...c} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
