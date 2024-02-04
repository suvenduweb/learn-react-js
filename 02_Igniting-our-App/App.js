import React from "react";
import  ReactDOM  from "react-dom/client";


// const heading = React.createElement("h1", {id:"heading"}, "Hello World From React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


const parent =  React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child"},[
        React.createElement("h1", {}, "React With Suvendu"),
        React.createElement("h2", {}, "by Suvendu Bhowmik"),
    ]),
    React.createElement("div", {id: "child2"},[
        React.createElement("h1", {}, "hi i am h1  tag"),
        React.createElement("h2", {}, "hi i am h2  tag"),
    ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);