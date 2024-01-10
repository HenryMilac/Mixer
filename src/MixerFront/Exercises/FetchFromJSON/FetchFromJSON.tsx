// App.tsx
import CardProduct from './src/components/CardProduct';
import data from './src/data.json';

export default function FetchFromJSON() {
    const productsData = data.productsData;

    return (
        <div>
            <p>{data.titleApp}</p>
            <p>Data information:</p>
            <div className='ml-10'>
                {productsData.map(productData => {
                    return(
                        <CardProduct 
                            key={productData.id}
                            productData={productData}
                        />
                    )
                })}
            </div>
            <p>{data.buttonTranslate}</p>
        </div>
    )
}