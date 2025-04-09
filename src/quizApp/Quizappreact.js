import React, {useState} from "react" 
import data from "./data.js"
import logo from './logo.svg'
import './Quizapp2.css';
 
function Header(props){
    const questions = data.questions
    const noOfQuestions =questions.length
    const [sec,setSec] = useState(20)

    React.useEffect(() => {
        // Reset the timer when props.num changes
        setSec(20);
    }, [props.num]); 


    React.useEffect(() => {
        if (sec === 0) {
          props.changed(); // Call function when countdown ends
          return;
        }

        const interval = setInterval(() => {
            setSec((prevSec) => (prevSec > 0 ? prevSec - 1 : 0));
          }, 1000);
      
          return () => clearInterval(interval); // Cleanup interval
        }, [sec]);
    

    return(
        <div className="header">
            <div><h4>Welcome {props.fname} {props.sname}</h4></div>
            <div className="number-of-count">
            <span className="number-of-question">{props.num +1} of {noOfQuestions}</span>
            </div>
            <div className="timer-div">
            <img src={logo} />
            <span className="time-left">{sec}</span>
            </div>
        </div>
    )
}
function Question(props){
    const questions = data.questions
    return(
        <div className="question">
             <p className="q-text">{questions[props.num].question}</p>
        </div>
    )
}


function Option(props){
    return(
        <div className="option-div" style={props.style}>
            <p 
            className="op-text" 
            onClick={!props.disabled ? props.check : undefined} 
            style={{ cursor: props.disabled ? "not-allowed" : "pointer", opacity: props.disabled ? 0.95 : 1 }}>
                {props.text}
            </p>
        </div>
    )
}


function Options(props){
    const questions = data.questions
    const [selectedOption, setSelectedOption] = useState(null); 
    const [disabled, setDisabled] = useState(false);
    const correctAns = questions[props.num].correct
    
    React.useEffect(() => {
        setSelectedOption(null);
        setDisabled(false);
    }, [props.num]);
    
    function handleAnswer(option) {
        setDisabled(true);
        setSelectedOption(option);
         if(option=== correctAns){
              props.mark()
         }

    }
  
    return(
        <div>
             {questions[props.num].options.map((option, index) => {
                const isCorrect = option === correctAns;
                const isSelected = option === selectedOption;
                
                const optionStyle = isSelected 
                    ? (isCorrect ? { border: "2px solid lightgreen", color: "green" } 
                                 : { border: "2px solid red", color: "red" }) 
                    : {border: "2px solid grey", color : "black"  }; // Default styling when not selected

                return (
                    <Option 
                        key={index} 
                        text={option} 
                        check={() => handleAnswer(option)} 
                        style={optionStyle} 
                        disabled={disabled}
                    />
                );
            })}
        </div>
    );
}


export default  function Quiz({change, mark, student}){
    
    const questions = data.questions
    const [index,setIndex] = useState(0);
    
    function next() {
        if (index < questions.length - 1) {
            setIndex(prevIndex => prevIndex + 1);
        } else {
            change(); // Call the function to move to the next screen
        }
    }
    /*function marks(){
        mark()
    }*/

  // Increase score
  const {firstname,surname,subject} = student;
    
    return(
        <div className="display-container">
           <Header num ={index} changed ={next} fname={firstname} sname={surname}/>
           <Question num ={index}/> 
           <Options  num={index} mark={mark}/>    
           <div>
             <button id="next-button" onClick={next}>Next</button>
          </div>
       </div>
    )
}
     

