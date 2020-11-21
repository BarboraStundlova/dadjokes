import React, { useState } from 'react';
import { render } from 'react-dom';
import './styly.css';

export const Joke = (props) => {
  const [like, setLike] = useState(props.likes);
  const [disLike, setdisLike] = useState(props.dislikes);

  const likesUp = () => {
    setLike(like + 1);
  };
  const disLikesUp = () => {
    setdisLike(disLike + 1);
  };
  return (
    <>
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img
              className="user-avatar"
              src={`assets/img/${props.userId}.png`}
            />
            <p className="user-name">{props.userName}</p>
          </div>

          <p className="joke__text">{props.text}</p>
        </div>
        <div className="joke__likes">
          <button
            id="btn-up"
            className="btn-like btn-like--up"
            onClick={likesUp}
          ></button>
          <span id="likes-up" className="likes-count likes-count--up">
            {like}
          </span>
          <button
            id="btn-down"
            className="btn-like btn-like--down"
            onClick={disLikesUp}
          ></button>
          <span id="likes-down" className="likes-count likes-count--down">
            {disLike}
          </span>
        </div>
      </div>
    </>
  );
};
