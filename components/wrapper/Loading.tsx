import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player/youtube';

type LoadingProps = {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const Loading: FC<LoadingProps> = ({ setIsLoading }) => {
  const [windowLoaded, setWindowLoaded] = useState(false);
  const [isVideoStarted, setIsVideoStarted] = useState(false);

  useEffect(() => {
    if(typeof window !== "undefined") {
      setWindowLoaded(true);
    };
  })

  return (
    <div
      className="bg-sky-200 fixed w-full h-full top-0 left-0 flex items-center justify-center z-10"
    >
      <div className="relative">
        <svg
          fill="none"
          height="155"
          viewBox="0 0 96 155"
          width="96"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden md:block absolute -left-12 -top-12"
        >
          <g fill="#167f8b" opacity=".3">
            <path d="m48.0824 77.5h-48.0824l41.3234-77.5h48.0275z" />
            <path d="m54.6767 155h-48.08247l41.32347-77.5h48.0824z" />
          </g>
        </svg>
        <div
          className="min-w-[280px] md:min-w-[600px] w-full border border-solid border-white p-4 rounded-2xl"
        >
          {windowLoaded &&
            <ReactPlayer
              url='https://www.youtube.com/watch?v=P2KnD7sfpoA'
              controls={true}
              onStart={() => setIsVideoStarted(true)}
            />
          }
        </div>
        <button
          className={`
            ${isVideoStarted === false ? "text-[#003C3F] bg-[#E5D851] pointer-events-none" : "font-extrabold text-[#E5D851] bg-[#003C3F]"}
            text-xl lg:text-2xl 
            px-4 py-4
            absolute -left-2 lg:-left-10 -bottom-8 lg:-bottom-14
          `}
          onClick={() => setIsLoading(false)}
        >
          {isVideoStarted === false ? "Ready? Watch the video above to get started!" : "Start the demo!"}
        </button>
      </div>
    </div>
  );
};

export default Loading;
