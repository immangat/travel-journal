import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import data from './data/data'

function App() {
  const cards = data.map( record => <Card item = {record}/>)
  return (
    <div className="App">
     <Header />
     <div className='cards'>
     {cards}
     </div>
     
    </div>
  );
}

export default App;
