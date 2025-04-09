import React, {useState} from "react" 
import './Quizapp2.css';
 
export default function Form(props){

    const[formdata,changeformdata] = useState({
        name:"" ,
        phone :""
    })

    function handleChange(event){
        changeformdata(
            prevformdata =>{
                return{
                    ...prevformdata,
                    [event.target.name]: event.target.value}
                })
    }
    
    return(
        <form className="">
            <input 
            type ="text"
            placeholder="Name"
            name="name"
            onChange ={handleChange}
            value={formdata.name}
            />

           <input 
            type ="number"
            placeholder="phone number"
            name="phone"
            onChange ={handleChange}
            value={formdata.phone}
            /> 
        </form>
    )
}