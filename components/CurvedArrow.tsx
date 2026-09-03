export default function CurvedArrow() {
  return (
    <div className="relative flex items-center justify-center">
      <svg
        width="115"
        height="115"
        viewBox="0 0 115 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-md"
      >
        <defs>
          <linearGradient
            id="arrowGradient"
            x1="18"
            y1="18"
            x2="96"
            y2="99"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#6FA0D9" />
            <stop offset="0.55" stopColor="#5B91D1" />
            <stop offset="1" stopColor="#4B84CC" />
          </linearGradient>

          <filter
            id="shadow"
            x="-10%"
            y="-10%"
            width="130%"
            height="130%"
          >
            <feDropShadow
              dx="1.5"
              dy="2"
              stdDeviation="2"
              floodColor="#000000"
              floodOpacity="0.22"
            />
          </filter>
        </defs>

        <path
          d="
            M 7 17

            C 34 16, 68 17, 89 27
            C 103 34, 108 46, 106 57
            C 104 72, 91 81, 73 86
            C 63 89, 53 91, 43 92

            L 43 104
            L 11 82
            L 43 58
            L 43 72

            C 59 70, 76 66, 85 59
            C 92 54, 93 49, 87 45
            C 77 37, 56 34, 31 34

            L 7 33
            Z
          "
          fill="url(#arrowGradient)"
          filter="url(#shadow)"
        />

        <text
          x="57"
          y="55"
          fill="#123B70"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="12"
          fontWeight="800"
          textAnchor="middle"
        >
          100%
        </text>
      </svg>
    </div>
  );
}