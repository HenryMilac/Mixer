export default function TranslatePage() {
    return (
        <div className="flex flex-col gap-y-10 p-10 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
                <p className="text-4xl font-bold">Hola Henry!</p>            
                <p className="text-center">Esta página está siendo probada para traducir una página a otro idioma usando npm next-i18next, y está en el idioma: <span className="text-red-500 font-bold">Espanol</span></p>
            </div>

            <div>
                <button className="mx-auto w-full border border-gray-400">Traducir</button>
            </div>
        </div>
)
}