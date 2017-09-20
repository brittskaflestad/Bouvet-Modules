import React from 'react';
import '../styles/_appInputBtn.css';

const AppInputBtn = ({inputText, onClick}) => (
       
      <input onClick={(event) => onClick(event)} type="submit" value={inputText} className="App_inputBtn">      
      </input>
      
);

export default AppInputBtn;