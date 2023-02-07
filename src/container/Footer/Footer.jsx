import React from "react";

import "./Footer.scss";


export default function Footer () {
    return (
        <footer className="footer">
            <p className="copyright">Copyright 2023</p>
            <p>
                <a href="https://www.chingu.io/">
                    <img className="img-one" src="https://www.chingu.io/logo-with-text-192.png" alt="Chingu logo" target="_blank"></img>
                </a>
                <a href="https://github.com/chingu-voyages/v42-geckos-team-12">
                    <img className="img-two" src="https://avatars.githubusercontent.com/u/583231?v=4" alt="GitHub logo" target="_blank"></img>
                </a>
            </p>
        </footer>
    )
}
