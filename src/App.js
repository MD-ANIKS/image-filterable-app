import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Page from './components/Page';
import About from './components/About';
import Contact from './components/Contact';
import Search  from './components/Search';
import Error from './components/Error';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
            <Route exact path="/search" element={<Search/>} />
            <Route exact path="/home" element={<Home/>} />
            <Route exact path="/page" element={<Page/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route path='*' element={<Error/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
