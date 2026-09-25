import { IExercise } from "../types/types";

interface ITableData {
    exercise: IExercise
}
const Table = ({ exercise }: ITableData) => {
    return (
        <div className="overflow-x-auto mt-5 rounded-2xl">
            <table className="table border border-slate-600 rounded-2xl">
                <tbody>
                    <tr>
                        <td className="font-bold">EQUIPMENT</td>
                        <td className="font-semibold text-slate-100">{exercise.equipment}</td>
                    </tr>
                    <tr>
                        <td className="font-bold">DIFFICULTY</td>
                        <td className="font-semibold text-slate-100">{exercise.difficulty}</td>
                    </tr>
                    <tr>
                        <td className="font-bold">SETS</td>
                        <td className="font-semibold text-slate-100">{exercise.sets}</td>
                    </tr>
                    <tr>
                        <td className="font-bold">REPS</td>
                        <td className="font-semibold text-slate-100">{exercise.reps}</td>
                    </tr>
                    <tr>
                        <td className="font-bold">DURATION</td>
                        <td className="font-semibold text-slate-100">{exercise.duration} min</td>
                    </tr>
                    <tr>
                        <td className="font-bold">CALORIES</td>
                        <td className="font-semibold text-slate-100">{exercise.caloriesBurned} kcal</td>
                    </tr>
                    <tr>
                        <td className="font-bold">CALORIES</td>
                        <td className="font-semibold text-slate-100">{exercise.rating}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;