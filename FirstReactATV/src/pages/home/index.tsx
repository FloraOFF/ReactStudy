import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface CardProps {
  description: string;
  rate: number
  title: string
}

const HomePage: React.FC<CardProps> = ({ description }) => {
  const [ rate, setRate ] = useState(0);
  const [ title, setTitle ] = useState("");

  useEffect(() => {
    usingTitle();
    console.log(rate);
  }, [rate]);

  const incrementRate = () => {
    setRate(prevRate => prevRate + 1);
  }

  const decrementRate = () => {
    setRate(prevRate => prevRate - 1);
  }

  const usingTitle = () => {
    if (rate < 2) {
      setTitle("Menos avaliado");
    } else {
      setTitle("Mais avaliado");
    }
  }
  
  return (
    <>
      <div id='buttonRate'>
        <button onClick={incrementRate}>Incrementar</button>
        <button onClick={decrementRate}>Decrementar</button>
      </div>
      <br />
      {rate < 2 && <p>{rate} - {description}<br />{title}</p>}
      {rate >= 2 && <p>{rate} - {description}<br />{title}</p>}
    </>
  );
}

export default HomePage;
