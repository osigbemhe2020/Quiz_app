import React, {useState} from "react" 
import Start from "./quizApp//start.js";
import Quiz from './quizApp/Quizappreact.js'
import Restart from './quizApp//restart.js'
import './quizApp//Quizapp2.css';



    
export default function App() {
    const [screen, setScreen] = useState("start"); // "start", "quiz", "restart"
    const [score, setScore] = useState(0); 
    const [studentdata, setstudentdata] = useState({
      firstname:"" ,
      surname :"",
      subject:""
    }
      );

    function updateScore() {
      setScore((prevScore) => prevScore + 1); // Increase score
  }
    
  function restartQuiz() {
    setScore(0);
    setScreen("start"); // Go back to start screen
}

 function set(data){
  setstudentdata({
    firstname : data.Fname,
    surname : data.Sname,
    subject : data.subject
   });         
 }
    

    return (
       <div className="body">
            {screen === "start" && <Start change={() => setScreen("quiz")}  set={set}/>}
            {screen === "quiz" && <Quiz change={() => setScreen("restart")}  mark={updateScore} student={studentdata}/>}
            {screen === "restart" && <Restart change={restartQuiz} result={score}/>}
        </div>
      );
  }

  //import React from 'react';
//import ReactDOM from 'react-dom/client';
//import Pic from './me2.jpg';
//import './App.css';

/*

function SectionA() {
  return(
    <div className="mid-sec">
    <h2>Dirisu Paul</h2>
    <h4>Web Developer</h4>

    <p>Lorem ipsum dolor sit </p>
    <div className="flex">
      <div><button>View</button></div>
      <div><button>Request</button></div>
    </div>
 </div>
  );
}

function SectionB() {
  return(
    <div className="about">
            <h3>About</h3>
            <p>Lorem ipsum dolor sit  Donec in sapien in orci ornare tincidunt. Vestibulum cursus dolor nonMaecenas rhoncus posuere 
                est nec pharetra
            </p>
        </div>
  );
}
function SectionC(){
  return(
    <div className="section">
          <h3>Interview</h3>
          <p>Lorem ipsum dolor sit  Donec in sapien in orci ornare tincidunt. Vestibulum cursus dolor non</p>
    </div>
    );
}
function Wrapper(){
  return(
    <div className="Kard">
      <img src={Pic} className='img'/>
      <SectionA />
      <SectionB />
      <SectionC />
    </div>
  );
}*/ 
