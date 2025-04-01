export default function WhatIDo(){
    return(
        <div className="
        w-screen h-[50vh]
        flex flex-col items-center
        bg-[#F1F1F1]
        px-40 py-11">
            <p className="font-[AxiformaMedium] text-4xl max-sm:text-3xl mb-10">What I Do</p>
            <div className="flex gap-x-20 justify-center items-center h-full">
                <div className="flex flex-col bg-gray-400 min-w-full h-full rounded-2xl border-3">
                    {/* Some content here */}
                </div>

                <div className="flex flex-col bg-gray-400 min-w-full h-full rounded-2xl border-3">
                    {/* Some content here */}
                </div>

                <div className="flex flex-col bg-gray-400 min-w-full h-full rounded-2xl border-3">
                    {/* Some content here */}
                </div>

            </div>
        </div>
    );
}