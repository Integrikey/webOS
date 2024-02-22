const MobileOverlay: FC = (): React.JSX.Element => (
  <div
    className="
      flex flex-col items-center justify-center gap-2
      w-full h-full fixed top-0
      bg-teal-700/90
      z-10
      text-center
    "
  >
    <h2
      className="text-white font-semibold text-xl md:text-2xl"
    >
      We&apos;re sorry
    </h2>
    <p className="text-white">This demo is best experienced in desktop resolutions (&gt;768px or wider). Please check this out on a desktop machine.</p>
  </div>
);

export default MobileOverlay;
