import { useRef } from 'react';
import CountUp from 'react-countup';

type LoadingProps = {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const Loading: FC<LoadingProps> = ({ setIsLoading }) => {
  const loadingDuration = Math.floor(Math.random() * (20 - 6 + 1) + 6);
  const buttonRef = useRef(null);

  const changeContent = () => {
    buttonRef.current.classList.remove('pointer-events-none');
    buttonRef.current.textContent = 'Start demo';
  }

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
          className="absolute -left-12 -top-12"
        >
          <g fill="#167f8b" opacity=".3">
            <path d="m48.0824 77.5h-48.0824l41.3234-77.5h48.0275z" />
            <path d="m54.6767 155h-48.08247l41.32347-77.5h48.0824z" />
          </g>
        </svg>
        <div
          className="min-w-[280px] md:min-w-[600px] w-full border border-solid border-white p-4 rounded-2xl"
        >
          <iframe
            src="https://www.youtube.com/embed/H-PVzy3I6zQ?autoplay=1&mute=1"
            className="w-full h-full aspect-video"
            title="Keystrike demo introduction"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="bg-[#9FE3E3] py-4 absolute -right-10 -top-10 min-w-40 text-center">
          <CountUp
            start={0}
            end={100}
            delay={2}
            duration={loadingDuration}
            suffix=" %"
            useEasing={false}
            onEnd={() => {
              changeContent()
            }}
          >
            {({ countUpRef }) => (
              <span
                className="text-[#003538] font-extrabold text-4xl"
                ref={countUpRef}
              />
            )}
          </CountUp>
        </div>
        <button
          className="text-[#E5D851] font-extrabold text-4xl bg-[#003C3F] px-8 py-4 absolute -left-10 -bottom-8 pointer-events-none"
          onClick={() => setIsLoading(false)}
          ref={buttonRef}
        >
          Loading the demo experience...
        </button>
      </div>
    </div>
  );
};

export default Loading;
