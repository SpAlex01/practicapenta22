import React from "react"

class TestComponent extends React.Component{

    render(){

        return <h1>Welcome from component</h1>
    }
}
class Welcome extends React.Component
{
   render(){


   
   return <TestComponent></TestComponent>
   }
}
export default Welcome