import React from 'react';
import SideBar from './components/SideBar/SideBar';
import routes from './routes';
import './App.css';

const App = () => {
  return (
    <main className='App'>
      <div className='sidebar'>
        <SideBar />
      </div>
      <section className='main'>{routes}</section>
    </main>
  );
};

export default App;
