export default function CardSale({ saleData }) {
  return (
    <div key={saleData.id} className='ml-10'>
    <p>{saleData.dateTitle}</p>
    <p>{saleData.date}</p>
    <p>S/. {saleData.total}</p>
    {saleData["colors&units"].map(colorUnit => (
        <div key={colorUnit.color} className='ml-10'>
            <p>{colorUnit.color}</p>
            <p>{colorUnit.units} units</p>
        </div>
    ))}
</div>
  )
}