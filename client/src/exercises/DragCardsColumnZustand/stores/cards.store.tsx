import { StateCreator, create } from "zustand";
import { Card } from "../interfaces";
import { devtools } from "zustand/middleware";

interface CardsState {
    cards: Record<string, Card>;
    // cards: {[key: string]: Card};   // También puede ser de esa forma
    getCardsByStatus: (status: string) => Card[];
}

const storeApi: StateCreator<CardsState> = (set, get) => ({
    cards: {
        'ABC-1': {id: 'ABC-1', title: 'Card 1', status: 'todo'},
        'ABC-2': {id: 'ABC-2', title: 'Card 2', status: 'todo'},
        'ABC-3': {id: 'ABC-3', title: 'Card 3', status: 'done'},
        'ABC-4': {id: 'ABC-4', title: 'Card 4', status: 'in-progress'},
    },
    getCardsByStatus: (status: string) => {
        return Object.values(get().cards).filter(card => card.status === status)
    },
})

export const useCardsStore = create<CardsState>()(devtools(storeApi))