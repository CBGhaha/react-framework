import React,{Component} from 'react';
export default class Child2 extends Component{
  constructor(props){
    super(props);
  }
  render(){
    console.log(this.props.publicProps)
    return(
      <div>
        homeChild2
      </div>
    )
  }
}
