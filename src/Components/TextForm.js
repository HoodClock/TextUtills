// we need function based componants(type Rfc)
import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let new_Text = text.toUpperCase();
        setText(new_Text);
        props.showAlert("Converted to Upper Case.", "success")


    }

    const handleloClick = () => {
        let lower_text = text.toLowerCase();
        setText(lower_text);
        props.showAlert("Converted to Lower Case.", "success")
    }


    const handleClear = () => {
        let clear_text = "";
        setText(clear_text);
        props.showAlert("Text is clear.", "success")

    };

    const handleBold = () => {
        const bold = document.getElementById("mybox");
        bold.style.fontWeight = "bold";
    };


    // when we use onChange function in every html attributes the default event is made..
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleCopy = () => {
        let copy = document.getElementsByClassName("copyText")[0];
        copy.select();
        props.showAlert("Copied to clipboard!", "success")
        try {
            document.execCommand("copy");
            console.log("Text is copied to clipboard!");
        } catch (error) {
            console.log("It contains some exception error" + error)
        }
    }

    const box = document.getElementById("mybox")
    //  we make a two function here {text, setText} so we can call back them when we need them simple..
    const [text, setText] = useState("")
    // Suppose if we want to change the text in the STATE
    // text = ("new text here"); // Wrong way to change the text
    // we use our second function which is setText
    // setText = ("New text here");
    return (
        <>
            <div className='container' style={{ backgroundColor: props.mode === "dark" ? "white" : "#101d2f", color: props.mode=== 'dark'?'black':'white'}}>
                <div className="my-1">
                    <label htmlFor="mybox" className="form-label">{props.heading}</label>
                    <textarea className="form-control copyText" style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === 'dark'?'white':'#101d2f' }} id="mybox" rows="8" onChange={handleOnChange} value={text}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to UpperCase</button>
                <button className="btn btn-primary mx-2 " onClick={handleloClick} >Convert to LowerCase</button>
                <button className="btn btn-danger" onClick={handleClear} type="submit">Clear</button>
                <button className="btn btn-success mx-2" onClick={handleBold} type="submit">Bold</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy} type="submit">Copy Text</button>
            </div>
            <div className="container my-2" style={{ backgroundColor: props.mode === "dark" ? "white" : "#101d2f", color: props.mode=== 'light'?'white':'black'}}>
                <h1>Your text attributes</h1>
                <p>{text.split(" ").length - 1} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h3>Prieview</h3>
                {text.length>0?text:"Enter some text above to preview."}
            </div>
        </>
    )
}

TextForm.defaultProps = {
    heading: "Enter your Text Here"
}