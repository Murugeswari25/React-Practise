import { useState } from "react";

const UserFunc = (props) =>{
    const [Count] = useState(0);
    return (
        <div>
            <div>count = {Count}</div>
            <div>name: {props.name}</div>
            <div>Location: {props.loc}</div>
            <div>Contact: akilachandran25gmail.com</div>
        </div>
    )
}

export default UserFunc;