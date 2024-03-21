import React from "react";
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

/*Styles*/
import '../styles/components/socialnetworks.sass';

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/cesar-daniel15/" },
    { name: "github", icon: <FaGithub />, link: "https://github.com/cesar-daniel15" },
];

const SocialNetworks = () => {
    return (
        <section id="social-networks">
            {socialNetworks.map((network) => (
                <a href={network.link} target="blank" className="social-btn" id={network.name} key={network.name}>
                    {network.icon}
                </a>
            ))}
        </section>
    )
}

export default SocialNetworks;
