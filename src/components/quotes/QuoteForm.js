import { useState, useRef } from 'react';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';

import classes from './QuoteForm.module.css';

const QuoteForm = ({ isLoading, onAddQuote }) => {
  const [, setIsTouched] = useState(false);

  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const formFocusedHandler = () => {
    setIsTouched(true);
  };

  const finishEntering = () => {
    setIsTouched(false);
  };

  return (
    <Card>
      <form className={classes.form} onFocus={formFocusedHandler} onSubmit={submitFormHandler}>
        {isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor="author">Author</label>
          <input type="text" id="author" ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="text">Text</label>
          <textarea id="text" rows="5" ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className="btn" onClick={finishEntering}>
            Add Quote
          </button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;
