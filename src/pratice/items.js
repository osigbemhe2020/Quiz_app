import React from "react"
import "./items.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


function Item(props){
    const kard = {
        padding:"1.6em 0em 0em 0em",
        backgroundColor:"rgba(167, 166, 166, 0.1)", 
        outline:"none",
        border:"none"
    };
    const btin = {
            borderTopLeftRadius:"100vmax",
            borderTopRightRadius:"100vmax",
            borderBottomRightRadius:"100vmax",
            borderBottomLeftRadius:"100vmax",
            padding: "6px 15px"
    }
    return(
          <div className="card" style={kard}>
                <img className="card-img-top pic" src={props.link} alt="placeholder" height="200px" width="200px" /><br/>
                <div className="card-body" style={{backgroundColor: "white"}}>
                <h5 className="card-title" style={{ marginTop: "-0.7em", fontWeight: "600" }}>{props.name}</h5>
                <p className="card-text">{props.description}</p>
                <button type="button" className="btn btn-outline-dark" style={btin}>Add to Cart</button>
                </div>       
         </div>
    );
}

export default function Row(){
    return(
        <div className="phones">
            <Item 
             name ="Google pixel 9 pro"
             description ="Lorem ipsum dolor sit amet"
             link = "./images/google pixel 9 pro.jpeg"
            />
            <Item 
             name ="Samsung galaxy S24 ultra "
             description ="Lorem ipsum dolor sit amet"
            link = "./images/samsung galaxy S24 ultra.jpeg"
            />
            <Item 
             name ="iphone 15.jpeg"
             description ="Lorem ipsum dolor sit amet"
             link = "./images/iphone 15.jpeg"
            />
            <Item 
             name ="One plus 15"
             description ="Lorem ipsum dolor sit amet"
             link = "./images/one plus 15.jpeg"
            />
        </div>
    );
}