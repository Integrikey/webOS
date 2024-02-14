import { memo, useState } from "react";
import { toast } from 'react-toastify';

import AppsLoader from "components/system/Apps/AppsLoader";
import Desktop from "components/system/Desktop";
import Taskbar from "components/system/Taskbar";

import Sidebar from "components/wrapper/Sidebar";
import AttackerOverlay from "components/wrapper/AttackerOverlay";
import Lever from "components/wrapper/Lever";

import useGlobalErrorHandler from "hooks/useGlobalErrorHandler";
import useGlobalKeyboardShortcuts from "hooks/useGlobalKeyboardShortcuts";
import useIFrameFocuser from "hooks/useIFrameFocuser";
import useUrlLoader from "hooks/useUrlLoader";
import { useExtensionDisabler } from "hooks/useExtensionDisabler";

const Index = (): React.ReactElement => {
  const [isAttackerMode, setIsAttackerMode] = useState(false);
  const [activeStep, setActiveStep] = useState(1);

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
    <div
      onKeyDownCapture={isAttackerMode ? (e) => notifyAnMoveToFinalStep(e) : undefined}
      className={isAttackerMode ? 'attacked' : ''}
    >
      <Desktop
        isAttackerMode={isAttackerMode}
      >
        <Lever
        />
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
      />
    </div>
  );
};

export default memo(Index);
