import reviews from "./data";
import { useState, useEffect } from "react";
import Review from "./Review";

function App() {
  const [index, setIndex] = useState(0);

  const data = reviews[index];

  const checkIndex = (number) => {
    if (number >= reviews.length) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };

  const nextHandler = () => {
    setIndex((index) => {
      const newIndex = checkIndex(index + 1);
      return newIndex;
    });
  };

  const prevHandler = () => {
    setIndex((index) => {
      const newIndex = checkIndex(index - 1);
      return newIndex;
    });
  };

  const randomHandler = () => {
    let newIndex = Math.floor(Math.random() * reviews.length);
    if (newIndex === index) {
      newIndex += 1;
    }
    setIndex(checkIndex(newIndex));
  };

  return (
    <main className="App">
      <div className="title">
        <h2>My Reviews</h2>
      </div>
      <section>
        <Review
          {...data}
          nextHandler={nextHandler}
          prevHandler={prevHandler}
          randomHandler={randomHandler}
        />
      </section>
    </main>
  );
}

export default App;
