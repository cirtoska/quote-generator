import React, { useState, useEffect } from "react";

function QuotesGenerator() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/quotes/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.quote);
        setAuthor(data.author);
      });
  }, []);

  let fetchNewQuote = () => {
    fetch("https://dummyjson.com/quotes/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.quote);
        setAuthor(data.author);
      });
  };
  return (
    <>
      <div className="container m-auto">
        {/* <div className="quoteBtn m-auto"> */}
        <label
          htmlFor="my-modal-3"
          className="btn modal-button btn-block btn-lg m-5 mt-20"
        >
          Generate Quote
        </label>
        {/* </div> */}
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-xl font-bold italic py-4">{quote}</h3>
            <p className="py-4 text-lg font-semibold text-right">
              - {author} -
            </p>
            <button className="btn" onClick={fetchNewQuote}>
              New Quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default QuotesGenerator;
