import React, { useState, useEffect } from "react";
import { get, getDatabase, orderByKey, query, ref } from "firebase/database";

function ReadDataForQuesition(VideoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      const db = getDatabase();
      const QuizRef = ref(db, "quiz/" + VideoID + "/questions"); // fix path with slash
      const QuizQuery = query(QuizRef, orderByKey());

      try {
        setError(false);
        setLoading(true);

        const snapshot = await get(QuizQuery);
        setLoading(false);

        if (snapshot.exists()) {
          // snapshot.val() might be an object, convert to array
          const questionsArray = Object.values(snapshot.val());
          setQuiz(questionsArray);
        }
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
      }
    }

    fetchQuestions();
  }, [VideoID]);

  return { loading, error, questions: quiz }; // ✅ return as questions
}

export default ReadDataForQuesition;
