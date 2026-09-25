import Image from 'next/image';
import BannerImg from "@/assets/banner.png"
const Banner = () => {
    return (
        <section className="py-5 lg:py-0">
            <div className="bg-linear-to-r grid grid-cols-1 lg:grid-cols-2 items-center justify-center lg:gap-2 gap-10 from-lime-200 via-lime-100 to-indigo-100 my-5 p-10 rounded-2xl" >
                <div className="flex flex-col lg:text-left text-center pl-5 justify-center text-slate-500  space-y-4">
                    <span className="text-sm self-center lg:self-start border-2 border-white bg-lime-300 text-slate-600 font-semibold px-2 py-1 rounded-full">WORKOUT LIBRARY</span>
                    <h2 className="lg:text-4xl text-2xl font-bold text-slate-700">TRAIN WITH INTENT. LOG <br />
                        EVERY SET.</h2>
                    <p className="text-slate-700">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />
                        into today&apos;s plan, and watch the week&apos;s work add up.</p>
                    <a href="#library" className="lg:self-start self-center  bg-lime-300 text-slate-900 font-semibold px-3 py-2 border border-white rounded-md cursor-pointer">
                        BROWSE WORKOUTS
                    </a>
                </div>
                <div className="flex items-center justify-end">
                    <Image src={BannerImg} alt="Banner image" className=" max-w-full" width={400} height={600}></Image>
                </div>

            </div>
        </section>
    );
};
export default Banner;
