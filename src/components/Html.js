import React from 'react';

export default function HtmlComponent() {
    return (
        <button 
            onClick={() => alert("Clicked!")}
            style={ {width:"100px", color: "blue"}}> 
            Click Me
        </button>);
}