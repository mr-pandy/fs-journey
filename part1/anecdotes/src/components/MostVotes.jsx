import React from "react";

const MostVotes = ({ mostVotes, selectedAnecdotes }) => {
  return (
    <div>
      <h1>Anecdotes with Most Votes</h1>
      <p>{selectedAnecdotes}</p>
      <p>has {mostVotes} votes</p>
    </div>
  );
};

export default MostVotes;
