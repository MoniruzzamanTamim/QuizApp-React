import React, { useState, useEffect } from "react";
import { get, getDatabase, orderByKey, query, ref } from "firebase/database";

function ReadDataForAnswer(VideoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      const db = getDatabase();
      const AnswerRef = ref(db, "answers/" + VideoID + "/questions"); // fix path with slash
      const AnswerQuery = query(AnswerRef, orderByKey());

      try {
        setError(false);
        setLoading(true);

        const snapshot = await get(AnswerQuery);
        setLoading(false);

        if (snapshot.exists()) {
          // snapshot.val() might be an object, convert to array
          const answersArray = Object.values(snapshot.val());
          setAnswers(answersArray);
        }
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
      }
    }

    fetchQuestions();
  }, [VideoID]);

  return { loading, error,  answers }; // ✅ return as questions
}

export default ReadDataForAnswer;
