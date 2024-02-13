import { memo, useState } from "react";
import AppsLoader from "components/system/Apps/AppsLoader";
import Desktop from "components/system/Desktop";
import Taskbar from "components/system/Taskbar";
import Sidebar from "components/wrapper/Sidebar";
import useGlobalErrorHandler from "hooks/useGlobalErrorHandler";
import useGlobalKeyboardShortcuts from "hooks/useGlobalKeyboardShortcuts";
import useIFrameFocuser from "hooks/useIFrameFocuser";
import useUrlLoader from "hooks/useUrlLoader";
import { useExtensionDisabler } from "hooks/useExtensionDisabler";

const Index = (): React.ReactElement => {
  const [isAttackerMode, setIsAttackerMode] = useState(false)

  useIFrameFocuser();
  useUrlLoader();
  useGlobalKeyboardShortcuts();
  useGlobalErrorHandler();
  useExtensionDisabler();

  return (
    <>
      <Desktop
        isAttackerMode={isAttackerMode}
      >
        <Taskbar />
        <AppsLoader />
      </Desktop>
      <Sidebar
        isAttackerMode={isAttackerMode}
        setIsAttackerMode={setIsAttackerMode}
      />
    </>
  );
};

export default memo(Index);
