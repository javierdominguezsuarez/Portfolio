import React,{Component} from 'react';
import React, { setTimeout } from 'react';
class GravityButton extends Component{
    constructor(props){
        super(props)
        this.state={
            active:false,
        };
    }
    render() {
        return (
          <button
            className={`${
              this.state.active
                ?  "thankyou_button_active":"thankyou_button"
    }`
            }
            onClick={() =>
              {
              this.setState({ active: !this.state.active })
               setTimeout(()=>{
                this.setState({ active: !this.state.active })
               },400)
              } 
            }
          >
            Enable Gravity
          </button>
        );
    
    
      }
  
}