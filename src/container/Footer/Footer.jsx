import React from "react";

import "./Footer.scss";


export default function Footer () {
    return (
        <footer className="footer">
            <p className="copyright">Copyright 2023</p>
            <p>
                <a href="https://www.chingu.io/" target="_blank" rel="noreferrer noopener">
                    <img className="img-one" src="https://www.chingu.io/logo-with-text-192.png" alt="Chingu logo"></img>
                </a>
                <a href="https://github.com/chingu-voyages/v42-geckos-team-12" target="_blank" rel="noreferrer noopener">
                    <img className="img-two" src="https://avatars.githubusercontent.com/u/583231?v=4" alt="GitHub logo" ></img>
                </a>
            </p>
        </footer>
    )
}