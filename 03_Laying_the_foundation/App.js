import React from "react";
import  ReactDOM  from "react-dom/client";



// Jsx - HTML or XML- Like Syntex
// react element--
const jsxHeading = (
    <h1 id="heading"> 
        This is a jsx heading
    </h1>
);

//----React Components (two type)----//
// Class based Component -Old
// Functional Component -New

// This is Functional Component 
const Title = () => (
    <h1 id="heading"> 
        Hello i am React js
    </h1>
);


const HeadingComponent = () => (
    // you can write javascript code inside curly brackets
    <div id="container">
{/* component in another function call- components compositions */}
        {Title()}
{/* // component in another component call- components compositions */}
        <Title/>
        {"hello i am javascript code you can use me any ware using curly brackets"}
        <h1 id="heading">This is a jsx heading using Functional components</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

//render functional component
root.render(<HeadingComponent/>);

//render react element
// root.render(jsxHeading);
