import React, { useState } from 'react';


let TextUtils=()=> {  
  const [text, setText] = useState("");
  let Ucas=()=>{
    let ntxt = text.toUpperCase();
    setText(ntxt);
  }
  const lcas = ()=>{
    let newtext = text.toLowerCase();
    setText(newtext);
    }
    const Spar=()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      }   
    const Coyt=()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
        }
    let Clrt=()=>{
      let text='';
      setText(text);
    }
    return (
        <>
        <div className='container my-3'> 
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
  <textarea className="form-control"  value={text} onChange={(event)=>{
    setText(event.target.value);
  }} id="myBox" rows="6"></textarea>
</div>
<button disabled={text.length===0}  onClick={Ucas} className='btn btn-group-lg btn-warning text-info mx-2'>UpperCase</button>
<button disabled={text.length===0}  onClick={lcas} className='btn btn-group-lg btn-danger text-black mx-2'>LowerCase</button>
<button disabled={text.length===0}  onClick={Spar} className='btn btn-group-lg btn-success text-danger mx-2'>SpacesRemove</button>
<button disabled={text.length===0}  onClick={Coyt} className='btn btn-group-lg btn-primary text-white mx-2'>CopyText</button>
<button disabled={text.length===0}  onClick={Clrt} className='btn btn-group-lg btn-secondary text-warning mx-'>ClearText</button>
</div>
<div className="container">
<h1 className="">Your Summary</h1>
<hr/>
<p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} <i>word</i> and {text.length} <i>characters</i></p>
<p>{0.08 * text.split(" ").filter((element)=>{return element.length!==0}).length} <i>Minutes Read</i></p>
<h2>Preview</h2>
<hr/>
<p>{text.length>0?text: <i>Enter something text here</i>}</p>
</div>
        </>
        
    )
}
export default TextUtils;
