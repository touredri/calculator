import { useState, useEffect } from 'react';

const DisplayQuote = () => {
  const [quote, setQuote] = useState([]);
  const [isloading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=love',
          {
            headers: {
              'X-Api-Key': 'nA8aOYlbqZZxy+CR4vGCaQ==nFOrV3FMpzOrHcnO',
            },
          },
        );
        const data = await res.json();
        setQuote([data[0].quote, data[0].author]);
        setLoading(false);
      } catch (error) {
        setHasError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  if (isloading) return <div> Wait a moment....</div>;
  if (hasError) return <div>Oups something wrong!!</div>;

  return (
    <div>
      <div>Quote of the day</div>
      <p>{quote[0]}</p>
      <p>
        -
        {quote[1]}
      </p>
    </div>
  );
};

export default DisplayQuote;
