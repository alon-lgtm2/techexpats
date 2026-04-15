export default function FlagIL({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 220 160"
      className={className}
      aria-label="עברית"
    >
      <rect width="220" height="160" fill="#fff" />
      <rect width="220" height="30" y="15" fill="#0038b8" />
      <rect width="220" height="30" y="115" fill="#0038b8" />
      {/* Star of David */}
      <g transform="translate(110,80)" fill="none" stroke="#0038b8" strokeWidth="5">
        <polygon points="0,-28 24,14 -24,14" />
        <polygon points="0,28 24,-14 -24,-14" />
      </g>
    </svg>
  );
}
