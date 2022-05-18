import React from "react";
import "./App.css";
import LinkedInLogo from "./assets/LinkedInLogo";
import GithubLogo from "./assets/GithubLogo";
import TwitterLogo from "./assets/TwitterLogo";

function App() {
  return (
    <div className="App">
      <div className="main">
        <h1>David Hsiao</h1>
        <h3>davidhsiao510@icloud.com</h3>
        <ul className="nav">
          <li>
            <a
              href="https://www.linkedin.com/in/dhsiao510/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInLogo />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/dhsiao510"
              target="_blank"
              rel="noreferrer"
            >
              <GithubLogo />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/dhsiao510"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterLogo />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
