import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type OverlayProps = {
  notifyAnMoveToFinalStep: (e: React.SyntheticEvent) => void
};

const AttackerOverlay: FC<OverlayProps> = ({ notifyAnMoveToFinalStep }): React.JSX.Element => (
  <button
    className="absolute w-full h-full top-0 z-[2000000] cursor-default"
    onClick={(e) => notifyAnMoveToFinalStep(e)}
    type="button"
  >
    <ToastContainer
      closeButton={false}
    />
  </button>
);

export default AttackerOverlay;
