import './App.css';
import Card from './components/card/Card';
import Cards from './components/cards/Cards';


function App() {
  return (
    <div className='main-container'>
       <Card />
       <Cards />
       <h1 className='title'>Daily Horoscope</h1>
    </div>
  );
}

export default App;
