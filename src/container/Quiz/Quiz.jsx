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

  const [questions] = useState([
    "Q1. The door is locked. What are you going to do?",
    "Q2. Which item would you choose in an unfamiliar room?",
    "Q3. There are seven chairs and ten kids. What do you do?",
    "Q4. In the morning, you are the person who says:",
    "Q5. What are you most afraid of?",
    "Q6. What class do you want to take the most in the world?",
    "Q7. Do what is",
    "Q8. Which animal is your perfect companion?",
    "Q9. What describes you best?",
    "Q10. You get the chance to take care of an animal of your choice. Which one is it?",
    "Q11. A look in the crystal ball reveals an important part of your life. What do you see?",
  ]);

  const [optionA] = useState([
    "Kick it down",
    "Cape",
    "The best seven of the lot can sit down",
    "The sky is so beautiful! I'm really looking forward to today!",
    "Discouragement",
    "Flying",
    "right",
    "Owl",
    "I'm not fearless, but I'll muster up my courage to do what is right.",
    "A baby dragon. It will stay small, right?",
    "My family.",
  ]);
  const [optionB] = useState([
    "Pick the lock",
    "Crystal ball",
    "Kill three",
    "Why do you wake me up now and make noise?",
    "Failure",
    "Herbology",
    "necessary",
    "Lizard",
    "I mainly do what is best for myself and my closest friends. I don't care about others.",
    "Anything that is potentially venomous. It will only bite my enemies anyways.",
    "Fame and fortune. Mostly fame.",
  ]);
  const [optionC] = useState([
    "Find the key",
    "Compass",
    "Bring three more chairs",
    "What dream did I dream? Should I go back to sleep agian?",
    "Stupidity",
    "Potions",
    "wise",
    "Raven",
    "I love to learn new things and I could spend hours in the library without getting bored.",
    "A crow, an eagle or a raven. Such majestic and wise birds!",
    "Progression and self-improvement.",
  ]);
  const [optionD] = useState([
    "Knock",
    "Diary",
    "Have everyone stand",
    "What I need now is warm tea in my favorite mug.",
    "Lies",
    "Defense Against the Dark Arts",
    "kind",
    "Dog",
    "I care a lot about how others feel and I'll comfort them if they need it.",
    "A hippogryph (a mixture between a horse and an eagle). We can fly and enjoy the peaceful surroundings together.",
    "Peace and harmony with nature.",
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
          <button
            className="Quiz__radioButton"
            type="button"
            id="answerA"
            value="answerA"
            name="answer"
            onClick={() => {
              setAnswerA(answerA + 1);
            }}
          >A. {optionA[clickedNumber]}</button>
        </div>
        <div className="Quiz__radioButtonContainer">
          <button
            className="Quiz__radioButton"
            type="button"
            id="answerB"
            value="answerB"
            name="answer"
            onClick={() => {
              setAnswerB(answerB + 1);
            }}
          >B. {optionB[clickedNumber]}</button>
        </div>
        <div className="Quiz__radioButtonContainer">
          <button
            className="Quiz__radioButton"
            type="button"
            id="answerC"
            value="answerC"
            name="answer"
            onClick={() => {
              setAnswerC(answerC + 1);
            }}
          >C. {optionC[clickedNumber]}</button>
        </div>
        <div className="Quiz__radioButtonContainer">
          <button
            className="Quiz__radioButton"
            type="button"
            id="answerD"
            value="answerD"
            name="answer"
            onClick={() => {
              setAnswerD(answerD + 1);
            }}
          >D. {optionD[clickedNumber]}</button>
        </div>
        {showNext === true ? <NextModal /> : null}
        {showSubmit === true ? <SubmitModal /> : null}
      </form>
    </div>
  );
}

export default Quiz;

