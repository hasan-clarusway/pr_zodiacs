import { useState } from 'react';
import './Item.css';
import Time from '../time/Time';

const Item = ({card}) => {

   const [showLogo, setShowLogo] = useState(true);
   const [showPicture, setShowPicture] = useState(true);
   const { img } = card;

   return (
      <div onClick={() => setShowPicture(!showPicture)}>
      {showPicture ?
      (<div className="card" onClick={() => setShowLogo(!showLogo)}>
         {showLogo ? ( 
            <img src={img} alt="" className="card-logo" />
            ) : (               
               <h3> <Time /> </h3> 
            )}
      </div>) : (
         <h4 className='info'>Welcome Dear Visitor <p className='hi'><br />
         Our Astrologer forecasts  <br />what today has in store for you <br /> Just click the Zodiac Names!<br /><br />
         Please click here for time and date</p></h4>
      )
      }
      </div>
    )

};
export default Item;
