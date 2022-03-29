import React from "react";

function StudyNotEnough({ cardCountNum }) {
  return (
    <div>
      <h3>Not Enough cards</h3>
      <p>
        You need at least 3 cards in your deck, your deck has {cardCountNum}
        cards.
      </p>
    </div>
  );
}
export default StudyNotEnough;
