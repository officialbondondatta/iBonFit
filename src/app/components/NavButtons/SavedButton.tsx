"use client"

import { useContext } from "react";
import { GymContext } from "../GymContext/GymContext";
import Link from "next/link";

const SavedButton = () => {
    const contextValues = useContext(GymContext)
    if (!contextValues) {
        return null
    }
    const { saved } = contextValues
    return (
        <Link href={"/my-plan"}>
            <button className="cursor-pointer">
                <span className="font-semibold text-slate-300">
                    Saved
                </span>
                <span className="ml-2 bg-slate-600 outline-white outline rounded-full px-2 py-1 font-semibold">
                    {saved.length}
                </span>
            </button>
        </Link>
    );
};

export default SavedButton;