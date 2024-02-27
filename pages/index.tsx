import { memo, useState, useEffect } from "react";
import { isMobile } from 'react-device-detect';
import { toast } from 'react-toastify';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppsLoader from "components/system/Apps/AppsLoader";
import Desktop from "components/system/Desktop";
import Taskbar from "components/system/Taskbar";
import Loading from "components/wrapper/Loading";
import Sidebar from "components/wrapper/Sidebar";
import AttackerOverlay from "components/wrapper/AttackerOverlay";
import Lever from "components/wrapper/Lever";
import TryModal from "components/wrapper/TryModal";
import MobileOverlay from "components/wrapper/MobileOverlay";
import useGlobalErrorHandler from "hooks/useGlobalErrorHandler";
import useGlobalKeyboardShortcuts from "hooks/useGlobalKeyboardShortcuts";
import useIFrameFocuser from "hooks/useIFrameFocuser";
import useUrlLoader from "hooks/useUrlLoader";
import { useExtensionDisabler } from "hooks/useExtensionDisabler";

const Index = (): React.ReactElement => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#0f766e'
      },
    },
  });

  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAttackerMode, setIsAttackerMode] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useIFrameFocuser();
  useUrlLoader();
  useGlobalKeyboardShortcuts();
  useGlobalErrorHandler();
  useExtensionDisabler();

  const notifyAnMoveToFinalStep = (e: React.SyntheticEvent): void => {
    toast.error(`Unauthorized ${e?.type === 'click' ? 'click' : 'keystroke'} detected. System blocked.`, {
      position: "bottom-right",
      theme: "colored",
      className: "text-left"
    });

    setActiveStep(3);
  };

  const backToPreviousStep = (index: number): void => {
    setActiveStep(index);
    
    if (index === 2) {
      setIsAttackerMode(true);
    } else {
      setIsAttackerMode(false);
    };
  }

  useEffect(() => {
    setIsMobileDevice(isMobile);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {isLoading && <Loading setIsLoading={setIsLoading} />}
      {isMobileDevice && <MobileOverlay />}
      <div
        className={isAttackerMode ? 'attacked' : ''}
        onKeyDown={isAttackerMode ? () => notifyAnMoveToFinalStep() : undefined}
        role="article"
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
          activeStep={activeStep}
          backToPreviousStep={backToPreviousStep}
          isAttackerMode={isAttackerMode}
          setActiveStep={setActiveStep}
          setIsAttackerMode={setIsAttackerMode}
          setIsModalOpen={setIsModalOpen}
        />
        <TryModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
    </ThemeProvider>
  );
};

export default memo(Index);
