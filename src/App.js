import './App.css';
import CharacterCard from './CharacterCard';

const word = "hello";
function App() {
  return (
    <div >
      {
      Array.from(word).map((c, i) => <CharacterCard value={c} key={i}/>)
      }
    </div>
  );
}

export default App;
