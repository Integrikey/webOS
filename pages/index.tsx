import { memo, useState } from "react";
import { toast } from 'react-toastify';

import AppsLoader from "components/system/Apps/AppsLoader";
import Desktop from "components/system/Desktop";
import Taskbar from "components/system/Taskbar";

import Loading from "components/wrapper/Loading";
import Sidebar from "components/wrapper/Sidebar";
import AttackerOverlay from "components/wrapper/AttackerOverlay";
import Lever from "components/wrapper/Lever";
import TryModal from "components/wrapper/TryModal";

import useGlobalErrorHandler from "hooks/useGlobalErrorHandler";
import useGlobalKeyboardShortcuts from "hooks/useGlobalKeyboardShortcuts";
import useIFrameFocuser from "hooks/useIFrameFocuser";
import useUrlLoader from "hooks/useUrlLoader";
import { useExtensionDisabler } from "hooks/useExtensionDisabler";

const Index = (): React.ReactElement => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAttackerMode, setIsAttackerMode] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useIFrameFocuser();
  useUrlLoader();
  useGlobalKeyboardShortcuts();
  useGlobalErrorHandler();
  useExtensionDisabler();

  const notifyAnMoveToFinalStep = (e: React.SyntheticEvent) => {
    e.stopPropagation();

    toast.error('Unauthorized keystroke detected. System blocked.', {
      position: "bottom-right",
      theme: "colored",
    });

    setActiveStep(3);
  };

  return (
    <>
      {isLoading && <Loading setIsLoading={setIsLoading} />}
      <div
        onKeyDownCapture={isAttackerMode ? (e) => notifyAnMoveToFinalStep(e) : undefined}
        className={isAttackerMode ? 'attacked' : ''}
      >
        <Desktop
          isAttackerMode={isAttackerMode}
        >
          <Lever />
          {isAttackerMode &&
            <AttackerOverlay
              notifyAnMoveToFinalStep={notifyAnMoveToFinalStep}
            />
          }
          <Taskbar />
          <AppsLoader />
        </Desktop>
        <Sidebar
          isAttackerMode={isAttackerMode}
          setIsAttackerMode={setIsAttackerMode}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          setIsModalOpen={setIsModalOpen}
        />
        <TryModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
    </>
  );
};

export default memo(Index);
