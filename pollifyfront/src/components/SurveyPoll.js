import React from 'react';
import * as Survey from 'survey-react';
import 'survey-react/survey.css';

const SurveyPoll = () => {
  // Define your poll questions and options
  const pollData = {
    questions: [
      {
        type: 'radiogroup',
        name: 'favoriteColor',
        title: 'What is your favorite color?',
        choices: ['Red', 'Blue', 'Green', 'Yellow'],
      },
      // Add more questions as needed
    ],
  };

  // Callback function to handle poll submission
  const onPollComplete = (survey) => {
    // Access poll results
    const data = survey.data;
    console.log(data);
    // Perform further actions with the poll data
  };

  return (
    <div>
      <h2>Vote on the Poll</h2>
      <Survey.Survey
        json={pollData}
        onComplete={onPollComplete}
      />
    </div>
  );
};

export default SurveyPoll;
