import logo from './logo.svg';
import background from './background.jpeg'
import './App.css';
import { Header } from './components/header';
import { Container } from './components/container';

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${background})`}}>
      <Header />
      <Container />
    </div>
  );
}

export default App;
