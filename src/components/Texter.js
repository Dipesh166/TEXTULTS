import React from 'react'
import { useState } from 'react'




export default function Texter(props){
    const[text, setext]=useState('');
    const handleUpClick = ()=>{
        console.log("You have clicked + text")
        let newtext = text.toUpperCase();
        setext(newtext)
        props.showAlert("Convert to Upper Case", "Sucess");
    }
    const handleClearClick = ()=>{
        console.log("You have clicked + text")
        let newtext = '';
        setext(newtext)
        props.showAlert("Clear TXt", "Success");
    }

    const handleLoClick = ()=>{
        console.log("You have clicked + text")
        let newtext = text.toLowerCase();
        setext(newtext)
        props.showAlert("Convert to Lower Case", "success");
    }

    const handlecopy = () =>{
        console.log("i am copy");
        var text = document.getElementById("mybox")
           text.select();
           navigator.clipboard.writeText(text.value); 
           props.showAlert("Copy Txt", "success");

    }

    const handleOnChange= (event) =>{
        console.log("onchange")
        setext(event.target.value);
    }
    return(
        <>
        <div className='container'>
        <div className="mb-3">
            <h1  style={{color:props.mode === 'dark'?'white':'grey'}}>{props.heading} </h1>
  <label for="mybox" className="form-label"></label>
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{background:props.mode === 'dark'?'grey':'white'}}  id="mybox" rows="8"></textarea>
  <button className='btn btn-danger my-3 mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
  <button className='btn btn-danger my-3 mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
  <button className='btn btn-danger my-3 mx-2' onClick={handlecopy}>Copy txt</button>
  <button className='btn btn-danger my-3 mx-2' onClick={handleClearClick}>CleaR txt</button>
</div>
</div>
<div className='container'  style={{color:props.mode === 'dark'?'white':'grey'}}>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split("").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>

</>
    )
}