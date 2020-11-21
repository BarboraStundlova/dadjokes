import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import { Joke } from './Joke/joke.jsx';
import { jokes } from './jokes.js';

const App = () => {
  const oneJoke = jokes.map((joke) => (
    <span>
      <Joke
        userId={joke.id}
        userName={joke.name}
        text={joke.text}
        likes={joke.likes}
        dislikes={joke.dislikes}
      />
    </span>
  ));

  return (
    <div className="container">
      <div>{oneJoke}</div>
    </div>
  );
};

render(<App />, document.getElementById('app'));
