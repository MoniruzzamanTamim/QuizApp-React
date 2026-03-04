import React from 'react'
import Summary from '../Components/Summary'
import Analysis from '../Components/Analysis'
import { useLocation, useParams } from 'react-router-dom';
import _ from "lodash";
import ReadDataForAnswer from '../DataBase/ReadDataForAnswer'


import BasicLoader from '../Loader/BasicLoader'

function Result() {
  const { id } = useParams();
  const { loading, error, answers } = ReadDataForAnswer(id);
  const location = useLocation();
  const qna = location.state?.qna;



  function calculateResult(){
    let score =0;
   answers.forEach((question, index1) => {
      let correctIndexes = [],
        checkedIndexes = [];
      question.options.forEach((option, index2) => {
        if (option.correct) correctIndexes.push(index2);
        if (qna[index1].options[index2].checked) {
          checkedIndexes.push(index2);
          option.checked = true;
        }
      });

      if (_.isEqual(correctIndexes, checkedIndexes)) {
        score = score + 5;
      }
    });

    return score;
  }
  const userScore = calculateResult();

   
  return (

   <>
      {loading && <BasicLoader />}
      {error && <h2>There was a problem...</h2>}

      {!loading && !error && answers.length > 0 && (
           <>
           <Summary score={userScore} noq={answers.length} />
            <Analysis answers={answers} />
         </>
      )}


        
       </>
  )
}

export default Result