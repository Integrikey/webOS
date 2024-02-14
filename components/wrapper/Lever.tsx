import { useState } from "react";

const Lever = () => {
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
          src="/images/lever.png"
          alt="A lever. Click on it to interact with the knob."
        />
        <button
          className={`
            absolute left-2 transition-all duration-200 ease-in-out cursor-pointer
            ${isOn ? "top-4" : "bottom-4"}
          `}
          onClick={() => setIsOn(!isOn)}
        >
          <img
            src="/images/knob.png"
            alt="A lever knob. Click on it to interact with the lever."
          />
        </button>
      </div>
      <img
        src="/images/arrows.svg"
        alt="Decorative arrows"
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
