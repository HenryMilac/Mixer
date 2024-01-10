// CardProduct.tsx
import React from 'react';
import CardSale from './CardSale';

const CardProduct: React.FC<{ product: any }> = ({ product }) => {
  return (
    <div>
      <h2>{product.nameProduct}</h2>
      <p>{product.categoryProduct}</p>
      {product.sales.map((sale) => (
        <CardSale key={sale.id} sale={sale} />
      ))}
    </div>
  );
};

export default CardProduct;