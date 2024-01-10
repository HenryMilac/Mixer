import CardSale from "./CardSale";

interface CardProductProps {
  productData: ProductData;
}
interface ProductData {
  id: number;
  nameProduct: string;
  categoryProduct: string;
  salesTitle: string;
  sales: {
    id: number;
    dateTitle: string;
    date: string;
    total: string;
    "colors&units": { color: string; units: string; }[];
  }[];
}


export default function CardProduct({ productData }: CardProductProps) {
  const salesData = productData.sales;

  return (
    <div key={productData.id}>
      <p>{productData.nameProduct}</p>
      <p>{productData.categoryProduct}</p>
      <p>{productData.salesTitle}:</p>
      {salesData.map((saleData) => (
        <CardSale key={saleData.id} saleData={saleData} />
      ))}
    </div>
  );
}