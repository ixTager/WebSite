import Me from '../images/Me.png';

export default function About(){
    return(
        <div className="flex flex-col
        w-screen h-screen 
        justify-center items-center text-center 
        font-[AxiformaThin]
        bg-[#EAEAE8]">
            <img
            src={Me}
            alt="My picture" 
            className='max-w-50 max-h-50 rounded-[360px] mb-7 border-2'/>
            <p className='text-4xl mb-1 font-bold font-[AxiformaMedium]'>About Me</p>
            <p className='font-thin text-3xl mb-8'>Frontend-developer</p>
            <p className='max-w-2/6 text-pretty max-sm:text-balance max-sm:max-w-screen'>Lorem ipsum dolor sit amet consectetur. Tempor elit proin facilisi urna ac sed vulputate arcu congue.</p>
        </div>
    );
}