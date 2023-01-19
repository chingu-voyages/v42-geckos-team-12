import React from "react";

import "./QuizPage.scss";
import { images } from "../../constants";

function QuizPage() {
    return (
        <div className="quizPage__section">
            <h2>Hogwarts House Mysteries</h2>
            <div>
                <img 
                    className="quizPage__house-sigil" 
                    src={images.gryffindorSigil} 
                    alt="Gryffindor Sigil" />
                <img 
                    className="quizPage__house-sigil" 
                    src={images.rawenclawSigil} 
                    alt="Ravenclaw Sigil" />
            </div>
            <div>
                <img 
                    className="quizPage__house-sigil" 
                    src={images.slytherinSigil} 
                    alt="Slytherin Sigil" />
                <img 
                    className="quizPage__house-sigil" 
                    src={images.hufflepuffSigil}
                    alt="Hufflepuff Sigil" />
            </div>
            <img src="" alt="Hogwarts" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="quizPage__btn-div">
                <button className="quizPage__answer-btn">Answer A</button>
                <button className="quizPage__answer-btn">Answer B</button>
                <button className="quizPage__answer-btn">Answer C</button>
                <button className="quizPage__answer-btn">Answer D</button>
            </div>
        </div>
    )
};

export default QuizPage;