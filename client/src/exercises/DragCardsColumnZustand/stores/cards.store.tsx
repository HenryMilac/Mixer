import { StateCreator, create } from "zustand";
import { Card, CardsStatus } from "../interfaces";
import { devtools } from "zustand/middleware";

interface CardsState {
    draggingCardId?: string
    cards: Record<string, Card>;
    // cards: {[key: string]: Card};   // También puede ser de esa forma
    getCardsByStatus: (status: CardsStatus) => Card[];
    setDraggingCardId: (cardId: string) => void;
    removeDraggingCardId: () => void;
    changeStatus: (cardId: string, status: CardsStatus) => void;
    draggingTaskId: () => void;
}

const storeApi: StateCreator<CardsState> = (set, get) => ({
    draggingCardId: undefined,
    cards: {
        'ABC-1': {id: 'ABC-1', title: 'Card 1', status: 'todo'},
        'ABC-2': {id: 'ABC-2', title: 'Card 2', status: 'todo'},
        'ABC-3': {id: 'ABC-3', title: 'Card 3', status: 'done'},
        'ABC-4': {id: 'ABC-4', title: 'Card 4', status: 'inprogress'},
    },
    getCardsByStatus: (status: CardsStatus) => {
        return Object.values(get().cards).filter(card => card.status === status)
    },
    setDraggingCardId: (cardId: string) => {
        set({draggingCardId: cardId})
    },
    removeDraggingCardId: () => {
        set({draggingCardId: undefined})
    },
    changeStatus: (cardId: string, status: CardsStatus) => {
        const card = get().cards[cardId];
        card.status = status;
        set((state) => ({ 
            cards: { 
                ...state.cards, 
                [cardId]: card 
            } 
        }));
    },
    // changeStatus: (cardId: string, status: CardsStatus) => {
    //     const cards = get().cards;
    //     if (cards.hasOwnProperty(cardId)) {
    //         const card = cards[cardId];
    //         card.status = status;
    //         set((state) => ({ cards: { ...state.cards, [cardId]: card } }));
    //     }
    // },
    draggingTaskId: () => {
    }
})

export const useCardsStore = create<CardsState>()(devtools(storeApi))


