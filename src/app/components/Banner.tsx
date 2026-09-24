import Image from 'next/image';
import BannerImg from "@/assets/banner.png"
const Banner = () => {
    return (
        <section className="p-5 lg:p-0">
            <div className="bg-linear-to-r from-lime-200 via-lime-100 to-indigo-100  container mx-auto my-10 p-5 max-w-350 h-auto" >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 items-center justify-center gap-5">
                    <div className="flex flex-col pl-5 justify-center text-slate-500 lg:col-span-8 space-y-4">
                        <span className="text-sm self-start border-2 border-white bg-lime-300 text-slate-600 font-semibold px-2 py-1 rounded-full">WORKOUT LIBRARY</span>
                        <h2 className="text-4xl font-bold">TRAIN WITH INTENT. LOG <br />
                            EVERY SET.</h2>
                        <p className="text-slate-500">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />
                            into today&apos;s plan, and watch the week&apos;s work add up.</p>
                        <button className="self-start bg-lime-300 text-slate-900 font-semibold px-3 py-2 border border-white rounded-md cursor-pointer">BROWSE WORKOUTS</button>
                    </div>
                    <div className="lg:col-span-4 flex items-center justify-center">
                        <Image src={BannerImg} alt="Banner image"></Image>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;