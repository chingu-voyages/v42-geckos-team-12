import { useEffect, useState } from "react";

import "./Quiz.scss";

function Quiz() {
  const [answerA, setAnswerA] = useState(0);
  const [answerB, setAnswerB] = useState(0);
  const [answerC, setAnswerC] = useState(0);
  const [answerD, setAnswerD] = useState(0);
  const [clickedNumber, setClickedNumber] = useState(0);
  const [showSubmit, setShowSubmit] = useState(false);
  const [showNext, setShowNext] = useState(true);

  const [questions, setQuestions] = useState([
    "Q1. The door is locked. What are you going to do?",
    "Q2. Which item would you choose in an unfamiliar room?",
    "Q3. There's seven chairs and ten kids. What do you do?",
    "Q4. In the morning, you are the person who",
    "Q5. What are you most afraid of?",
    "Q6. What class do you want to take the most in the world?",
    "Q7. Do What is",
    "Q8. What class do you want to take the most in the world?",
    "Q9. What class do you want to take the most in the world?",
    "Q10. What class do you want to take the most in the world?",
    "Q11. What class do you want to take the most in the world?",
  ]);

  const [optionA, setOptionA] = useState([
    "Kicks it down",
    "Cape",
    "The best seven of the lot can sit down",
    "The sky is so beautiful! I'm really looking forward to today!",
    "Discouragement",
    "Flying",
    "right",
    "Eat",
    "Poop",
    "I will sleep",
    "Eat",
  ]);
  const [optionB, setOptionB] = useState([
    "Picks the lock",
    "Crystal ball",
    "Kill three",
    "Why do you wake up now and make noise?",
    "Failure",
    "Herbology",
    "necessary",
    "Poop",
    "I will sleep",
    "Eat",
    "Poop",
  ]);
  const [optionC, setOptionC] = useState([
    "Finds the key",
    "Compass",
    "Bring three more chairs",
    "What dream did I dream? Should I go back to sleep agian?",
    "Stupid",
    "Potions",
    "wise",
    "Poop",
    "Eat",
    "Eat",
    "Poop",
  ]);
  const [optionD, setOptionD] = useState([
    "Knocks",
    "Diary",
    "Have everyone stand",
    "What I need now is to drink warm tea in my favorite mug",
    "Lie",
    "Defense Against the Dark Arts",
    "kind",
    "Poop",
    "I will sleep",
    "Eat",
    "Eat",
  ]);

  useEffect(() => {
    if (clickedNumber === 10) {
      setShowSubmit(true);
      setShowNext(false);
    } else {
      setShowSubmit(false);
      setShowNext(true);
    }
  }, [clickedNumber]);

  function SubmitModal() {
    return (
      <p>
        <input className="Quiz__gradientButton" type="submit" />
      </p>
    );
  }

  function NextModal() {
    return (
      <p>
        <input
          className="Quiz__gradientButton"
          type="button"
          value="Next"
          onClick={() => {
            setClickedNumber(clickedNumber + 1);
          }}
        />
      </p>
    );
  }

  function handleSubmit() {
    let max = Math.max(answerA, answerB, answerC, answerD);
    if (answerA === max) {
      alert("Your house is Gryffindor");
    } else if (answerB === max) {
      alert("Your house is Slytherin");
    } else if (answerC === max) {
      alert("Your house is Ravenclaw");
    } else if (answerD === max) {
      alert("Your house is Hufflepuff");
    }
  }

  return (
    <div className="quiz-container">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <h2 className="Quiz__question">{questions[clickedNumber]}</h2>
        {/* test buttons */}
        <div className="Quiz__radioButtonContainer">
          <input
            className="Quiz__radioButton"
            type="radio"
            id="answerA"
            value="answerA"
            name="answer"
            onClick={() => {
              setAnswerA(answerA + 1);
            }}
          />
          <label className="Quiz__radioButton-label" for="answerA">A. {optionA[clickedNumber]}</label>
        </div>

        <div className="Quiz__radioButtonContainer">
          <input
            className="Quiz__radioButton"
            type="radio"
            id="answerB"
            value="answerB"
            name="answer"
            onClick={() => {
              setAnswerB(answerB + 1);
            }}
          />
          <label className="Quiz__radioButton-label" for="answerB">B. {optionB[clickedNumber]}</label>
        </div>

        <div className="Quiz__radioButtonContainer">
          <input
            className="Quiz__radioButton"
            type="radio"
            id="answerC"
            value="answerC"
            name="answer"
            onClick={() => {
              setAnswerC(answerC + 1);
            }}
          />
          <label className="Quiz__radioButton-label" for="answerC">C. {optionC[clickedNumber]}</label>
        </div>

        <div className="Quiz__radioButtonContainer">
          <input
            className="Quiz__radioButton"
            type="radio"
            id="answerD"
            value="answerD"
            name="answer"
            onClick={() => {
              setAnswerD(answerD + 1);
            }}
          />
          <label className="Quiz__radioButton-label" for="answerD">D. {optionD[clickedNumber]}</label>
        </div>

      
        {showNext === true ? <NextModal /> : null}
        {showSubmit === true ? <SubmitModal /> : null}
      </form>
    </div>
  );
}

export default Quiz;

