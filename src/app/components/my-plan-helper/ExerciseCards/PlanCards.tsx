import { IExercise } from "@/app/types/types";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { CiStar } from "react-icons/ci";
import { LuClock4 } from "react-icons/lu";
import { MdOutlineDone } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { VscFlame } from "react-icons/vsc";
import { GymContext } from "../../GymContext/GymContext";
import { toast } from "react-toastify";

interface IPlanCardProps {
    currentPlan: IExercise
}

const PlanCards = ({ currentPlan }: IPlanCardProps) => {
    const { plan, setPlan } = useContext(GymContext)

    const handleMarkAsDone = () => {
        const newPlans = plan.filter((p) => p.id !== currentPlan.id)
        setPlan(newPlans)
        toast.success("Workout Logged - Nice Work")
    }
    const handleRemove = () => {
        const newPlans = plan.filter((p) => p.id !== currentPlan.id)
        setPlan(newPlans)
        toast.success("Removed from today's plan")
    }
    return (
        <div key={currentPlan.id} className=" bg-slate-600 rounded-xl grid lg:grid-cols-2 grid-cols-1 lg:items-center lg:justify-center lg:gap-5 gap-2">
            <div className="flex flex-col lg:flex-row lg:items-center">
                <div className="lg:p-5 py-2 place-self-center">
                    <Image src={currentPlan.image} alt={`${currentPlan?.name} image`} width={200} height={50} className="max-h-30 lg:p-0 p-2 lg:w-50 w-90 object-cover rounded-2xl"></Image>
                </div>
                <div className="px-5">
                    <h2 className="text-xl font-semibold">{currentPlan.name}</h2>
                    <span className="text-sm">{currentPlan.equipment}</span>
                    <ul className="flex lg:gap-5 gap-2 items-center mt-2 text-sm">
                        <li className="flex items-center gap-2 text-slate-200 font-semibold"><LuClock4 className="text-lime-400" />{currentPlan.duration} min</li>
                        <li className="flex items-center gap-2 text-slate-200 font-semibold"><VscFlame className="text-lime-400" />{currentPlan.caloriesBurned} kcal</li>
                        <li className="flex items-center gap-2 text-slate-200 font-semibold"><CiStar className="text-lime-400 font-bold text-lg" />{currentPlan.rating}</li>
                    </ul>
                </div>
            </div>
            <div className="flex gap-5  justify-self-start lg:justify-self-end lg:pr-5 p-5">
                <div>
                    <Link href={`/exercise/${currentPlan.id}`} className="flex  justify-center cursor-pointer  items-center gap-2 border border-white text-white font-semibold lg:px-4 px-2 py-2 rounded-2xl">
                        <span className="text-xs">
                            View Details
                        </span>
                    </Link>
                </div>
                <div>
                    <button onClick={handleMarkAsDone} className="flex  justify-center cursor-pointer  items-center gap-2 bg-lime-300 text-slate-800 font-semibold lg:px-4 px-2 py-2 rounded-2xl">
                        <MdOutlineDone className="text-xl" />
                        <span className="text-xs">
                            Mark as Done
                        </span>
                    </button>
                </div>
                <div className="flex items-center justify-center font-bold text-lg">
                    <button onClick={handleRemove}><RxCross1 className="cursor-pointer" /></button>
                </div>
            </div>
        </div>
    );
};

export default PlanCards;