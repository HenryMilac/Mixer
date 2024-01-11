import dataBase from './src/data.json'

export default function FetchFromJSON() {
    const group1 = dataBase.group1
    return(
        <div>
            <p className='p-4'>{dataBase.title}</p>
            <hr />

            <div className='my-2 p-4'>
                <p>Stores:</p>
                {group1.map(card1 => {
                    const group2 = card1.group2
                    // console.log(group2)
                    return(
                        <div key={card1.id} className='border m-4 p-2'>
                            <p>{card1.name}</p>
                            <p>Vendedores:</p>
                            {group2.map(card2 => {
                                const group3 = card2.group3
                                return(
                                    <div key={card2.id} className='border m-4 p-2'>
                                        <p>{card2.name}</p>
                                        <p>Ventas:</p>
                                        {group3.map(card3 => {
                                            return(
                                                <div key={card3.id} className='border m-4 p-2'>
                                                    <p>{card3.name}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>

    )
}