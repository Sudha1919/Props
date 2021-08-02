import React from "react";

const Functioncomponent = (props)=> {
  console.log(props);
return(
  <div>Functionalcomponent {props.children}</div>
)
}
export default Functioncomponent;