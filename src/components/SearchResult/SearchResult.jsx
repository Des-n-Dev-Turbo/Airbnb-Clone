/* eslint-disable react/prop-types */
import { FavoriteBorderOutlined, Star } from '@mui/icons-material';

import './Searchresult.css';

const SearchResult = ({ img, location, title, description, star, price, total }) => {
  return (
    <div className="search-result">
      <img src={img} alt={title} />
      <FavoriteBorderOutlined className="search-result__heart" />
      <div className="search-result__info">
        <div className="search-result__info--top">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>___</p>
          <p>{description}</p>
        </div>
        <div className="search-result__info--bottom">
          <div className="search-result__stars">
            <Star className="search-result__star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="search-result__price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
