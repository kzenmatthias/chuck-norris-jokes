import { useEffect, useState } from "react";

import Joke from "../components/Joke";

//destructor
export default function Jokes({ apiJokes }) {
  const [jokes, setJokes] = useState(apiJokes);
  const [likes, setLikes] = useState([]);
  const newJokes = [];
  let timer = null;

  useEffect(() => {
    const storedlikes = window.localStorage.getItem("likes");
    if (storedlikes != null) setLikes(JSON.parse(storedlikes));
  }, []);

  const addToLikes = (joke) => {
    if (
      likes.filter((like) => like.id == joke.id).length !== 1 &&
      likes.length < 10
    ) {
      //add liked element
      joke.liked = true;

      const newLikes = [...likes, joke];
      //add joke to likes
      setLikes(newLikes);
      //add to storage
      window.localStorage.setItem("likes", JSON.stringify(newLikes));
    }
  };

  const removeFromLikes = (jokeToBeRemoved) => {
    jokeToBeRemoved.liked = false;
    setLikes(likes.filter((joke) => joke.id !== jokeToBeRemoved.id));
  };

  const fillTimer = () => {
    fillLikes();
    timer = setInterval(fillLikes, 2000);
  };

  //Wort gerund ondanks het wachten op call !!!
  const fillLikes = async () => {
    const oldJokes = [...likes];

    if (likes.length < 10) {
      const res = await fetch(`https://api.chucknorris.io/jokes/random`);
      const newJoke = await res.json();

      //add liked value
      newJoke.liked = true;
      //create array for new jokes
      // newJokes.push(joke);

      const newJokes = [...oldJokes, newJoke];

      //add to likes
      setLikes(newJokes);
      console.log(likes);
      console.log(newJokes);
    } else {
      clearInterval(timer);
    }
  };

  return (
    <div>
      <ul>
        {jokes.map((joke) => (
          <Joke
            key={joke.id}
            joke={joke}
            addToLikes={addToLikes}
            removeFromLikes={removeFromLikes}
          />
        ))}
      </ul>

      <h2>Likes</h2>

      <button onClick={fillTimer}>Vul automatisch</button>

      <ol>
        {likes.map((joke) => (
          <Joke
            key={joke.id}
            joke={joke}
            addToLikes={addToLikes}
            removeFromLikes={removeFromLikes}
          />
        ))}
      </ol>
    </div>
  );
}

export async function getServerSideProps() {
  let apiJokes = [];
  const numberofjokes = 15;

  //Could use a map function
  for (let i = 0; i < numberofjokes; i++) {
    const res = await fetch(`https://api.chucknorris.io/jokes/random`);
    const joke = await res.json();

    //add like key
    joke.liked = false;

    apiJokes.push(joke);
  }

  // Pass data to the page via props
  return { props: { apiJokes } };
}
