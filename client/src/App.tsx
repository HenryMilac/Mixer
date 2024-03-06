import React from 'react'

import DragCardsColumnZustand from './exercises/DragCardsColumnZustand/DragCardColumnZustand'
import FormNewEditDeleteZustand from './exercises/FormNewEditDeleteZustand/FormNewEditDeleteZustand'
import Trial from './exercises/.reminder/formZustand/Trial'



export default function App() {
    return (
        <div className="max-w-2xl mx-auto p-7 border h-screen my-10 rounded-2xl">
            {/* <Trial/> */}

            {/* <DragCardsColumnZustand/> */}
            <FormNewEditDeleteZustand/>
        </div>
    )
}