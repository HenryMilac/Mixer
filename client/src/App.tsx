import React from 'react'

import Trial from './trial/Trial'
import ExlDragCardsColumnZustand from './components/ExldragCardsColumnZustand/ExldragCardColumnZustand'
import ExlFormReactHookForm from './components/ExlFormReactHookForm/ExlFormReactHookForm'





export default function App() {
    return (
        <div className="m-5">
            <div className='max-w-2xl p-5 border border-gray-500 rounded-xl mx-auto h-screen'>
                {/* <Trial/> */}

                {/* <ExlDragCardsColumnZustand/> */}
                <ExlFormReactHookForm/>
            </div>
        </div>
    )
}11