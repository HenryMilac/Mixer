// App.tsx
import data from './src/data.json';

export default function FetchFromJSON() {
    const productsData = data.productsData;

    return (
        <div>
            <p>{data.titleApp}</p>
            <p>Data information:</p>
            <div className='ml-10'>
                {productsData.map(productData => {
                    const salesData: { id: string; dateTitle: string; date: string; total: string; "colors&units": { color: string; units: string; }[]; }[] = productData.sales;
                    return (
                        <div key={productData.id}>
                            <p>{productData.nameProduct}</p>
                            <p>{productData.categoryProduct}</p>
                            <p>{productData.salesTitle}:</p>
                            {salesData.map(saleData => (
                                <div key={saleData.id} className='ml-10'>
                                    <p>{saleData.dateTitle}</p>
                                    <p>{saleData.date}</p>
                                    <p>S/. {saleData.total}</p>
                                    {saleData["colors&units"].map(colorUnit => (
                                        <div className='ml-10'>
                                            <p>{colorUnit.color}</p>
                                            <p>{colorUnit.units}</p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )
                })}
            </div>
            <p>{data.buttonTranslate}</p>
        </div>
    )
}