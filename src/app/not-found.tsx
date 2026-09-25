import Link from "next/link";

import { MdFitnessCenter, MdHome } from "react-icons/md";
const NotFoundPage = () => {
    return (
        <main className="min-h-screen bg-base-200 flex items-center justify-center px-6">
            <div className="text-center ">

                <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-3xl bg-lime-300 text-slate-800 flex items-center justify-center shadow-lg">
                        <MdFitnessCenter className="text-4xl" />
                    </div>
                </div>

                <h1 className="text-8xl font-black text-lime-300 tracking-tight">
                    404
                </h1>

                <h2 className="text-2xl font-bold text-base-content mt-2">
                    Workout Not Found
                </h2>

                <p className="text-base-content/60 mt-3 leading-relaxed">
                    Looks like this page skipped leg day and disappeared.
                    The page you&apos;re looking for doesn&apos;t exist or may have been moved.
                </p>

                <Link
                    href="/"
                    className="mt-8 inline-flex items-center justify-center gap-2 bg-lime-300 text-slate-800 font-semibold px-5 py-3 rounded-2xl hover:bg-lime-400 transition-colors"
                >
                    <MdHome className="text-xl" />
                    Back to Home
                </Link>
            </div>
        </main>
    );
}

export default NotFoundPage;