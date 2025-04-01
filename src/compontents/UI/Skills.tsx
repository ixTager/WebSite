export default function Skills(){
    return(
        <div className="flex flex-col w-screen h-screen max-sm:h-auto px-40 pt-12 pb-24 items-center">
            <p className="font-[AxiformaMedium] text-4xl mb-20">Technical Skills</p>
            <div className="grid grid-cols-2 gap-x-14 gap-y-20 w-full h-full mb-28">
                <div className="flex bg-gray-500">
                    <p>Some content here</p>
                </div>

                <div className="flex bg-gray-500">
                    <p>Some content here</p>
                </div>

                <div className="flex bg-gray-500">
                    <p>Some content here</p>
                </div>

                <div className="flex bg-gray-500">
                    <p>Some content here</p>
                </div>

                <div className="flex bg-gray-500">
                    <p>Some content here</p>
                </div>

                <div className="flex bg-gray-500">
                    <p>Some content here</p>
                </div>
            </div>
            <button className="bg-gray-400 rounded-full px-14 leading-16 py-0.5 border-1">
                Show more
            </button>
        </div>
    );
}