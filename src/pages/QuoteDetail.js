import { useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';

import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';

const QuoteDetail = () => {
  const params = useParams();

  const { quoteId } = params;

  const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === 'error') {
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuote.text) return <p>No quote found!</p>;

  return (
    <>
      <HighlightedQuote author={loadedQuote.author} text={loadedQuote.text} />
      <Outlet />
    </>
  );
};

export default QuoteDetail;
