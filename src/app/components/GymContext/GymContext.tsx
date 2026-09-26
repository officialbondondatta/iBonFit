"use client"
import { IExercise } from "@/app/types/types";
import { createContext, Dispatch, ReactNode, SetStateAction } from "react";
import useLocalStorageState from "use-local-storage-state";

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
    const [plan, setPlan] = useLocalStorageState<IExercise[]>("gym-plan", {
        defaultValue: [],
    });

    const [saved, setSaved] = useLocalStorageState<IExercise[]>("gym-saved", {
        defaultValue: [],
    });

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