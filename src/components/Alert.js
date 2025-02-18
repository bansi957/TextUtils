import React from 'react'

export default function Alert(props) {
    if (!props.alert) return null;

    const captilize=(word)=>{
        let l=word.toLowerCase();
        return l.charAt(0).toUpperCase()+l.slice(1);
    }
  return (
    <div>
       <div className="alert alert-success alert-success alert-dismissible fade show" style={{backgroundColor:props.mode==='dark'?'white':'rgb(201 205 164)'}}role="alert">
  <strong>{captilize(props.alert.type)}</strong>:{props.alert.msg}
  
</div>
    </div>
  )
}
