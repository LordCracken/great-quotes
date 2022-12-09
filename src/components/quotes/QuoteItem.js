import classes from './QuoteItem.module.css';

const QuoteItem = ({ text, author }) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{text}</p>
        </blockquote>
        <figcaption>{author}</figcaption>
      </figure>
      <a className="btn">View Fullscreen</a>
    </li>
  );
};

export default QuoteItem;
