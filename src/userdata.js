import React, {useState} from "react" 
import './Quizapp2.css';
 
export default function Form(props){

    

    function handleChange(event){
        changeformdata(
            prevformdata =>{
                return{
                    ...prevformdata,
                    [event.target.name]: event.target.value}
                })
    }
    
    function handleChange(event){
        changeformdata(
            prevformdata =>{
                return{
                    ...prevformdata,
                    [event.target.name]: event.target.value}
                })
            }
        }