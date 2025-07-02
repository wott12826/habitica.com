import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="hero">
          <h1>Нужно больше людей в команду?</h1>
          <p>Организуйте задачи и получайте внутриигровые бонусы.</p>
          <a href="#start" className="btn-start" style={{display:'inline-block',marginTop:'1rem',padding:'0.75rem 1.5rem',background:'var(--primary)',color:'#fff',borderRadius:'8px'}}>Начать</a>
        </div>
        <section className="features container grid">
          <div>
            <h2>Задачи для команды</h2>
            <p>Следите за выполнением в игровом формате.</p>
          </div>
          <div>
            <h2>Инструменты управления</h2>
            <p>Назначайте и проверяйте задачи.</p>
          </div>
          <div>
            <h2>Внутриигровые бонусы</h2>
            <p>Получайте награды за успешно выполненную работу.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
