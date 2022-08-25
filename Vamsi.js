import React, { Component } from 'react';  
class App extends React.Component {  
 constructor() {  
      super();        
      this.state = { count:0 };   
       
      }
      toggleDisplayBio ()  {  
        this.setState({count:this.state.count+1});  
        }   
        decrement () {
            this.setState({
                count:this.state.count-1
            });
        } 
      render() {  
          return (  
              <div>  
                  <h1 onClick={()=>this.toggleDisplayBio()}>Welcome to JavaTpoint!!</h1>  
                 {this.state.count}
                 <h1 onClick={()=>this.decrement()}>Decrement</h1>
             </div>  
        )  
    }  
}  
export default App;  