type ButtonProps = {
  text: string,
  isAttackerMode: boolean,
  action: () => void
};

const OutlinedButton: FC<ButtonProps> = ({
  text,
  isAttackerMode,
  action
}): React.JSX.Element => {
  return (
    <button
      className={`
        px-4 py-1
        border border-solid rounded-md
        transition-all duration-200 ease-in-out
        ${isAttackerMode ? "border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white" : "border-red-500 text-red-500 hover:bg-red-500 hover:text-white"}
        text-sm font-medium
      `}
      onClick={action}
    >
      {text}
    </button>
  );
};

export default OutlinedButton;
