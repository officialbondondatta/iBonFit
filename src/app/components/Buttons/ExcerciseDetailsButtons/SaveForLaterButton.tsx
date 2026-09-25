"use client"
import { useContext } from "react";
import { RiBookmarkLine } from "react-icons/ri";
import { GymContext } from "../../GymContext/GymContext";
import { toast } from "react-toastify";
import { IExercise } from "@/app/types/types";

interface ISaveForLaterButtonProps {
    excercise: IExercise
}
const SaveForLaterButton = ({ excercise }: ISaveForLaterButtonProps) => {

    const { saved, setSaved } = useContext(GymContext)

    const handleAddToTodaysPlan = () => {
        const isExist = saved.some(ex => ex.id === excercise.id)
        if (!isExist) {
            setSaved([...saved, excercise])
            toast.success("Saved for later")
        }
        else {
            toast.error("Already in your saved list")
        }
    }
    return (
        <button onClick={handleAddToTodaysPlan} className="flex w-full lg:w-auto justify-center cursor-pointer  items-center gap-2 border border-white text-white font-semibold px-4 py-2 rounded-xl">
            <RiBookmarkLine className="text-xl" />
            <span>
                Save for later
            </span>
        </button>
    );
};

export default SaveForLaterButton;
