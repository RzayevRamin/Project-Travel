import React from 'react'
import Input from '@mui/joy/Input';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ClearIcon from '@mui/icons-material/Clear';
import { Button, IconButton } from '@mui/material';
import { useState } from 'react';
import './SearchDestination.css';


function SearchDestination() {
  const [value, setValue] = useState("");

  const handleClear = () => setValue("");

  return (
    <div className="searchDestinationBox">
      <h1>Discover new adventure by choosing your next destination</h1>
      <Input
        className="searchDestinationInput"
        placeholder="Search Destination..."
        value={value}
        onChange={e => setValue(e.target.value)}
        startDecorator={<svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
<path d="M2.20837 2.17919C2.98479 1.4183 4.03012 0.994562 5.1172 1.00005C6.20429 1.00554 7.24528 1.43982 8.01398 2.20852C8.78267 2.97721 9.21695 4.01821 9.22244 5.10529C9.22793 6.19238 8.80419 7.2377 8.0433 8.01412L5.86249 10.1949C5.6671 10.3903 5.40212 10.5 5.12583 10.5C4.84954 10.5 4.58457 10.3903 4.38917 10.1949L2.20837 8.01412C1.43466 7.24034 1 6.1909 1 5.09666C1 4.00241 1.43466 2.95298 2.20837 2.17919Z" stroke="black" strokeLinejoin="round"/>
<path d="M5.12579 6.65958C5.98898 6.65958 6.68872 5.95983 6.68872 5.09665C6.68872 4.23347 5.98898 3.53372 5.12579 3.53372C4.26261 3.53372 3.56287 4.23347 3.56287 5.09665C3.56287 5.95983 4.26261 6.65958 5.12579 6.65958Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
</svg>}
        endDecorator={
          <>
            {value && (
              <IconButton onClick={handleClear} size="small">
                <ClearIcon />
              </IconButton>
            )}
            <Button><ArrowForwardRoundedIcon /></Button>
          </>
        }
      />
    </div>
  )
}

export default SearchDestination