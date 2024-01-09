import React, {useState} from "react";

function Textfield(props) {

    const [text, setText] = useState("");

    const handleUpChange = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Upper Case", "success");    
    }

    const handleLoChange = () => {
    let newText = text.toLowerCase();
    setText(newText)  
    props.showAlert("Converted to Lower Case", "success");  
    }

    const handleCopy = () => {
        // let text = document.getElementById('myfield');  //no need because we were use navigator below
        // text.select();
        navigator.clipboard.writeText(text.value);
        // document.getSelection().removeAllRanges();  //if you want to unselected text when the time of copy 
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed!", "success");
    }

    const handleToClear = () => {
        setText("");   
        props.showAlert("Cleared!", "success"); 
    }

    //onchange call hote waqt aik event pass karega, jise hum function mein
    //receive karke uski value target karke, use setText mein dalkar 
    //state update karenge 
    const handleChange = (event) => {
    setText(event.target.value)
    }
   
   return(
    <>
<div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
<div className="mb-3">
    <h1>{props.title}</h1>
  <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
  <textarea className="form-control" placeholder="Enter Your Text" onChange={handleChange} value={text} id="myfield" rows="8" style={ {backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black'} }></textarea>
  <br/>
  <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleUpChange}>Convert to Upper Case</button>
  <button disabled={text.length === 0} className="btn btn-success mx-1" onClick={handleLoChange}>Convert to Lower Case</button>
  <button disabled={text.length === 0} className="btn btn-warning mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
  <button disabled={text.length === 0} className="btn btn-secondary mx-1" onClick={handleCopy}>Copy Text</button>
  <button disabled={text.length === 0} className="btn btn-outline-danger mx-1" onClick={handleToClear}>Clear Text</button>
  
</div>
</div>
<div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
    <h2>Summary of your Text</h2>
    <p> {text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words | {text.length} characters</p>
    <p>{0.008 * text.split(' ').filter((element)=>{return element.length !== 0}).length} minutes required to read</p>
    <h2>Preview</h2>
    <p>{text.length>0 ? text : "Nothing to Preview"}</p>

</div>
</>
)
}

export default Textfield;