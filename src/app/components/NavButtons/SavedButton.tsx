"use client"

import { useContext } from "react";
import { GymContext } from "../GymContext/GymContext";

const SavedButton = () => {
    const contextValues = useContext(GymContext)
    if (!contextValues) {
        return null
    }
    const { saved } = contextValues
    return (
        <button>
            Saved
            <span className="ml-2">
                {saved.length}
            </span>
        </button>
    );
};

export default SavedButton;