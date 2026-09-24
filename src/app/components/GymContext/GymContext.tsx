"use client"
import { IExercise } from "@/app/types/types";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface IContextValues {
    plan: IExercise[],
    setPlan: Dispatch<SetStateAction<IExercise[]>>,
    saved: IExercise[],
    setSaved: Dispatch<SetStateAction<IExercise[]>>
}
export const GymContext = createContext({} as IContextValues)

interface IGymProviderProps {
    children: ReactNode
}
const GymProvider = ({ children }: IGymProviderProps) => {
    const [plan, setPlan] = useState<IExercise[]>([])
    const [saved, setSaved] = useState<IExercise[]>([])

    const contextValues = {
        plan,
        setPlan,
        saved,
        setSaved
    }
    return (
        <GymContext.Provider value={contextValues}>
            {children}
        </GymContext.Provider>
    );
};

export default GymProvider;