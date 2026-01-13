import UserClass from "./UserClass";
import { Component } from "react";
import { useContext } from "react";
import UserContext from "../utils/userContext";

class About extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
    }

    render(){
        return(
        <div className="about">
            <h1>Hey!</h1>
            <h1>This is about page</h1>
            <div>
                <UserContext.Consumer>
                    {({loggedInUser}) => (<h1 className="font-bold">{loggedInUser}</h1>)}
                </UserContext.Consumer>
            </div>            
            <UserClass Name = {"Akila"} Location = {"Bangalore"}/>
        </div>
    );
    }    
};
export default About;