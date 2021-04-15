import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu'
import About from './components/About'
import Footer from './components/Footer'

import { Segment } from 'semantic-ui-react';

function App() {
  return (
    <Segment>
      <Menu/>
      <About/>
      <Footer/>
    </Segment>
    
  );
}

export default App;
