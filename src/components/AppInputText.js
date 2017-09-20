import React from 'react';
import '../styles/_appInputText.css'
import PropTypes from 'prop-types';

const AppInputText = ({inputText, onkeyUpEnter, style, onFocus, onBlur, onChange}) => (
      <input value={inputText} onChange={(event) => onChange(event.target.value)} onBlur={(event) => onBlur(event)} onFocus={(event) => onFocus(event)} onKeyUp={(event) => {event.keyCode ===13 && onkeyUpEnter(event)}} type="text" onKeyDown="" className={style}>      
      </input>
);

AppInputText.propTypes ={
     inputText:  PropTypes.string,
     onkeyUpEnter: PropTypes.func,
     onFocus: PropTypes.func,
     onBlur: PropTypes.func,
     onChange: PropTypes.func,
     style: PropTypes.string 
}
export default AppInputText;