import { picture } from "../../helper/picture";
import Item from "../item/Item";
import './Card.css';

const Card = () => {

  return (
  <div className='pic-area-container'>
    <div className="picture-container">
      {picture.map((item) => {
         return <Item card={item} />
         })}
    </div>  
  </div>
  );
};

export default Card;
