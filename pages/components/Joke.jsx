function Joke(props) {
  let joke = props.joke;

  return (
    <li>
      {joke.value}
      {joke.liked && (
        <button
          onClick={() => {
            props.removeFromLikes(joke);
          }}
        >
          Unlike
        </button>
      )}
      {!joke.liked && (
        <button
          onClick={() => {
            props.addToLikes(joke);
          }}
        >
          Like
        </button>
      )}
    </li>
  );
}

export default Joke;
