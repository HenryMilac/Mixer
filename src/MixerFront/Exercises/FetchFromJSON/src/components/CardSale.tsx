

// CardSale.tsx
import React from 'react';

const CardSale: React.FC<{ sale: any }> = ({ sale }) => {
  return (
    <div>
      <h3>{sale.dateTitle}: {sale.date}</h3>
      <p>Total: {sale.total}</p>
      {sale['colors&units'].map((item, index) => (
        <p key={index}>{item.color}: {item.units}</p>
      ))}
    </div>
  );
};

export default CardSale;