import React, {Fragment} from 'react';

function Equation(props) {
  return (
    <Fragment>
      <div>{props.question}</div>
      <div class="form-group">
        <select class="form-control" id="exampleFormControlSelect1">
        <option>{props.answer}</option>
        </select>
      </div>
    </Fragment>
  )
}

export default Equation;