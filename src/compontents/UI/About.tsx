import Me from '../images/Me.png';

export default function About(){
    return(
        <div className="flex flex-col w-screen h-screen justify-center items-center text-center ">
            <img
            src={Me}
            alt="My picture" 
            className='max-w-50 max-h-50 rounded-[360px] mb-3.5'/>
            <p className='text-4xl mb-0.5 font-bold'>About Me</p>
            <p className='font-thin text-3xl mb-8'>Frontend-developer</p>
            <p className='max-w-2/6 text-pretty max-sm:text-balance'>Lorem ipsum dolor sit amet consectetur. Tempor elit proin facilisi urna ac sed vulputate arcu congue.</p>
        </div>
    );
}