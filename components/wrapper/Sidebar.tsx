import OutlinedButton from '../wrapper/OutlinedButton';

type SidebarProps = {
  isAttackerMode: boolean,
  setIsAttackerMode: React.Dispatch<React.SetStateAction<boolean>>,
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
  activeStep: number,
  setActiveStep: React.Dispatch<React.SetStateAction<number>>
};

type Step = {
  text: string,
  cta: string,
  action: () => void
}

type SidebarStepProps = {
  step: Step,
  index: number,
  activeStep: number,
  isLastStep: boolean,
  isAttackerMode: boolean,
  setIsAttackerMode: React.Dispatch<React.SetStateAction<boolean>>
};

type SidebarCTAProps = {
  isAttackerMode: boolean,
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const Sidebar: FC<SidebarProps> = ({
  isAttackerMode,
  setIsAttackerMode,
  activeStep,
  setActiveStep,
  setIsModalOpen
}): React.JSX.Element => {
  const steps = [
    {
      text: "You're an employee with access to a mission critical system. Try fiddling with the levers!",
      cta: "Change to attacker view",
      action: () => {
        setIsAttackerMode(true)
        setActiveStep(2)
      }
    },
    {
      text: "You're now in the shoes of an attacker who has hacked the employee's computer.",
      cta: `${isAttackerMode ? "Back to employee view" : "Change to attacker view"}`,
      action: () => {
        setIsAttackerMode(!isAttackerMode)
      }
    },
    {
      text: "Keystrike on the mission-critical system blocks unattested keystrokes. The attacker can't move laterally.",
      cta: `${isAttackerMode ? "Back to employee view" : "Change to attacker view"}`,
      action: () => {
        setIsAttackerMode(!isAttackerMode)
      }
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
    >
      <div>
        <a
          href="https://keystrike.io"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-4 cursor-pointer transition-opacity duration-200 ease-in-out hover:opacity-80"
        >
          <img
            src="/images/logo.svg"
            alt="Keystrike logo"
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
              step={step}
              activeStep={activeStep}
              index={index + 1}
              isLastStep={steps.length === index + 1}
              key={index}
              isAttackerMode={isAttackerMode}
              setIsAttackerMode={setIsAttackerMode}
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

export const SidebarStep: FC<SidebarStepProps> = ({
  step,
  activeStep,
  index,
  isAttackerMode,
  isLastStep,
}) => {
  const isActive = activeStep === index;
  const isStepCompleted = activeStep > index;

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
                src="/images/checkmark.svg"
                alt="Checkmark icon"
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
        {isActive &&
          <div
            className="grid gap-2 justify-items-start"
          >
            <p
              className="text-sm text-gray-500"
            >
              {step.text}
            </p>
            <OutlinedButton
              text={step.cta}
              isAttackerMode={isAttackerMode}
              action={step.action}
            />
          </div>
        }
      </li>
  )
}

export const SidebarCTA: FC<SidebarCTAProps> = ({ isAttackerMode, setIsModalOpen }) => {
  return (
    <div
      className="grid gap-1 justify-items-start"
    >
      <img
        src="/images/shield.svg"
        alt="Icon of a shield"
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
        text="Request a demo"
        isModalTrigger={true}
        isAttackerMode={isAttackerMode}
        action={() => setIsModalOpen(true)}
      />
    </div>
  )
}

export default Sidebar;
