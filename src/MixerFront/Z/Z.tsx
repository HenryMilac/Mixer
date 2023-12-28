export default function Z() {
    return (
        <div className="p-5 flex flex-col gap-y-10">
            <div>
                <p className="text-red-500 text-xl">Parte Z:</p>
                <hr/>
            </div>
            

            <div>
                <p>Update state function</p>
                <hr />
                <div className="flex justify-between">
                    <p>Product 01: 0 units</p>
                    <div>
                        <button>Rest</button>
                        <button>Plus</button>
                    </div>
                </div>
            </div>
        </div>
    )
}