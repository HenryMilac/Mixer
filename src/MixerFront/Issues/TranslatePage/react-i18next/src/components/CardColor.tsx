export default function CardColor({colors}:any) {
    // console.log(colors)
    return (
        <>
            {colors.map((color:any) => (
                <div key={color.color} className="flex justify-between border p-1">
                    <p>{color.color}</p>
                    <p>{color.units} {color.unitTitle}</p>
                </div>
            ))}
        </>
    )
}