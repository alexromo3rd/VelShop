import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import routes from './routes';
import './App.css';

const App = () => {
  return (
    <main className='App'>
      <section className='sidebar'>
        <Sidebar className='sidebar' />
      </section>
      <section className='main'>{routes}</section>
    </main>
  );
};

export default App;
