interface IExerciseProps {
    params: Promise<{ exerciseid: string }>
}
const page = async ({ params }: IExerciseProps) => {
    const { exerciseid } = await params
    console.log(exerciseid)
    return (
        <div>
            <h2>helloo</h2>
        </div>
    );
};

export default page;