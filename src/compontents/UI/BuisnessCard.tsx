import Noise from '../images/Noise.png';

export default function BusinessCard() {
    return (
        <div className="
        flex flex-col
        w-screen h-screen
        bg-gradient-to-r from-[#434345] to-[#3C3C3C]
        pb-[1.875rem] pr-7 max-sm:pr-0
        drop-shadow-[-6px_6px_4px_rgba(0,0,0,0.25)]
        inset-shadow-[-2px_2px_4px_rgba(255, 255, 255, 0.5)]
        ">
            <div className="flex justify-center items-end flex-col max-lg:items-center
            text-9xl leading-relaxed text-[#4F4F51] max-sm:text-7xl
            z-0 inset-shadow-[-2px_2px_4px_rgba(255, 255, 255, 0.5)] leading-[-5%]">
                <p className="
                drop-shadow-[-6px_6px_4px_rgba(0,0,0,0.25)]">Dmitriy</p>
                <p className="
                drop-shadow-[-6px_6px_4px_rgba(0,0,0,0.25)]
                ">Levitskiy</p>
            </div>

            <img
                src={Noise}
                alt="Noise"
                className="absolute w-screen h-screen object-cover z-10 opacity-50"
            />
            <div className='z-20 text-white flex w-screen justify-center h-full items-end font-[Playfair Display]'>
                <p>
                    FRONTEND-DEVELOPER
                </p>
            </div>
        </div>
    );
}