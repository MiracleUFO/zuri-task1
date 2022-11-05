import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Main from './pages/Main';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
