import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function FAQ() {
  const items = [
    { q: 'Как добавить задачу?', a: 'Нажмите кнопку добавления и заполните форму.' },
    { q: 'Где посмотреть награды?', a: 'В профиле пользователя на десктопе.' },
  ];

  return (
    <>
      <Header />
      <main className="container" style={{paddingTop:'2rem'}}>
        <h1>FAQ</h1>
        <dl>
          {items.map((item,i) => (
            <div key={i} style={{marginBottom:'1rem'}}>
              <dt style={{fontWeight:600}}>{item.q}</dt>
              <dd style={{marginLeft:'1rem'}}>{item.a}</dd>
            </div>
          ))}
        </dl>
      </main>
      <Footer />
    </>
  );
}
