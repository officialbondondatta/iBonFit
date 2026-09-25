"use client"

import { useContext } from "react";
import Link from "next/link";
import { GymContext } from "../../GymContext/GymContext";

const PlanButton = () => {
    const contextValues = useContext(GymContext)
    if (!contextValues) {
        return null
    }
    const { plan } = contextValues
    return (
        <Link href={"/my-plan"}>
            <button className="cursor-pointer">
                <span className="font-bold">
                    Plan
                </span>
                <span className="ml-2  bg-lime-300 px-2  py-1 text-slate-700 font-semibold rounded-full">
                    {plan.length}
                </span>
            </button>
        </Link>
    );
};

export default PlanButton;