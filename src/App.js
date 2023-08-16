import React from 'react';
import { Header } from "./components/Header";
import {BrowserRouter as Router} from "react-router-dom";
import {Paginas} from "./components/Paginas";
import {Dataprovider} from "./context/Dataprovider"
import {Carrito} from "./components/Carrito"


const App = () => {
  return (
    <Dataprovider>
    <div className='App'>
      <Router>
      <Header />
      <Carrito/>
      <Paginas />
      </Router>
    </div>
    </Dataprovider>
  );
}

export default App;






