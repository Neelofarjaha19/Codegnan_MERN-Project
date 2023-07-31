import React, { useState, useEffect } from "react";
import Polls from "react-polls";
import axios from "axios";

export default function VisitPolls() 
{
  const [polldata, setPolldata] = useState([]);
  const [pollAns1, setPollAns1] = useState([
    { option: "Sucess", votes: 2 },
    { option: "Double Block Buster Hit", votes: 3 },
    { option: "Super Hit", votes: 3 },
    { option: "Hit", votes: 1 },
  ]);

  const pollStyles2 = {
    questionSeparator: true,
    questionSeparatorWidth: "question",
    questionBold: true,
    questionColor: "#4F70D6",
    align: "center",
    theme: "purple"
  };

  const handleVote = (voteAnswer, pollAnswers, pollNumber) => {
    const newPollAnswers = pollAnswers.map((answer) => {
      console.log(answer)
      if (answer.option === voteAnswer) answer.votes++;
      return answer;
    });

    if (pollNumber === 1) 
    {
      setPollAns1(newPollAnswers);
    }
  };

  useEffect(() => {
    const autoAddVotes = (pollAnswers, pollNumber) => {
      console.log(pollAnswers, "And ", pollNumber)

      setTimeout(() => {
        const chosenAnswer = parseInt(Math.random() * 2, 10);
        handleVote(pollAnswers[chosenAnswer].option, pollAnswers, pollNumber);
        // autoAddVotes(pollAnswers, pollNumber);
      }, Math.random() * 5000);

    };

    // autoAddVotes(pollAns1, 1);

    FetchPoll();
  }, [pollAns1, FetchPoll]);

  function FetchPoll() 
  {
    axios.get(`https://pollify-backend.onrender.com/retrive/`).then((res) => {
      console.log(res.data);
      setPolldata(res.data);
      console.log("Poll Data variable: ", polldata);
    });
  }

  function MathRandom()
  {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);

    return randomNumber
  }

  return (
    <div>
      <h1
        style={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          fontWeight: "bold",
          width: "100%",
          color: "blueviolet",
          fontSize: "43px"
        }}
      >
        Public Polls
      </h1>

      <main
        style={{
          width: "50%",
          marginLeft: "28%"
        }}
      >
        <div style={{ width: "85%" }}>
          {
            polldata.map((poll) => (
              <Polls
                key = {poll._id}
                question = {poll.question}
                answers = {[
                  { option: poll.option1, votes: 8 },
                  { option: poll.option2, votes: 9 },
                  { option: poll.option3, votes: 5 },
                  { option: poll.option4, votes: 4 }
                ]}
                onVote={(voteAnswer) => handleVote(voteAnswer, pollAns1, 1)}
                customStyles={pollStyles2}
                noStorage
              />
            ))
          }
        </div>
      </main>
    </div>
  );
}
