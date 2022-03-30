import React from 'react';
import './App.css';
import Header from './components/header/header.jsx';
import Sidebar from './components/sidebar/sidebar.jsx';
import Profile from './components/profile/profile.jsx';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <Profile />
    </div>
  );
}

export default App;
