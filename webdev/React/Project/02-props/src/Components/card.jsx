import React from "react";

function Card1({username = "John Doe",btnText}) {
    return (
        <div className="card">
            <img height="400" src="https://images.unsplash.com/photo-1613243555988-441166d4d6fd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Random Image" />
            <h2>{username}</h2>
            <p>This is a description of the card. It contains some information about the content.</p>
            <button>{btnText}</button>
        </div>
    );
}

export default Card1;
