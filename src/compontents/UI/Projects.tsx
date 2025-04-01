export default function Projects(){
    return(
        <div className="flex w-screen h-screen max-sm:h-auto flex-col px-40 pt-20">
            <p className="font-[AxiformaMedium] text-5xl mb-5">Projects</p>
            <div className="grid grid-cols-2 gap-x-5 w-full h-full pb-28">
                <div className="flex w-full h-full bg-gray-500">
                    <p>Main project</p>
                </div>
                <div className="grid grid-cols-1 w-full h-full gap-y-5">
                    <div className="flex w-full h-full bg-gray-500">
                        <p>Second proj</p>
                    </div>
                    <div className="flex w-full h-full bg-gray-500">
                        <p>Third proj</p>
                    </div>
                </div>
            </div>
        </div>
    );
}