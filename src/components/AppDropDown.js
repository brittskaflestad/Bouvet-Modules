import React from 'react';
import '../styles/_appDropDown.css';
import PropTypes from 'prop-types';


const AppDropDown = ({options, disabledOption, onValueChanged, visibility, key})=> {
  var optionNodes = options.map(function(opt){
        return(          
        <option key={`${opt}key`} value={opt}>{opt}</option>
        );
        });      
      return(
      <div className="divBlock"> 
      <select id={key} defaultValue={disabledOption} onChange={(event) => onValueChanged(event.target.value)} className="App-dropdown">
        <option disabled value={disabledOption}>{disabledOption}</option>
        {optionNodes}
       </select>
       </div>
      );
};

AppDropDown.propTypes = {
  options: PropTypes.array,
  disabledOption: PropTypes.string,
  onValueChanged: PropTypes.func,
  visible: PropTypes.bool
}

export default AppDropDown;