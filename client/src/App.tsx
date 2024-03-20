import React from 'react'


import Trial from './trial/Trial.jsx'
import ExlDragCardsColumnZustand from './components/ExldragCardsColumnZustand/ExldragCardColumnZustand'
import ExlFormReactHookForm from './components/ExlFormReactHookForm/ExlFormReactHookForm.jsx'





export default function App() {
    return (
        <div className="m-5">
            <div className='max-w-2xl p-5 border border-gray-500 rounded-xl mx-auto'>
                <Trial/>

                {/* <ExlDragCardsColumnZustand/> */}
                {/* <ExlFormReactHookForm/> */}
            </div>
        </div>
    )
}11