import React from "react"








class Democ extends React.Component{

handleClick(){
    
return this.setState({showOtherText:!this.state.showOtherText})



}
    constructor(props){
        super(props);
        this.state={
            showOtherText:true
        }
    }
    render(){

        return (
            <div>

            <button onClick={this.handleClick}>Click Here !</button>
            {this.state.showOtherText?<h1>Welcome</h1>:<h1>Bye</h1>}
        </div>
        )
    }
}

export default Democ