import { useState } from "react";
import { create } from "zustand";
import Modal from 'react-modal'
Modal.setAppElement('#root');

export const notes = create(() => {
    return {
        note: 'primera nota',
        categorie: 'Ingenieria',
        addNote: () => {
            const data = [
                {
                    name: 'Henry'
                },
                {
                    name: 'Jesus'
                }
            ]
            return(
                <>
                    {data.map(user => {
                        return(
                            <p>ss{user.name}</p>
                        )
                    })}
                </>
            )
        }
    }
})