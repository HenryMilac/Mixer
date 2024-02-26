import { useCardsStore } from "./stores"

export default function DragCardsColumnZustand() {

  const todoCards = useCardsStore(state => state.getCardsByStatus('todo'))
  const inProgressCards = useCardsStore(state => state.getCardsByStatus('in-progress'))
  const doneCards = useCardsStore(state => state.getCardsByStatus('done'))

  return (
    <div className="flex justify-between px-10">
      <div>
        <p>Todo:</p>
        {todoCards.map(card => 
          <p key={card.id} 
            draggable 
            onDragStart={() => console.log('dragging', card.id)} 
            className="border ">{card.title}
          </p>
        )}
      </div>
      <div>
        <p>In-Progress:</p>
        {inProgressCards.map(card => <p key={card.id} 
            draggable 
            onDragStart={() => console.log('')} 
            className="border ">{card.title}
          </p>
        )}
      </div>
      <div>
        <p>Done:</p>
        {doneCards.map(card => 
          <p key={card.id} 
            draggable 
            onDragStart={() => console.log('')} 
            className="border ">{card.title}
          </p>
        )}
      </div>
    </div>
  )
}