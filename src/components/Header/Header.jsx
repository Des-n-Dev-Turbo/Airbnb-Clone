import { Avatar } from '@mui/material';
import { ExpandMore, LanguageOutlined, Search as SearchIcon } from '@mui/icons-material';

import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://1000logos.net/wp-content/uploads/2023/01/Airbnb-logo.png"
          alt="Airbnb Logo"
        />
      </Link>
      <div className="header__center">
        <input type="text" name="" id="" />
        <SearchIcon className="header__center--search-icon" />
      </div>
      <div className="header__right">
        <p>Become a host</p>
        <LanguageOutlined />
        <ExpandMore />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
