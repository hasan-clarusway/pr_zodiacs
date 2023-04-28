import React, { Component } from 'react';
import './Time.css';
  
  class Time extends Component {
   
     constructor() {
        super();
        this.state = {
            time: "", 
            date: ""
        };
     };
               
     timeDate = setInterval (
        () => {
           this.setState({
             time: new Date().toLocaleTimeString(),
             date: new Date().toLocaleDateString(),
           }); 
        },
        100
     );
      render() {
         return (           
           <div className='date'>
              <h3 className='year'>{this.state.date}</h3> 
              
              <h3 className='hour'>{this.state.time}</h3>              
           </div>  
            ) 
         }   
                            
     };
           
   export default Time;









   