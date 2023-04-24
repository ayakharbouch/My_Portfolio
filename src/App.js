import logo from './logo.svg';
import './App.css';
import Header from './Components/Headers/Header';
import  {About}  from './Components/Body/About';
import { Portfolio } from './Components/Body/Portfolio';
import { Projet } from './Components/Body/Projet';
import Footer from './Components/Body/Footer';


function App() {
  return (
    //<h1>App works well</h1>
    <>
    <Header/>
    <About/>
    <Portfolio/>
    <Projet/>
    <Footer/>
   
    </>
  );
}

export default App;
