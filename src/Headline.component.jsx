import { Component } from "react";

class Headline extends Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <div>
                <h5>{this.props.name}</h5>
            </div>
        )
    }

}
export default Headline;