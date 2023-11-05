import React from "react";
import Body_Top from "./Body_Top";
import Body_Images from "./Body_Images";
import Body_About from "./Body_About";
import Body_Interests from "./Body_Interests";

export default function Body() {
    return (<div className="Body">
        <Body_Top />
        <Body_Images />
        <Body_About />
        <Body_Interests/>
    </div>)
}