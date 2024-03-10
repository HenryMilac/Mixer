import React from "react"
import ColumnStatus from "./components/ColumnStatus"
import { useCardsStore } from "./stores/cards.store"

export default function DragCardsColumnZustand() {


  const todoCards = useCardsStore(state => state.getCardsByStatus('todo'))
  const inProgressCards = useCardsStore(state => state.getCardsByStatus('inprogress'))
  const doneCards = useCardsStore(state => state.getCardsByStatus('done'))

  return (
    <div className="flex justify-between gap-x-5 px-10">
      <ColumnStatus statusTitle='To Do' status='todo' cards={todoCards} />
      <ColumnStatus statusTitle='In-Progress' status='inprogress' cards={inProgressCards} />
      <ColumnStatus statusTitle='Done' status='done' cards={doneCards} />
    </div>
  )
}