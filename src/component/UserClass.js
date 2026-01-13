import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props) 
        
        this.state={
            Name: "Dummy",
            Location: "Chennai"
        }
    };
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/Murugeswari25");
        const json = await data.json();
        console.log(json);
        this.setState(json);
        
    }

    render(){ 
        const {name, location, avatar_url} = this.state;
        return (
            <div className="profile-card">
                <img src={avatar_url}></img>
                <div>name: {name}</div>
                <div>Location: {location}</div>
                <div>Contact: akilachandran25gmail.com</div>
            </div>
        )
    }
}
export default UserClass;