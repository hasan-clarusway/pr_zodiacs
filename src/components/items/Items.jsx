import { useState } from 'react';
import './Items.css';

const Items = ({ card }) => {
  const [showLogo, setShowLogo] = useState(true);
  const { name, imgs, options } = card;

  const handleClick = () => {
    setShowLogo(!showLogo);
  };

  return (
    <div className="cards" onClick={handleClick}>
      {showLogo ? (
        <div>
          <img className="card-logos" src={imgs} alt="" />
          <h3 className="card-title">{name}</h3>
        </div>
      ) : (
        <div className="lists">
          {options.map((index) => {
            return <p>{index}</p>;
          })}
        </div>
      )}
    </div>
  );
};

export default Items;