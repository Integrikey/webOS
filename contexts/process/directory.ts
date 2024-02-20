import dynamic from "next/dynamic";
import { type Processes } from "contexts/process/types";
import { FOLDER_ICON, TASKBAR_HEIGHT } from "utils/constants";

const directory: Processes = {
  Browser: {
    Component: dynamic(() => import("components/apps/Browser")),
    backgroundColor: "#FFF",
    defaultSize: {
      height: 500,
      width: 600,
    },
    icon: "/System/Icons/chromium.webp",
    title: "Web Browser",
  },
  DevTools: {
    Component: dynamic(() => import("components/apps/DevTools")),
    backgroundColor: "#242424",
    defaultSize: {
      height: 380,
      width: 545,
    },
    icon: "/System/Icons/eruda.webp",
    libs: ["/Program Files/Eruda/eruda.js"],
    singleton: true,
    title: "DevTools",
  },
  Emulator: {
    Component: dynamic(() => import("components/apps/Emulator")),
    backgroundColor: "#000",
    defaultSize: {
      height: 400,
      width: 600,
    },
    dependantLibs: [
      "/Program Files/EmulatorJs/emu-css.min.css",
      "/Program Files/EmulatorJs/emulator.min.js",
    ],
    icon: "/System/Icons/emulator.webp",
    libs: ["/Program Files/EmulatorJs/loader.js"],
    lockAspectRatio: true,
    singleton: true,
    title: "Emulator",
  },
  FileExplorer: {
    Component: dynamic(() => import("components/apps/FileExplorer")),
    backgroundColor: "#202020",
    icon: FOLDER_ICON,
    title: "File Explorer",
  },
  Marked: {
    Component: dynamic(() => import("components/apps/Marked")),
    backgroundColor: "#FFF",
    defaultSize: {
      height: 480,
      width: 560,
    },
    icon: "/System/Icons/marked.webp",
    libs: [
      "/Program Files/Marked/marked.min.js",
      "/Program Files/Marked/purify.min.js",
    ],
    title: "Marked",
  },
  MonacoEditor: {
    Component: dynamic(() => import("components/apps/MonacoEditor")),
    backgroundColor: "#1E1E1E",
    defaultSize: {
      height: 480,
      width: 544,
    },
    dependantLibs: [
      "/Program Files/MonacoEditor/vs/loader.js",
      "/Program Files/MonacoEditor/vs/editor/editor.main.js",
      "/Program Files/MonacoEditor/vs/editor/editor.main.css",
      "/Program Files/MonacoEditor/vs/editor/editor.main.nls.js",
    ],
    icon: "/System/Icons/monaco.webp",
    title: "Monaco Editor",
  },
  OpenType: {
    Component: dynamic(() => import("components/apps/OpenType")),
    backgroundColor: "#FFF",
    defaultSize: {
      height: 480,
      width: 640,
    },
    icon: "/System/Icons/opentype.webp",
    preferProcessIcon: true,
    title: "OpenType",
  },
  OpenWith: {
    Component: dynamic(() => import("components/system/Dialogs/OpenWith")),
    allowResizing: false,
    backgroundColor: "#FFF",
    defaultSize: {
      height: 492,
      width: 392,
    },
    hideTaskbarEntry: true,
    hideTitlebar: true,
    icon: "/System/Icons/unknown.webp",
    title: "Open With",
  },
  PDF: {
    Component: dynamic(() => import("components/apps/PDF")),
    backgroundColor: "#525659",
    defaultSize: {
      height: 480,
      width: 640,
    },
    icon: "/System/Icons/pdf.webp",
    libs: ["/Program Files/PDF.js/pdf.js"],
    title: "PDF Reader",
  },
  Paint: {
    Component: dynamic(() => import("components/apps/Paint")),
    backgroundColor: "#808080",
    defaultSize: {
      height: 480,
      width: 640,
    },
    icon: "/System/Icons/paint.webp",
    libs: ["/Program Files/jspaint/index.html"],
    title: "Paint",
  },
  Photos: {
    Component: dynamic(() => import("components/apps/Photos")),
    backgroundColor: "#222",
    defaultSize: {
      height: 432,
      width: 576,
    },
    hideTitlebarIcon: true,
    icon: "/System/Icons/photos.webp",
    title: "Photos",
  },
  Properties: {
    Component: dynamic(() => import("components/system/Dialogs/Properties")),
    allowResizing: false,
    backgroundColor: "rgb(240, 240, 240)",
    defaultSize: {
      height: 412,
      width: 361,
    },
    hideMaximizeButton: true,
    hideMinimizeButton: true,
    icon: "",
    title: "Properties",
  },
  Run: {
    Component: dynamic(() => import("components/system/Dialogs/Run")),
    allowResizing: false,
    defaultSize: {
      height: 174,
      width: 397,
    },
    hideMaximizeButton: true,
    hideMinimizeButton: true,
    icon: "/System/Icons/run.webp",
    initialRelativePosition: {
      bottom: TASKBAR_HEIGHT + 11,
      left: 15,
    },
    singleton: true,
    title: "Run",
  },
  Terminal: {
    Component: dynamic(() => import("components/apps/Terminal")),
    backgroundColor: "rgba(12, 12, 12, 0.5)",
    defaultSize: {
      height: 374,
      width: 615,
    },
    icon: "/System/Icons/xterm.webp",
    libs: [
      "/Program Files/Xterm.js/xterm.css",
      "/Program Files/Xterm.js/xterm.js",
      "/Program Files/Xterm.js/xterm-addon-fit.js",
      "/Program Files/Xterm.js/local-echo.js",
    ],
    preferProcessIcon: true,
    title: "Terminal",
  },
  VideoPlayer: {
    Component: dynamic(() => import("components/apps/VideoPlayer")),
    autoSizing: true,
    backgroundColor: "#000",
    icon: "/System/Icons/vlc.webp",
    libs: [
      "/Program Files/Video.js/video-js.min.css",
      "/Program Files/Video.js/video.min.js",
      "/Program Files/Video.js/Youtube.min.js",
    ],
    title: "Video Player",
  },
  Vim: {
    Component: dynamic(() => import("components/apps/Vim")),
    allowResizing: false,
    backgroundColor: "#222324",
    defaultSize: {
      height: 448,
      width: 595,
    },
    icon: "/System/Icons/vim.webp",
    libs: ["/Program Files/Vim.js/vim.js"],
    singleton: true,
    title: "Vim",
  },
};

export default directory;
