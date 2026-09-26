import Image from 'next/image';
import BannerImg from "@/assets/banner.png"
const Banner = () => {
    return (
        <section className="py-5 lg:py-0 ">
            <div className="bg-linear-to-r w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center md:justify-self-start justify-center lg:gap-2 gap-10 bg-slate-800 my-5 p-10 rounded-2xl" >
                <div className="flex flex-col lg:text-left md:text-left text-center pl-5 justify-center text-slate-500  space-y-4">
                    <span className="text-sm self-center md:self-start lg:self-start  text-lime-300 font-semibold">WORKOUT LIBRARY</span>
                    <h2 className="lg:text-4xl text-2xl font-bold text-white max-w-90">TRAIN WITH INTENT. LOG
                        EVERY SET.</h2>
                    <p className="text-white">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />
                        into today&apos;s plan, and watch the week&apos;s work add up.</p>
                    <a href="#library" className="lg:self-start md:self-start self-center  bg-lime-300 text-slate-900 font-semibold px-3 py-2 border border-white rounded-md cursor-pointer">
                        BROWSE WORKOUTS
                    </a>
                </div>
                <div className="flex items-center lg:justify-end justify-center">
                    <Image src={BannerImg} alt="Banner image" className=" max-w-full" width={400} height={600}></Image>
                </div>

            </div>
        </section >
    );
};
export default Banner;
