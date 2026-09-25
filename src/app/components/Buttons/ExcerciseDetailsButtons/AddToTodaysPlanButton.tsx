"use client"
import { useContext } from 'react';
import { MdOutlineAddCard } from 'react-icons/md';
import { GymContext } from '../../GymContext/GymContext';
import { IExercise } from '@/app/types/types';
import { toast } from 'react-toastify';

interface IAddToTodaysPlanButtonProps {
    excercise: IExercise
}
const AddToTodaysPlanButton = ({ excercise }: IAddToTodaysPlanButtonProps) => {
    const { plan, setPlan } = useContext(GymContext)
    const handleAddToTodaysPlan = () => {
        const isExist = plan.some(ex => ex.id === excercise.id)
        if (!isExist) {
            setPlan([...plan, excercise])
            toast.success("Added to today's plan ")
        }
        else {
            toast.error("Already in your plan")
        }
    }
    return (
        <button onClick={handleAddToTodaysPlan} className="flex justify-center w-full lg:w-auto cursor-pointer  items-center gap-2 bg-lime-300 text-slate-800 font-semibold px-4 py-2 rounded-xl">
            <MdOutlineAddCard className="text-xl" />
            <span>
                Add to today&apos;s plan
            </span>
        </button>
    );
};

export default AddToTodaysPlanButton;
