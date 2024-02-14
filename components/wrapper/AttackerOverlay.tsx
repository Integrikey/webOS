import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type OverlayProps = {
  notifyAnMoveToFinalStep: (e: React.SyntheticEvent) => void
};

const AttackerOverlay: FC<OverlayProps> = ({ notifyAnMoveToFinalStep }): React.JSX.Element => {
  return (
    <div
      className="absolute w-full h-full top-0 z-[2000000]"
      onClick={(e) => notifyAnMoveToFinalStep(e)}
    >
      <ToastContainer
        closeButton={false}
      />
    </div>
  );
};

export default AttackerOverlay;
