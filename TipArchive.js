import React, { useEffect, useState } from 'react';
import { fetchTips } from '../utils/githubAPI';
import TipCard from '../components/TipCard';

const TipArchive = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    const getTips = async () => {
      const data = await fetchTips();
      setTips(data);
    };
    getTips();
  }, []);

  return (
    <div>
      <h2>Tip Archive</h2>
      {tips.map((tip, idx) => <TipCard key={idx} tip={tip} />)}
    </div>
  );
};

export default TipArchive;
