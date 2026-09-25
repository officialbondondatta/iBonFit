import Link from "next/link";

const NoDataYet = () => {
    return (
        <div className="bg-slate-500 rounded-xl">
            <div className="flex text-center p-5 flex-col items-center justify-center gap-5">
                <h2 className="text-2xl font-bold">NOTHING HERE YET</h2>
                <p className="text-lg text-slate-300">Browse the library and add a lift to get today moving.</p>
                <Link href="" className=" bg-lime-300 text-slate-900 font-semibold px-3 py-2 border rounded-xl cursor-pointer">
                    Go to Workouts
                </Link>
            </div>
        </div>
    );
};

export default NoDataYet;