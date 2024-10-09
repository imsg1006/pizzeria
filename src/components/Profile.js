import { useEffect, useState } from "react";

const Profile = (props) =>{
    const [count,setCount]= useState(0);

    useEffect(()=>{
        // API Call
        const timer = setInterval(()=>{
            console.log("Namaste React OP");
        },1000);

        return()=>{
            clearInterval(timer);
        };
    },[]);

    return(
        <div>
            <h1>Profile Component</h1>
            <h3>name: {props.name}</h3>
            <h2>Count: {count}</h2>
            <button onClick={()=> setCount(1)}>Count</button>
        </div>
    );
};

export default Profile;