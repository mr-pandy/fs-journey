import { useState } from "react";
import "./App.css";
import MostVotes from "./components/MostVotes";

function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(0);
  const [isVote, setIsVote] = useState(false);
  const [votes, setVotes] = useState({});

  const randIndex = Math.floor(Math.random() * 7) + 1;

  // Handle Click
  const handleClick = () => {
    setSelected(randIndex);
    const voteCount = votes[randIndex] || 0;
    setVotes({ ...votes, [randIndex]: voteCount });
  };

  // Handle Vote
  const handleVote = () => {
    setIsVote(true);
    setCount(() => count + 1);
    const updatedVotes = { ...votes };
    updatedVotes[selected] += 1;
    setVotes(updatedVotes);

  };

  const mostVotes = () => {
    let maxVotes = 0;
    let anecdoteWithMaxVotes = "";
    votes.map((vote) => {
      if (votes[vote] > maxVotes) {
        maxVotes = votes[vote];
        anecdoteWithMaxVotes = anecdotes[vote];
      }
      return anecdoteWithMaxVotes;
    });
  };

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      {isVote ? <p>Votes({count || 0}) </p> : null}
      <button onClick={handleVote}>vote</button>
      <button onClick={handleClick}>next anecdote</button>

      <MostVotes
        selectedAnecdotes={anecdotes[selected]}
        mostVotes={mostVotes}
      />
    </div>
  );
}

export default App;
