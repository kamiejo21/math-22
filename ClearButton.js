import React from 'react';

function ClearButton(props) {
  return (
    <button className="btn btn-success"
      style={{width: "4.2em"}}
      onClick={() => {props.handleClick('');}}>Clear
      </button>
  );
}

export default ClearButton;
