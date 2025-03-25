import CV from '../images/CVCreator.png';

export default function Portfolio(){
    return(
        <div className="
        w-screen h-screen
        flex items-center flex-col ">
            <p className='text-4xl font-bold'>My projects</p>

            <div className='
            grid grid-cols-3
            py-28 px-30 gap-x-14 
            max-lg:grid-cols-1 max-lg:gap-y-7 max-lg:gap-x-0
            max-sm:px-15'>
                <div className='flex flex-col'>
                    <img
                    src={CV}
                    alt="CVCretor"
                    className='border-2'/>
                </div>
                <div className='flex flex-col'>
                    <img
                    src={CV}
                    alt="CVCretor"
                    className='border-2'/>
                </div>
                <div className='flex flex-col'>
                    <img
                    src={CV}
                    alt="CVCretor"
                    className='border-2'/>
                </div>

            </div>
        </div>
    );
}