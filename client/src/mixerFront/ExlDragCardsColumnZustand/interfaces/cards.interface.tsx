export interface Card {
    id: string;
    title: string;
    status: CardsStatus;
}

export type CardsStatus = "todo" | "inprogress" | "done";