export default function Reacti18next() {
    return (
        <div className="p-5 relative pb-36 max-w-2xl mx-auto">
            <div className="mb-7 border-b border-gray-300">
                <p className="text-2xl font-bold">Products:</p>
            </div>
            
            <div className="flex flex-col gap-y-5">
                <div className="border border-gray-300 p-3 rounded-lg">
                    <div className="flex justify-between items-center border-b border-gray-300">
                        <p className="text-xl font-bold">Ball</p>
                        <p>Toys</p>
                    </div>
                    <p className="text-base font-bold mb-2">Sales:</p>

                    <div className="flex flex-col gap-y-2"> 
                        <div className="border-b border-gray-300 px-3">
                            <div className="flex justify-between">
                                <p className="font-bold">Date:</p>
                                <p className="font-bold">Total: <span>S/. </span></p>
                            </div>
                            <div className="flex justify-between">
                                <p>Blue</p>
                                <p>18 units.</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Blue</p>
                                <p>18 units.</p>
                            </div>
                        </div>
                        <div className="border-b border-gray-300 px-3">
                            <div className="flex justify-between">
                                <p className="font-bold">Date:</p>
                                <p className="font-bold">Total: <span>S/. </span></p>
                            </div>
                            <div className="flex justify-between">
                                <p>Blue</p>
                                <p>18 units.</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Blue</p>
                                <p>18 units.</p>
                            </div>
                        </div>
                        <div className="border-b border-gray-300 px-3">
                            <div className="flex justify-between">
                                <p className="font-bold">Date:</p>
                                <p className="font-bold">Total: <span>S/. </span></p>
                            </div>
                            <div className="flex justify-between">
                                <p>Blue</p>
                                <p>18 units.</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Blue</p>
                                <p>18 units.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button className="border border-gray-300 px-5 py-1 absolute bottom-5 right-5">Translate</button>
        </div>
    )
}