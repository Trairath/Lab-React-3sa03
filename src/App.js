import './App.css';
import WordCard from './WordCard';
import _ from 'lodash'

function App() {
  const word = ["hello","about","actor","crime","clear","begin","drunk","enjoy",
                "every","faith","fault","group","habit","heavy","judge","knife"];

  const randomElement = _.sample(word);
  return (
    <div>
      <WordCard value={randomElement}/>
    </div>
  );
}

export default App;
