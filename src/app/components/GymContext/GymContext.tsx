"use client"
import { IExercise } from "@/app/types/types";
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";

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
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setPlan(JSON.parse(localStorage.getItem("gym-plan") || "[]"));
            setSaved(JSON.parse(localStorage.getItem("gym-saved") || "[]"));
            setLoaded(true);
        }, 0);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!loaded) return;

        localStorage.setItem("gym-plan", JSON.stringify(plan));
        localStorage.setItem("gym-saved", JSON.stringify(saved));
    }, [plan, saved, loaded]);
    const contextValues: IContextValues = {
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