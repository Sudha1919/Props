import React,{Component} from "react";

class Classcomponent extends Component{
  render(){
    console.log(this.props);
       return(
      <div>Classcomponent {this.props.children}</div>
    )
  }
}
export default Classcomponent;