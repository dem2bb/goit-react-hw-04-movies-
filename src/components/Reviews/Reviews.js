import React from "react";

const Reviews = ({ reviews }) => {
  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ author, content }) => (
            <li key={author}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="review_text">We don't have any reviews for this movie!</p>
      )}
    </>
  );
};

export default Reviews;
