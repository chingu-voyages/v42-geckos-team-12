import React from "react";

import "./Footer.scss";


export default function Footer () {
    return (
        <footer className="footer">
            <div className="footer__container">
                <p className="footer__copyright">Copyright 2023</p>
                <img
                    className="footer__img-hp"
                    src="https://user-images.githubusercontent.com/74983536/128005620-f7f44ba5-14d7-4329-abe4-0da9c93137e1.png" 
                    alt="Harry Potter Logo" />
            </div>
            <div className="footer__container">
                <a href="https://www.chingu.io/" target="_blank" rel="noreferrer noopener">
                    <img className="footer__img-chingu" src="https://www.chingu.io/logo-with-text-192.png" alt="Chingu logo" />
                </a>
                <a href="https://github.com/chingu-voyages/v42-geckos-team-12" target="_blank" rel="noreferrer noopener">
                    <img className="footer__img-github" src="https://avatars.githubusercontent.com/u/583231?v=4" alt="GitHub logo" />
                </a>
            </div>
        </footer>
    )
}