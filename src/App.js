import React from "react";


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="form-box">
          <h1 id="title">Sign Up</h1>
          <form action="">
            <div className="input-group">
              <div className="input-field" id="nameField">
                <input type="text" placeholder="Name"/>
              </div>
              <div className="input-field">
                <input type="email" placeholder="Email"/>
              </div>
              <div className="input-field">
                <input type="password" placeholder="Password"/>
              </div>
              <p>Lost password <a href="#">Click here</a></p>
            </div>
            <div className="btn-field">
              <button type="button" id="SignUpBtn">Sign Up</button>
              <button type="button" className="disable" id="signInBtn">Sign In</button>
            </div>

          </form>
        </div>
        </div>

    </div>
  );
}

export default App;
