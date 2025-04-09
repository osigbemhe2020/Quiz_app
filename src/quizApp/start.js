import React, {useState} from "react" 
import './Quizapp2.css';

export default function Start(props) {

    const[data,setdata] = useState({
          Fname:"" ,
          Sname :"",
          subject:""
      })
    
      function handleSubmit(event) {
        event.preventDefault();  
        props.set(data);  
        props.change();    
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setdata(prevData => ({
            ...prevData,   
            [name]: value  
        }));
    }
    return (
        <div className="start-screen">
                
            <form className="start-form" onSubmit={handleSubmit}>
                 <h1>Student Quiz</h1>
                <label for="Fname">Firstname</label>
                <br/>
                <input 
                type ="text"
                placeholder="First name"
                name="Fname"
                onChange={handleChange} 
                value={data.Fname}
                />
                 <br/>
            <label for="Sname">Surname</label>
            <br/>  
            <input 
                type ="text"
                placeholder="Surname"
                name="Sname"
                onChange={handleChange} 
                value={data.Sname}     
                />
            <br/>
            <label for="Subject">Subject Name</label>
            <br/>
            <input 
               type ="text"
               placeholder="Mathematics"
               name = "subject"
               onChange={handleChange} 
               value={data.subject}
            /> 
            <br/>
           <button type="submit" className="start-button" >Start</button>
           </form>
            
        </div>
    );
}
 