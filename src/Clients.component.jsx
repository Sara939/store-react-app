import { Component } from "react";
import Client from "./client.component";

class Clients extends Component{
    constructor(props){
        super();
    };
    
    render(){
        let mydate= new Date("1988-3-3")
        return(
        <Client firstname="kl" lastname="hff"  addrass="hfhfhf" date= {mydate.getFullYear()} pic= "logo192.png" />
        
        )  
    }
}
export default Clients;