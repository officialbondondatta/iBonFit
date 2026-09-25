import { useContext } from "react";
import { GymContext } from "../GymContext/GymContext";

interface IExerciseStatsProps {
    selectedTab: "plan" | "saved"
}

const ExerciseStats = ({ selectedTab }: IExerciseStatsProps) => {
    const { plan, saved } = useContext(GymContext)
    const totalPlanMinutes = plan.reduce((acc, plan) => acc + plan.duration, 0)
    const totalSavedMinutes = saved.reduce((acc, saved) => acc + saved.duration, 0)
    const totalPlanCalories = plan.reduce((acc, plan) => acc + plan.caloriesBurned, 0)
    const totalSavedCalories = saved.reduce((acc, saved) => acc + saved.caloriesBurned, 0)
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 bg-slate-800 rounded-xl border border-slate-500">
            <div className="lg:border-r lg:border-dashed lg:border-r-slate-500 p-2 lg:p-5 ml-2">
                <h2>Exercises</h2>
                <span className="text-2xl text-lime-400 font-bold">{selectedTab === "plan" ? plan.length : saved.length}</span>
            </div>
            <div className="lg:border-r lg:border-r-slate-500 lg:border-dashed p-2 lg:p-5  ml-2">
                <h2>Minutes</h2>
                <span className="text-2xl text-lime-400 font-bold">
                    {
                        selectedTab === "plan" ?
                            totalPlanMinutes
                            :
                            totalSavedMinutes
                    }
                </span>
            </div>
            <div className=" ml-2 p-2 lg:p-5 ">
                <h2>Calories</h2>
                <span className="text-2xl text-lime-400 font-bold">
                    {
                        selectedTab === "plan" ?
                            totalPlanCalories
                            :
                            totalSavedCalories
                    }
                </span>
            </div>
        </div>
    );
};

export default ExerciseStats;