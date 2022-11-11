import React from 'react';
import app from './app.module.css';

const App: React.FC = () => {
  return (
    <div className={app.App}>
      <header className={app.AppHader}>
        <p>This is title</p>
        <a className={app.AppLink} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
