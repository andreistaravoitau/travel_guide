import Image from "next/image";
import Button from "./Button";
import { fetchGooglePlaceData } from "@/api/fetchGooglePlaceData";
import GoogleRating from "./GoogleRating";
import { PKIN_ID } from "@/constants";

const Hero = () => {
    return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row border-2 border-red-500"> 
        <div className="hero-map">
        </div>
        
        {/* LEFT */}

        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
            <Image
                src="/globe.svg"
                alt="globe"
                width={50}
                height={50}
                className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
            >
            </Image>
            <h1 className="text-[52px] font-[700] leading-[120%] lg:text-[88px] lg:font-[700] lg:leading-[120%]">
                Lorem ipsum dolor sit.
            </h1>
            <p className="text-[16px] font-[400] text-gray-400 xl:max-w-[520px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque excepturi est dignissimos suscipit ipsum ut dolores eligendi. Recusandae, optio officia.
            </p>

            <GoogleRating/>

            <div className="flex w-full gap-3 sm:flex-row">
                <Button
                    type="button"
                    title="Download App"
                    variant="btn_green"
                />
            </div>
        </div>
    </section>
  )
}

export default Hero;