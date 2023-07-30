import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
    word,
    chars,
    attempt: 1,
    guess: '',
    completed: false,
    score: 0
    }
   }

   
   
export default function WordCard(props){
    const [state, setState] = useState(prepareStateFromWord(props.value))
    const activationHandler = (c) => {
        console.log(`${c} has been activated.`)

        let guess = state.guess + c
        setState({...state, guess})

            if(guess.length == state.word.length){
                if(guess == state.word){
                    setState({...state, guess: '', completed: true})
                    setMessage("excellent!!")
                }else{
                    console.log('reset')
                    setState({...state, guess: '', attempt: state.attempt + 1})
                    setMessage("Try again")
                }
            }
        }

        const [message, setMessage] = useState('');
        const [answermessage, setanswerMessage] = useState('');

        const answerClick = () => {
        setanswerMessage("answer is : "+state.word);
        };
        const restart=()=> {
            document.location.reload()
        }

  
    return (
        <div>
                <h1>WordCardGame</h1>
                {state.chars.map((c,i)=><CharacterCard value={c} key={i}activationHandler={activationHandler} attempt={state.attempt}/>) }
                <h2>attempt score : {state.attempt}</h2>
                <button onClick={answerClick}>answer</button>
                <p >{answermessage}</p>
                <button onClick={restart}>restart</button>
                <p >{message}</p>
        </div>
    );
}