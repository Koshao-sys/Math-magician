import React, { useState, useEffect } from 'react';
import './Quote.css';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const res = await fetch('https://api.api-ninjas.com/v1/quotes', {
        method: 'GET',
        mode: 'cors',
        credentials: 'same-origin',
        headers: { 'X-Api-Key': '5kJDmE3WGF7Qyn/eZ7nkyw==GX2iStaFVPts8HD3' },
      });
      const [{ author, category, quote }] = await res.json();
      setQuote(quote);
      setAuthor(author);
      setCategory(category);
      setLoading(false);
      setError(null);
    };

    fetchData().catch((error) => {
      setLoading(false);
      setError(error.message);
    });
  }, []);

  return (
    <div className="quotes-container">
      {' '}
      {
        loading || error ? (
          <div className={loading ? 'loading' : 'error'}>
            { loading ? <div className="loader" /> : `Error: ${error}`}
          </div>
        ) : (
          <p>
            {quote}
            {' '}
            |
            {' '}
            (
            {category}
            )
            {' '}
            -
            {' '}
            {author}
          </p>
        )
      }
    </div>
  );
};

export default Quote;
