import React from 'react'

import Trial from './trial/Trial'
import ExlDragCardsColumnZustand from './components/ExldragCardsColumnZustand/ExldragCardColumnZustand'
import ExlFormReactHookForm from './components/ExlFormReactHookForm/ExlFormReactHookForm'





export default function App() {
    return (
        <div className="max-w-2xl mx-auto p-7 border h-screen my-10 rounded-2xl">
            {/* <Trial/> */}

            {/* <ExlDragCardsColumnZustand/> */}
            <ExlFormReactHookForm/>
        </div>
    )
}