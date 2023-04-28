import { zodiacs } from '../helpers/zodiacs';
import Items from '../items/Items';
import './Cards.css';

const Cards = () => {
  return (
    <div className="cards-area-container">
      <div className="cards-container">
        {zodiacs.map((items) => {
          return <Items card={items} />;
        })}
      </div>
    </div>
  );
};

export default Cards;