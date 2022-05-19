import React from "react";
import LinkedInLogo from "./assets/LinkedInLogo";
import GithubLogo from "./assets/GithubLogo";
import TwitterLogo from "./assets/TwitterLogo";

function About() {
  return (
    <div className="main">
      <h1>David Hsiao</h1>
      <h3>davidhsiao510@icloud.com</h3>
      <p>
        David offers over 4 years of professional experience building production
        ready enterprise software products. He has taken many projects from
        start to finish where he was responsible for technical design, tasks
        breakdown, implementation, end to end integration, documentation, and
        testing. He is a full stack developer with a focus in the front-end
        technologies with immense knowledge in Javascript, Typescript, HTML, and
        CSS. He is familiar with front end frameworks such as React, while
        writing unit tests with Jest and Testing library. He is familiar working
        in a fast-paced sprint environment as well as with Agile scrum
        methodologies. He has great communication skills and has experience
        collaborating across teams such as UX designers and product managers. He
        has recently completed a contract at Adobe early, in which he performed
        a full migration of an internal tool from AngularJS to React/Typescript
        while adding features and improving accessibility.
      </p>
      <button>
        <a
          href="https://drive.google.com/file/d/1JCXXlYvPbPFU38XXVxKSel9uL-2q4sYh/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          download
        >
          Resume Download
        </a>
      </button>
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
  );
}

export default About;
