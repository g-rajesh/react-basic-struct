import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Review = ({
  id,
  name,
  job,
  image,
  text,
  nextHandler,
  prevHandler,
  randomHandler,
}) => {
  return (
    <article className="img-container">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <h3 className="job">{job}</h3>
      <p>{text}</p>
      <div className="btns">
        <button onClick={prevHandler} className="prev">
          <FaChevronLeft />
        </button>
        <button onClick={nextHandler} className="next">
          <FaChevronRight />
        </button>
      </div>
      <button onClick={randomHandler} className="btn-surprise">
        Surprise Me
      </button>
    </article>
  );
};

export default Review;
