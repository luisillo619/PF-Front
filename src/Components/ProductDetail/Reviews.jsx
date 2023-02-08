import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCommentsProduct, postComment } from "../../redux/actions/index";
import './Reviews.css';


const initialScore = { s1: false, s2: false, s3: false, s4: false, s5: false };

export const Reviews = () => {
  const dispatch = useDispatch();
  const productId = useParams().id;
  const userLoginCookies = Cookies.get("user");
  const userId = userLoginCookies && JSON.parse(userLoginCookies).id;
  const commentsId = useSelector((state) => state.commentsId);

  const [score, setScore] = useState(initialScore);
  const [comment, setComment] = useState("");
  const [commentInfo, setCommentInfo] = useState({});

  useEffect(() => {
    setCommentInfo({ user: userId, product: productId });
    dispatch(getAllCommentsProduct(productId));
  }, [dispatch, productId, userId]);

  const handleChange = (e) => {
    e.preventDefault();
    setComment(e.target.value);
    setCommentInfo({ ...commentInfo, comment: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(commentInfo);
    dispatch(postComment(commentInfo));
    setComment("");
    setScore(initialScore);
  };
  // eesto ya se subioo ...
  const addStar = (rating) => {
    setScore({
      s1: rating >= 1,
      s2: rating >= 2,
      s3: rating >= 3,
      s4: rating >= 4,
      s5: rating >= 5,
    });
    setCommentInfo({ ...commentInfo, rating });
  };

  const starM = (
    <FontAwesomeIcon
      size="sm"
      icon={faStar}
      className="text-[#022957] w-7 h-7"
    />
  );

  console.log(commentsId);
  return (
    <div className="bg-white p-2 w-5/6">
      <form onSubmit={handleSubmit}>
        <label
          className="flex h-8 justify-center items-center m-2"
          htmlFor="comment"
        >
          Reseñas
        </label>
        <input
          type="text"
          value={comment}
          name="comment"
          id="comment"
          onChange={handleChange}
          placeholder="Write your Review for this Product"
        />
        <div className="flex flex-row w-2/6 ">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex items-center justify-center mb-5 hover:cursor-pointer"
            >
              <FontAwesomeIcon
                onClick={() => addStar(i)}
                icon={faStar}
                className={
                  score[`s${i}`]
                    ? "text-[#022957] w-7 h-7"
                    : "text-gray-300 hover:text-[#022957] w-7 h-7"
                }
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center m-2">
          <button
            className="flex  h-11 w-40 justify-center items-center content-center self-center bg-[#022957] text-white"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>

      {commentsId &&
        commentsId.map((e) => {
          return (
            <div className="border mt-4 rounded commentReview">
              <p className="flex items-start justify-start mb-5 hover:cursor-pointer mt-2">
                {e.comment}
              </p>

              {[e.rating].map((i) => (
                <div
                  key={i}
                  className="flex items-start justify-start mb-5 hover:cursor-pointer"
                >
                  {e.rating === 1 ? <div>{starM}</div> : ""}

                  {e.rating === 2 ? (
                    <div>
                      {starM}
                      {starM}
                    </div>
                  ) : (
                    ""
                  )}

                  {e.rating === 3 ? (
                    <div>
                      {starM} {starM} {starM}
                    </div>
                  ) : (
                    ""
                  )}

                  {e.rating === 4 ? (
                    <div>
                      {starM} {starM} {starM} {starM}
                    </div>
                  ) : (
                    ""
                  )}

                  {e.rating === 5 ? (
                    <div>
                      {starM} {starM} {starM} {starM} {starM}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </div>
          );
        })}
    </div>
  );
};
