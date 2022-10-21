import './App.css';
import NavBar from './components/NavBar.jsx';
import React from 'react'
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';


function App() {

  return (
    <div>
        <NavBar />
        <ItemListContainer />
        <ItemDetail/>

    </div>
  );
}

export default App;