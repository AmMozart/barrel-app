import React from 'react';
import style from './Price.module.css';
import TablePrice from './TablePrice';

const Price = ((props) => {
  return (
    <div className = {style.general}>
      <h2> Тариф </h2>
      <TablePrice />
    </div>
  );
}
);

export default Price;
