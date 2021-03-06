import React from 'react';

function Input(props) {
  function onFilter (e) {
    props.onFilter(e.target.value);
  }

  return (
    <div className="panel-block">
      <p className="control">
        <input className="input" type="text" onChange={onFilter} value={props.filterName} />
      </p>
    </div>
  )
}

export default Input;