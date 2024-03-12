import React, { useState } from 'react'
import { useCardsStore } from "../stores/cards.store"
import classNames from 'classnames'
import { Card, CardsStatus } from '../interfaces'

interface Props {
    statusTitle: string;
    status: CardsStatus;
    cards: Card[];
}

export default function ColumnStatus({statusTitle, status, cards}: Props) {

    const isDragging = useCardsStore(state => !!state.draggingCardId)
    const changeStatus = useCardsStore(state => state.changeStatus)
    const draggingTaskId = useCardsStore(state => state.draggingTaskId)
    const [onDragOver, setOnDragOver] = useState(false)
    const setDraggingCardId = useCardsStore(state => state.setDraggingCardId)
    const removeDraggingCardId = useCardsStore(state => state.removeDraggingCardId)

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setOnDragOver(true)
    }
    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setOnDragOver(false)
    }
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setOnDragOver(false)
        changeStatus('ds', status)
    }



    return (
        <div 
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={classNames("border-4 p-2 w-full", {
                'border-dotted border-blue-400': isDragging,
                'border-dotted border-green-400': isDragging && onDragOver,
            })}
        >
            <h2 className="mb-4 text-xl">{statusTitle}: <hr /></h2>
            {cards.map(card => 
                <p key={card.id} 
                    draggable 
                    onDragStart={() => setDraggingCardId(card.id)} 
                    onDragEnd={() => removeDraggingCardId()}
                    className="border mb-4 p-2">{card.title}
                </p>
            )}        
        </div>
    )
}