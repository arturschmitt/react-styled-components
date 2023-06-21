import logo from './logo.svg';
/* import './App.css'; */
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Videos from './components/Videos/Videos';
import Footer from './components/Footer/Footer';
import {TelaInteira, MainStyled} from "./styledGlobal"


function App() {

    

  return (
    <>
      <TelaInteira>
        <Header />
        <MainStyled>
            <Nav />

            <Videos />
            
        </MainStyled>

        <Footer />        
        </TelaInteira>
    </>
  );
}

export default App;
