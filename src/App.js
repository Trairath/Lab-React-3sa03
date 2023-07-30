import './App.css';
import WordCard from './WordCard';
import _ from 'lodash'

function App() {
  const word = ["hello","about","actor","crime","clear","begin","drunk","enjoy",
                "every","faith","fault","group","habit","heavy","judge","knife"];

  const randomElement = _.sample(word);
  return (
    <div>
      <h1 className='h1'>WordCardGame</h1>
      <div className="divider"></div>
      <WordCard value={randomElement}/>
      <div className="divider"></div>
      <p>Created by นายไตรรัตน์ แก้วห่อทอง 6210110712</p>
    </div>
  );
}

export default App;
