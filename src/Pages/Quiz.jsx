import React, { useState, useEffect, useReducer } from 'react';
import _ from "lodash"; // For deep cloning
import Answers from '../Components/Answers';
import ProgressBar from '../Components/ProgressBar';
import MiniPlayer from '../Components/MiniPlayer';

import { useParams, useNavigate } from 'react-router-dom'; // ✅ useNavigate
import ReadDataForQuesition from '../DataBase/ReadDataForQuesition';
import BasicLoader from '../Loader/BasicLoader';
import { useAuth } from '../Authentication/AuthContext';
import { getDatabase, ref, set } from "firebase/database"; // ✅ firebase database

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;

    case "answer":
      const questions = _.cloneDeep(state);
      questions[action.questionID].options[action.optionIndex].checked = action.value;
      return questions;

    default:
      return state;
  }
};

function Quiz() {
  const { id } = useParams();
  const { loading, error, questions } = ReadDataForQuesition(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [qna, dispatch] = useReducer(reducer, initialState);
  const { currentUser } = useAuth();
  const navigate = useNavigate(); // ✅ useNavigate instead of useHistory

  // Initialize QNA when questions load
  useEffect(() => {
    if (questions && questions.length > 0) {
      dispatch({
        type: "questions",
        value: questions,
      });
    }
  }, [questions]);

  function handleAnsChange(e, index) {
    dispatch({
      type: "answer",
      questionID: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  }

  function nextQuestion() {
    if (currentQuestion + 1 < qna.length) {
      setCurrentQuestion(prev => prev + 1);
    }
  }

  function prevQuestion() {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  }

  // Submit quiz
  async function submitQuiz() {
    const { uid } = currentUser;

    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);

    await set(resultRef, {
      [id]: qna,
    });

    navigate(`/result/${id}`, { state: { qna } }); // ✅ React Router v6 compatible
  }

  // Calculate progress percentage
  const percentage = qna.length > 0 ? ((currentQuestion + 1) / qna.length) * 100 : 0;

  return (
    <>
      {loading && <BasicLoader />}
      {error && <h2>There was a problem...</h2>}

      {!loading && !error && qna?.length > 0 && (
        <>
          <h1>
            <span className="material-icons-outlined"> help_outline </span>
            {qna[currentQuestion].title}
          </h1>
          <h4>Question can have multiple answers</h4>

          <Answers
            options={qna[currentQuestion].options.map((option, idx) => ({
              ...option,
              key: `${currentQuestion}-${idx}-${option.title}`, // unique key
            }))}
            handleAnsChange={handleAnsChange}
          />
          

          <ProgressBar
            next={nextQuestion}
            prev={prevQuestion}
            submit={submitQuiz}
            progress={percentage}
          />

          <MiniPlayer
            videoID={id}
            title={qna[currentQuestion].title}
          />
        </>
      )}
    </>
  );
}

export default Quiz;
