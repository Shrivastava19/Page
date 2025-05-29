import React, { useState, useEffect } from 'react';

const Captcha = ({ onVerify }) => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    const randA = Math.floor(Math.random() * 10);
    const randB = Math.floor(Math.random() * 10);
    setA(randA);
    setB(randB);
  }, []);

  const handleChange = (e) => {
    setAnswer(e.target.value);
    if (parseInt(e.target.value) === a + b) onVerify(true);
    else onVerify(false);
  };

  return (
    <div>
      <label>What is {a} + {b}? </label>
      <input type="number" value={answer} onChange={handleChange} required />
    </div>
  );
};

export default Captcha;
