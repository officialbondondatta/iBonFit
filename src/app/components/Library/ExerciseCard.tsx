import { IExercise } from "@/app/types/types";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { LuClock4 } from "react-icons/lu";
import { VscFlame } from "react-icons/vsc";

interface IExerciseCardProps {
    exercise: IExercise
}

const ExerciseCard = ({ exercise }: IExerciseCardProps) => {
    return (
        <div className="card bg-slate-800 rounded-xl border-2 border-transparent hover:border-lime-400 hover:scale-105">
            <div className="rounded-xl">
                <Image className="w-full h-auto rounded-t-xl max-h-70" src={exercise.image} alt={`${exercise.name} image`} width={300} height={300} ></Image>
            </div>
            <div className="p-5 sapce-y-3">
                <div className="flex gap-4 ">
                    {
                        exercise.muscleGroups.map((group, index) => (
                            <span className="text-slate-800 font-bold rounded-full px-3 py-1 bg-lime-400" key={index}>{group}</span>
                        ))
                    }
                </div>
                <div className="mt-3 mb-2">
                    <h2 className="text-2xl font-bold">{exercise.name}</h2>
                    <p className="text-slate-400 font-semibold">{exercise.equipment}</p>
                </div>
                <hr className="text-slate-600" />
                <div>
                    <ul className="flex gap-5 items-center mt-2">
                        <li className="flex items-center gap-2 text-slate-300 font-semibold"><LuClock4 className="text-lime-400" />{exercise.duration} min</li>
                        <li className="flex items-center gap-2 text-slate-300 font-semibold"><VscFlame className="text-lime-400" />{exercise.caloriesBurned} kcal</li>
                        <li className="flex items-center gap-2 text-slate-300 font-semibold"><CiStar className="text-lime-400 text-lg" />{exercise.rating}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ExerciseCard;