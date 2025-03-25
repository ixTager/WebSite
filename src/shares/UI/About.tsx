import Me from '../images/Me.png';
export default function About(){
    return(
        <div
        className="
        w-screen h-screen
        flex flex-col items-center justify-center
        py-[9.375rem]">
            <img
            src={Me}
            alt="Image's me" 
            className='
            w-50 h-50
            rounded-full'/>
            
            <div className="flex flex-col text-center mt-[3.125rem] mb-[1.25rem]">
                <p className='text-4xl font-semibold'>About me</p>
                <p className='mb-[3.125rem] font-light'>Something here</p>
                <p className='font-light text-lg text-pretty max-sm:text-balance'>Text about me</p>
            </div>
        </div>
    );
}