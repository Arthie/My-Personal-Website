import React from 'react';

const SocialLinks = (props) => {
    return (
        <ul className='social-links'>
            <li className="twitter">
                <i className="fa fa-twitter fa-3x" aria-hidden="true"></i>
            </li>
            <li className="github">
                <i className="fa fa-github fa-3x" aria-hidden="true"></i>
            </li>
            <li className="linkedin">
                <i className="fa fa-linkedin fa-3x" aria-hidden="true"></i>
            </li>
            <li className="email">
                <i className="fa fa-envelope-o fa-3x" aria-hidden="true"></i>
            </li>
        </ul>
    );
}

export default SocialLinks;