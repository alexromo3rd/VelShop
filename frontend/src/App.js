import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import routes from './routes';
import './App.css';

const App = () => {
  return (
    <main className='App'>
      <NavBar />
      <section className='sidebar'>
        <Sidebar className='sidebar' />
      </section>
      <section className='main'>{routes}</section>
      <Footer />
    </main>
  );
};

export default App;
