import React from "react";
import "./style.css";
import Classcomponent from "./components/Classcomponent.js" ;
import Functioncomponent from "./components/Functioncomponent.js" ;

export default function App() {
  return (
    <div>
      <Classcomponent name="Classcomponent" value="30000">
        :Elements of Classcomponents
      </Classcomponent>
      <Functioncomponent name="Functioncomponent" value="40000"> :Elements of Functioncomponent</Functioncomponent>
    </div>
  );
}
