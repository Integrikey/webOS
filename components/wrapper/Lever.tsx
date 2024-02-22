import { useState } from "react";

const Lever: FC = (): React.JSX.Element => {
  const [isOn, setIsOn] = useState(true)

  return (
    <div
      className={`
        absolute right-4 top-4 md:right-16 md:top-16
        flex flex-col items-center gap-4
      `}
    >
      <div className="relative">
        <img
          alt="A lever. Click on it to interact with the knob."
          src="/images/lever.png"
        />
        <button
          className={`
            absolute left-2 transition-all duration-200 ease-in-out cursor-pointer
            ${isOn ? "top-4" : "bottom-4"}
          `}
          onClick={() => setIsOn(!isOn)}
          type="button"
        >
          <img
            alt="A lever knob. Click on it to interact with the lever."
            src="/images/knob.png"
          />
        </button>
      </div>
      <img
        alt="Decorative arrows"
        src="/images/arrows.svg"
      />
      <p
        className="font-medium text-white text-center"
      >
        Shut off power plant. <br /> Authorized personnel only.
      </p>
    </div>
  );
};

export default Lever;
