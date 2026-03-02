import React, { useState, useEffect, useReducer } from 'react';
import _ from "lodash";
import Answers from '../Components/Answers';
import ProgressBar from '../Components/ProgressBar';
import MiniPlayer from '../Components/MiniPlayer';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import ReadDataForQuesition from '../DataBase/ReadDataForQuesition';
import BasicLoader from '../Loader/BasicLoader';
import { useAuth } from '../Authentication/AuthContext';
import { getDatabase, ref, set } from "firebase/database";

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach(q =>
        q.options.forEach(o => o.checked = false)
      );
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
  const navigate = useNavigate();
  const location = useLocation();
const videoTitle = location.state?.videoTitle;
  

  useEffect(() => {
    if (questions && questions.length > 0) {
      dispatch({ type: "questions", value: questions });
    }
  }, [questions]);

  const handleAnsChange = (e, index) => {
    dispatch({
      type: "answer",
      questionID: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < qna.length) setCurrentQuestion(prev => prev + 1);
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) setCurrentQuestion(prev => prev - 1);
  };

  const submitQuiz = async () => {
    const { uid } = currentUser;
    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);

    await set(resultRef, { [id]: qna });
    navigate(`/result/${id}`, { state: { qna } });
  };

  const percentage = qna.length > 0 ? ((currentQuestion + 1) / qna.length) * 100 : 0;

  return (
    <>
      {loading && <BasicLoader />}
      {error && <h2>There was a problem...</h2>}

      {!loading && !error && qna.length > 0 && (
        <>
          <h1>
            <span className="material-icons-outlined"> help_outline </span>
            {qna[currentQuestion].title}
          </h1>
          <h4>Question can have multiple answers</h4>

          <Answers
            options={qna[currentQuestion].options.map((option, idx) => ({
              ...option,
              key: `${currentQuestion}-${idx}-${option.title}`,
            }))}
            handleAnsChange={handleAnsChange}
          />

          <ProgressBar
            next={nextQuestion}
            prev={prevQuestion}
            submit={submitQuiz}
            progress={percentage}
          />

          <MiniPlayer videoID={id} videoTitle={videoTitle} />
        </>
      )}
    </>
  );
}

export default Quiz;