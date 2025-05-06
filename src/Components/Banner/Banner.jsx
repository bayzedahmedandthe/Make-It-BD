import { GoCheckCircleFill } from "react-icons/go";
import { GoBook } from "react-icons/go";
import BannerSlider from "./BannerSlider";

const Banner = () => {
    return (
        <div className="bg-gradient-to-r   from-[#ede7f7] to bg-[#fae8e8]">
            <div className="grid md:grid-cols-2 grid-cols-1 items-center justify-center gap-4 md:pt-8 pt-6 md:pb-40 pb-16 md:w-11/12 mx-auto w-full  ">
                {/* Text Container */}
                <div className="md:text-start text-center">
                    <div className="flex items-center md:justify-start justify-center pb-2 gap-2 md:text-start text-center">
                        <span><GoCheckCircleFill /></span>
                        <h3 className="font-semibold">Unleash Your Potential</h3>
                    </div>
                    <h1 className="md:text-3xl lg:text-5xl text-2xl font-semibold md:leading-16">Become an IT Pro & <br /> Rule the <br /> <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[#4410a3] to bg-[#d3390a] ">Digital World</span></h1>
                    <p className="py-4">With a vision to turn manpower into assets, Mak It BD Institute is ready to enhance your learning experience with skilled mentors and an updated curriculum. Pick your desired course from more than 45 trendy options.
                    </p>
                    <div className="grid md:grid-cols-2 grid-cols-1   gap-4 md:w-4/6 w-1/2 md:mx-0 mx-auto">
                        <button className="flex items-center gap-2 hover:bg-[#360f7e] btn bg-gradient-to-r py-2 px-3 text-white from-[#360f7e] to bg-[#d3390a]"><span><GoBook></GoBook></span>Browse Course</button>
                        <button className="flex items-center gap-2 btn hover:bg-[#360f7e] bg-gradient-to-l py-2 px-3 text-white from-[#360f7e] to bg-[#d3390a]"><span><GoBook></GoBook></span>Join free seminar</button>
                    </div>
                </div>
                {/* Video Container */}
                <div className="md:m-0 m- rounded-sm" style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
                    <iframe
                        src="https://www.youtube.com/embed/eO04plTmgcM?si=I0n5g7Z7Jy3ifToi"
                        title="YouTube video player"
                        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            {/* Slaider container */}
            <div className="md:w-11/12 left-0 right-0 mx-auto w-full absolute -bottom-20">
               <BannerSlider></BannerSlider> 
            </div>
        </div>
    );
};

export default Banner;