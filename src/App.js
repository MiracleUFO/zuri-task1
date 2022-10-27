import Header from './components/Header';
import Footer from './components/Footer';
import './styles/App.css';
import Avatar from './components/Avatar';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Avatar />
      </main>
      <Footer />
    </div>
  );
}

export default App;
