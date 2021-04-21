import GlobalStyle from "./components/GlobalStyle";
import Home from "./components/pages/Home";
import { AnimatePresence } from 'framer-motion'
import { Switch, Route, useLocation } from 'react-router-dom'
import Aboutsec from "./components/pages/Aboutsec";
import Nav from './components/Navbar/Nav';
import Assets from './components/pages/Assets';
import Contact from './components/pages/Contact';

function App() {

  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      

      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>

      <Route path="/" exact>
        <Home/>
      </Route>

        <Route path="/about" exact>
          <Aboutsec/>
        </Route>

        <Route path="/assets" exact>
          <Assets/>
        </Route>

        <Route path="/Contact" exact>
          <Contact/>
        </Route>

      </Switch>
      </AnimatePresence>
    </div>
  );
}





export default App;
