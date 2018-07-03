import React ,{Component} from 'react';
export default class RootLayout extends Component{
  constructor(props){
    super(props)
  }
  render(){
    const {children}=this.props;
    return(
      <div>
        {
          React.cloneElement(
              children,{rootProps:'rootProps'}
          )
        }
      </div>
    )
  }
}
