"use client"

import { useContext } from "react";
import { GymContext } from "../GymContext/GymContext";

const PlanButton = () => {
    const contextValues = useContext(GymContext)
    if (!contextValues) {
        return null
    }
    const { plan } = contextValues
    return (
        <button>
            Plan
            <span className="ml-2">
                {plan.length}
            </span>
        </button>
    );
};

export default PlanButton;