type ButtonProps = {
  action: () => void,
  isAttackerMode?: boolean,
  isModalTrigger?: boolean,
  text: string
};

const OutlinedButton: FC<ButtonProps> = ({
  action,
  isAttackerMode,
  isModalTrigger,
  text
}): React.JSX.Element => {
  const modalTriggerClasses = `border-gray-200 hover:bg-teal-700 hover:border-teal-700 ${isAttackerMode ? 'text-white' : 'text-gray-700 hover:text-white'}`;

  return (
    <button
      className={`
        px-4 py-1
        border border-solid rounded-md
        transition-all duration-200 ease-in-out
        ${isModalTrigger
          ? modalTriggerClasses
          : isAttackerMode
            ? "border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white"
            : "border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
        }
        text-sm font-medium
      `}
      onClick={action}
      type="button"
    >
      {text}
    </button>
  );
};

export default OutlinedButton;
