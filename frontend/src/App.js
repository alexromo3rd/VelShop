import React from 'react';
import SideBar from './components/SideBar/SideBar';
import routes from './routes';
import './App.css';

const App = () => {
  return (
    <main className='App'>
      <section className='sidebar'>
        <SideBar className='sidebar' />
      </section>
      <section className='main'>{routes}</section>
    </main>
  );
};

export default App;
