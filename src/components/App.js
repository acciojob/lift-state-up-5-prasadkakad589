import React, { useState } from "react";
import './../styles/App.css';


const Login = ({ login }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <form onSubmit={handleSubmit}>

      <input 
        type="text" 
        placeholder="Username"
      />

      <br /><br/>

      <input 
        type="password" 
        placeholder="Password"
      />

      <br /><br/>

      <button type="submit">
        Login
      </button>

    </form>
  );
};


const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const login = () => {
    setIsLoggedIn(true);
  };


  return (
    <div>
      {/* Do not remove the main div */}

      {
        isLoggedIn ? <h2>You are logged in !</h2>:<Login login={login}/>
      }

    </div>
  );
}

export default App;