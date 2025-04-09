import React, {useState} from "react" 
import data from "./data.js"
import './Quizapp2.css';

export default function Restart(props) {

    const questions = data.questions
    const noOfQuestions =questions.length
    const passmark = noOfQuestions / 2
    
    return (
        <div className="start-screen">
            <div className="result-box">
                {props.result > passmark ? <h1 className="pass-text">Congratulations you Passed</h1> : <h1 className="pass-text">Sorry you failed</h1>}
                <p style={{fontSize:"1.2em",marginTop:"1em"}}>Your score is :{props.result} / {noOfQuestions} </p>
            </div>
            <button className="start-button" onClick={props.change}>Restart</button>
        </div>
    );
}