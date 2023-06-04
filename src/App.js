import './App.css';
import { Counter } from './features/counter/Counter';
import { Pokemon } from './features/pokemon/Pokemon';
import { Summary } from './features/summary/Summary';

function App() {
  return (
    <div className="App">
      { /** <Counter />
      <Pokemon />
       **/ }
      
      <Summary />
      
    </div>
  );
}

export default App;
