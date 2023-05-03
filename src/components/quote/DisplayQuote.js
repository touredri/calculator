import { useState, useEffect } from 'react';
import '../calculator.css';

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
  if (isloading) return <div className="wait"> Wait a moment....</div>;
  if (hasError) return <div>Oups something wrong!!</div>;

  return (
    <div
      className="quote"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <div style={{ textAlign: 'center', color: 'black' }}>Quote of the day</div>
      <p style={{ textAlign: 'center' }}>
        &quot;
        {quote[0]}
        &quot;
      </p>
      <p>
        -
        {quote[1]}
      </p>
    </div>
  );
};

export default DisplayQuote;
