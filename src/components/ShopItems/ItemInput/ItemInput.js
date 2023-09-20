import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './ItemInput.css';

const ItemInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const itemInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    props.onAddItem(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Shopping Item</label>
        <input type="text" onChange={itemInputChangeHandler} />
      </div>
      <Button type="submit">Add Item</Button>
    </form>
  );
};

export default ItemInput;
