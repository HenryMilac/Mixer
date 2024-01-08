export default function ClientCard() {
    return (
        <div className="border border-gray-300 p-2 shadow-xl rounded-md">
            <div className="flex justify-between border-b border-gray-400 font-bold items-center">
                <p className="text-xl">Henry Ramirez</p>
                <p className="text-sm">Dorado</p>
            </div>
            <div>
                <p className="font-bold"> Compras: </p>
                <div className="mx-3">
                    <div className=" border-b border-gray-300">
                        <div className="flex justify-between py-2 font-bold">
                            <p>Fecha: <span className="font-normal">2024</span></p>
                            <p>Total: S/.<span className="font-normal">1</span></p>
                        </div>
                        <div className="flex justify-between">
                            <p>Producto</p>
                            <p>Precio: S/.</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Producto</p>
                            <p>Precio: S/.</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between py-2 font-bold">
                            <p>Fecha: <span className="font-normal">2023    </span></p>
                            <p>Total: S/.<span className="font-normal">1</span></p>
                        </div>
                        <div className="flex justify-between">
                            <p>Producto</p>
                            <p>Precio: S/.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}