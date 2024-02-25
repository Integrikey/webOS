import OutlinedButton from 'components/wrapper/OutlinedButton';

type SidebarProps = {
  activeStep: number,
  isAttackerMode: boolean,
  setActiveStep: React.Dispatch<React.SetStateAction<number>>,
  setIsAttackerMode: React.Dispatch<React.SetStateAction<boolean>>,
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
};

type Step = {
  action: () => void,
  cta: string,
  text: string
}

type SidebarStepProps = {
  activeStep: number,
  index: number,
  isAttackerMode: boolean,
  isLastStep: boolean,
  setIsAttackerMode: React.Dispatch<React.SetStateAction<boolean>>,
  step: Step
};

type SidebarCTAProps = {
  isAttackerMode: boolean,
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

export const SidebarCTA: FC<SidebarCTAProps> = ({ isAttackerMode, setIsModalOpen }) => (
  <div
    className="grid gap-1 justify-items-start"
  >
    <img
      alt="Icon of a shield"
      src="/images/shield.svg"
    />
    <h2
      className={`
        ${isAttackerMode ? 'text-white' : 'text-gray-700'}
        font-medium
      `}
    >
      Try Keystrike for free
    </h2>
    <p
      className="text-sm text-gray-500 mb-1"
    >
      Contact us and get a free 30-day trial, no strings attached!
    </p>
    <OutlinedButton
      action={() => setIsModalOpen(true)}
      isAttackerMode={isAttackerMode}
      text="Request a demo"
      isModalTrigger
    />
  </div>
);

export const SidebarStep: FC<SidebarStepProps> = ({
  activeStep,
  index,
  isAttackerMode,
  isLastStep,
  step
}) => {
  const isActive = activeStep === index;
  const isStepCompleted = activeStep > index;
  const isFutureStep = activeStep < index;

  const completedClasses = isAttackerMode ? "border-red-500 bg-red-500" : "bg-teal-600 border-teal-600";
  const activeClasses = isAttackerMode ? "text-red-500 border-red-500" : "text-teal-600 border-teal-600";

  return (
    <li
      className="flex gap-4"
    >
      <div
        className="grid justify-items-center gap-3"
      >
        <span
          className={`
            flex items-center justify-center
            w-8 h-8
            border border-solid rounded-full
            text-sm
            ${isActive
              ? activeClasses
              : isStepCompleted
                ? completedClasses
                : "text-gray-400 border-gray-400"
            }
          `}
        >
          {isStepCompleted
            ?
            <img
              alt="Checkmark icon"
              src="/images/checkmark.svg"
            />
            : index
          }
        </span>
        {!isLastStep &&
          <div
            className="w-px h-full min-h-[3rem] bg-gray-300"
          />
        }
      </div>
      <div
      className="grid gap-2 justify-items-start"
      >
        {!isFutureStep &&
          <p
          className={`
            text-sm text-gray-500
            ${isStepCompleted && "opacity-60"}
          `}
          >
          {step.text}
        </p>
        }
        {isActive &&
          <OutlinedButton
            action={step.action}
            isAttackerMode={isAttackerMode}
            text={step.cta}
          />
        }
      </div>
    </li>
  )
}

const Sidebar: FC<SidebarProps> = ({
  activeStep,
  isAttackerMode,
  setActiveStep,
  setIsAttackerMode,
  setIsModalOpen
}): React.JSX.Element => {
  const defaultCtaText = "Change to attacker view";

  const steps = [
    {
      action: () => {
        setIsAttackerMode(true)
        setActiveStep(2)
      },
      cta: defaultCtaText,
      text: "You're an employee with access to a mission critical system. Try fiddling with the levers!"
    },
    {
      action: () => {
        setIsAttackerMode(!isAttackerMode)
      },
      cta: isAttackerMode ? "Back to employee view" : defaultCtaText,
      text: "You're now in the shoes of an attacker who has hacked the employee's computer."
    },
    {
      action: () => {
        setIsAttackerMode(!isAttackerMode)
      },
      cta: isAttackerMode ? "Back to employee view" : defaultCtaText,
      text: "Keystrike on the mission-critical system blocks unattested keystrokes. The attacker can't move laterally."
    }
  ];

  return (
    <aside
      className={`
        fixed right-0 md:top-0 bottom-0
        w-full md:w-[33vw] lg:w-[25vw]
        h-[40vh] md:h-full
        grid content-between
        ${isAttackerMode ? 'bg-gray-900' : 'bg-white'}
        p-4 md:p-6
        overflow-auto
      `}
      tabIndex={-1}
    >
      <div>
        <a
          className="hidden md:flex items-center gap-4 cursor-pointer transition-opacity duration-200 ease-in-out hover:opacity-80"
          href="https://keystrike.io"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="Keystrike logo"
            src="/images/logo.svg"
          />
          <div
            className="leading-tight"
          >
            <h2
              className={`
                font-medium
                ${isAttackerMode ? 'text-white' : 'text-gray-700'}
              `}
            >
              Keystrike
            </h2>
            <p
              className="text-sm text-gray-500"
            >
              Demo
            </p>
          </div>
        </a>
        <ul
          className="py-4 md:py-6 grid gap-3 mb-8 md:mb-0"
        >
          {steps.map((step, index) =>
            <SidebarStep
              key={Math.random()}
              activeStep={activeStep}
              index={index + 1}
              isAttackerMode={isAttackerMode}
              isLastStep={steps.length === index + 1}
              setIsAttackerMode={setIsAttackerMode}
              step={step}
            />
          )}
        </ul>
      </div>
      <SidebarCTA
        isAttackerMode={isAttackerMode}
        setIsModalOpen={setIsModalOpen}
      />
    </aside>
  );
};

export default Sidebar;
