import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DateRangePicker } from 'react-date-range';
import { Button } from '@mui/material';
import { People } from '@mui/icons-material';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './Search.css';

const Search = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const navigate = useNavigate();

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        Number of Guests <People />
      </h2>
      <input type="number" min={0} defaultValue={2} />
      <Button onClick={() => navigate('/search')}>Search Airbnb</Button>
    </div>
  );
};

export default Search;
