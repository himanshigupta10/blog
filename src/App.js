import React from 'react';
import './App.css';
import Posts from './components/posts';
import Home from './components/home';
import Footer from './components/footer';

function App() {
  return (
   <div>
     <Home />
     <Posts />
     <Footer />
   </div>
  );
}

export default App;
