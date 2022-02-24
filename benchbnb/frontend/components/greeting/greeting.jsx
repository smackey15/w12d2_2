import React from "react";
import {Link} from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {            
    const display = currentUser ? (
        <div>
            <h2>Welcome, {currentUser.username}</h2>
            <button onClick={logout}>Logout</button>
        </div>
    ) : (
        <div>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Log In</Link>
        </div>
    )

return (
    <div>{display}</div>
)
}

export default Greeting;

// render() {
//     return(
//         <div>
//         {this.props.currentUser} ? 
//             <h2>Welcome, {this.props.currentUser}</h2>
//             <button onClick={this.props.action}>Logout</button>
//         :
//             <Link to="/signup">Sign Up</Link>
//             <br />
//             <Link to="/login">Log In</Link>
//         </div>
//     )
// }
// }
