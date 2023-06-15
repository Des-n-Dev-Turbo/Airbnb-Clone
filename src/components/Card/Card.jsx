/* eslint-disable react/prop-types */
import './Card.css';

const Card = ({ src, title, description, price }) => {
  return (
    <div className="card">
      <img src={src} alt={title} />
      <div className="card__info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        {price && <h3>{price}</h3>}
      </div>
    </div>
  );
};

export default Card;
