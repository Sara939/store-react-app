import { Component } from "react"

class Client extends Component{
    constructor(props){
        super();
    };
    render(){
        let mydate= new Date("1988-3-3")
        return (
            <div>
           <h3>
           
            {this.props.firstname}
            {this.props.lastname}
            {this.props.addrass}
            {this.props.date}
            </h3>
            <img src= {this.props.pic}/>
            </div>
        )
    }
}

export default Client;