import React from "react";

const SocialLinks = props => {
  return (
    <ul className="social-links">
      <li className="twitter">
        <a href="https://twitter.com/ArthurPetrie_" target="_blank">
          <i className="fa fa-twitter fa-3x" aria-hidden="true" />
        </a>
      </li>

      <li className="github">
        <a href="https://www.github.com/arthie" target="_blank">
          <i className="fa fa-github fa-3x" aria-hidden="true" />
        </a>
      </li>

      <li className="linkedin">
        <a href="https://www.linkedin.com/in/arthurpetrie" target="_blank">
          <i className="fa fa-linkedin fa-3x" aria-hidden="true" />
        </a>
      </li>

      <li className="email">
        <a href="mailto:arthur.petrie@hotmail.com">
          <i className="fa fa-envelope-o fa-3x" aria-hidden="true" />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
