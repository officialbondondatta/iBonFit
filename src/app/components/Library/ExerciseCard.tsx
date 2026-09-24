import { IExercise } from "@/app/types/types";
import Image from "next/image";

interface IExerciseCardProps {
    exercise: IExercise
}

const ExerciseCard = ({ exercise }: IExerciseCardProps) => {
    return (
        <div className="card bg-slate-700 rounded-xl">
            <div className="w-full rounded-xl">
                <Image className="w-full rounded-t-xl max-h-70" src={exercise.image} alt={`${exercise.name} image`} width={400} height={400} ></Image>
            </div>
            <div>
                <div>
                    {
                        exercise.muscleGroups.map((group, index) => (
                            <span key={index}>{group}</span>
                        ))
                    }
                </div>
                <div>
                    <h2>{exercise.name}</h2>
                    <p>{exercise.equipment}</p>
                </div>
                <hr />
                <div>
                    <ul>
                        <li>{exercise.duration}</li>
                        <li>{exercise.caloriesBurned}</li>
                        <li>{exercise.rating}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ExerciseCard;