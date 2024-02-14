import { useRef } from "react";
import StyledDesktop from "components/system/Desktop/StyledDesktop";
import useWallpaper from "components/system/Desktop/Wallpapers/useWallpaper";
import FileManager from "components/system/Files/FileManager";
import useHeightOverride from "hooks/useHeightOverride";
import { DESKTOP_PATH } from "utils/constants";

const Desktop: FC = ({ isAttackerMode, children }) => {
  const heightOverride = useHeightOverride();
  const desktopRef = useRef<HTMLElement | null>(null);

  useWallpaper(desktopRef, heightOverride);

  return (
    <StyledDesktop ref={desktopRef} $height={heightOverride} $isAttackerMode={isAttackerMode}>
      <FileManager
        url={DESKTOP_PATH}
        view="icon"
        allowMovingDraggableEntries
        hideLoading
        hideScrolling
        isDesktop
        loadIconsImmediately
        isAttackerMode={isAttackerMode}
      />
      {children}
    </StyledDesktop>
  );
};

export default Desktop;
