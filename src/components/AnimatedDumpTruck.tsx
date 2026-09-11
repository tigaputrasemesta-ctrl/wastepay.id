"use client";

import React from "react";

type Props = {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  theme?: "green" | "red" | "black" | "white" | "yellow";
  animated?: boolean;
};

export default function AnimatedDumpTruck({
  className = "",
  size = "md",
  theme = "green",
  animated = true,
}: Props) {
  const sizeClasses = {
    xs: "w-5 h-5",
    sm: "w-7 h-7",
    md: "w-10 h-10",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  }[size];

  const colorMap = {
    green: {
      cab: "#16a34a",
      cabAccent: "#22c55e",
      bed: "#eab308",
      bedAccent: "#facc15",
      chassis: "#1e293b",
      wheel: "#0f172a",
      wheelHub: "#e2e8f0",
      trash: "#ef4444",
      stroke: "#000000",
    },
    red: {
      cab: "#dc2626",
      cabAccent: "#ef4444",
      bed: "#16a34a",
      bedAccent: "#22c55e",
      chassis: "#1e293b",
      wheel: "#0f172a",
      wheelHub: "#e2e8f0",
      trash: "#eab308",
      stroke: "#000000",
    },
    yellow: {
      cab: "#eab308",
      cabAccent: "#facc15",
      bed: "#dc2626",
      bedAccent: "#ef4444",
      chassis: "#1e293b",
      wheel: "#0f172a",
      wheelHub: "#e2e8f0",
      trash: "#22c55e",
      stroke: "#000000",
    },
    black: {
      cab: "#000000",
      cabAccent: "#262626",
      bed: "#171717",
      bedAccent: "#404040",
      chassis: "#000000",
      wheel: "#000000",
      wheelHub: "#ffffff",
      trash: "#22c55e",
      stroke: "#000000",
    },
    white: {
      cab: "#ffffff",
      cabAccent: "#f4f4f5",
      bed: "#ffffff",
      bedAccent: "#e4e4e7",
      chassis: "#ffffff",
      wheel: "#ffffff",
      wheelHub: "#000000",
      trash: "#ffffff",
      stroke: "#000000",
    },
  }[theme];

  return (
    <div
      className={`inline-flex items-center justify-center shrink-0 select-none ${sizeClasses} ${className}`}
      title="WastePay Dump Truck"
    >
      <svg
        viewBox="0 0 110 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        {animated && (
          <style>{`
            @keyframes wpTruckBounce {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-1.5px); }
            }
            @keyframes wpDumpAction {
              0%, 15% { transform: rotate(0deg); }
              35%, 55% { transform: rotate(-35deg); }
              75%, 100% { transform: rotate(0deg); }
            }
            @keyframes wpWheelSpin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            @keyframes wpExhaustSmoke {
              0% { transform: translate(0, 0) scale(0.5); opacity: 0; }
              30% { opacity: 0.8; }
              100% { transform: translate(-10px, -14px) scale(1.6); opacity: 0; }
            }
            @keyframes wpTrashTumble {
              0%, 25% { opacity: 0; transform: translate(15px, -15px) scale(0.6) rotate(0deg); }
              35% { opacity: 1; transform: translate(5px, -5px) scale(1) rotate(-45deg); }
              55% { opacity: 0; transform: translate(-15px, 15px) scale(0.8) rotate(-120deg); }
              100% { opacity: 0; transform: translate(0, 0); }
            }
            .wp-truck-chassis-anim {
              animation: wpTruckBounce 1.4s ease-in-out infinite;
            }
            .wp-dump-bed-anim {
              transform-origin: 14px 46px;
              animation: wpDumpAction 3.6s cubic-bezier(0.45, 0, 0.55, 1) infinite;
            }
            .wp-wheel-anim-1 {
              transform-origin: 30px 54px;
              animation: wpWheelSpin 1.6s linear infinite;
            }
            .wp-wheel-anim-2 {
              transform-origin: 70px 54px;
              animation: wpWheelSpin 1.6s linear infinite;
            }
            .wp-wheel-anim-3 {
              transform-origin: 86px 54px;
              animation: wpWheelSpin 1.6s linear infinite;
            }
            .wp-smoke-puff-1 {
              transform-origin: 47px 18px;
              animation: wpExhaustSmoke 2s ease-out infinite;
            }
            .wp-smoke-puff-2 {
              transform-origin: 47px 18px;
              animation: wpExhaustSmoke 2s ease-out 0.8s infinite;
            }
            .wp-trash-falling {
              transform-origin: 10px 40px;
              animation: wpTrashTumble 3.6s ease-in infinite;
            }
          `}</style>
        )}

        {animated && (
          <g>
            <circle
              cx="46"
              cy="16"
              r="3.5"
              fill={theme === "white" ? "rgba(255,255,255,0.7)" : "rgba(100,116,139,0.7)"}
              className="wp-smoke-puff-1"
            />
            <circle
              cx="45"
              cy="14"
              r="4.5"
              fill={theme === "white" ? "rgba(255,255,255,0.5)" : "rgba(148,163,184,0.5)"}
              className="wp-smoke-puff-2"
            />
          </g>
        )}

        {animated && (
          <g className="wp-trash-falling">
            <rect x="6" y="38" width="5" height="5" rx="1" fill={colorMap.trash} stroke={colorMap.stroke} strokeWidth="1" />
            <polygon points="12,42 6,45 8,36" fill={colorMap.bedAccent} stroke={colorMap.stroke} strokeWidth="1" />
            <circle cx="2" cy="40" r="2.5" fill="#3b82f6" stroke={colorMap.stroke} strokeWidth="1" />
          </g>
        )}

        <g className={animated ? "wp-truck-chassis-anim" : ""}>
          {/* Hydraulic Cylinder */}
          <line x1="52" y1="46" x2="57" y2="34" stroke="#64748b" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="52" y1="46" x2="55" y2="38" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />

          {/* DUMP BED */}
          <g className={animated ? "wp-dump-bed-anim" : ""}>
            <path
              d="M12 24 Q 24 16, 38 20 Q 52 14, 68 22 L 68 28 L 12 28 Z"
              fill={colorMap.trash}
              stroke={colorMap.stroke}
              strokeWidth="2"
            />
            <circle cx="28" cy="21" r="4" fill="#15803d" stroke={colorMap.stroke} strokeWidth="1.5" />
            <rect x="42" y="16" width="9" height="7" rx="1" fill="#f97316" stroke={colorMap.stroke} strokeWidth="1.5" />
            <circle cx="58" cy="20" r="3.5" fill="#3b82f6" stroke={colorMap.stroke} strokeWidth="1.5" />

            <path
              d="M 8 22 L 72 22 L 75 46 L 14 46 Z"
              fill={colorMap.bed}
              stroke={colorMap.stroke}
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <rect
              x="7"
              y="20"
              width="66"
              height="3.5"
              rx="1"
              fill={colorMap.bedAccent}
              stroke={colorMap.stroke}
              strokeWidth="2"
            />
            <line x1="22" y1="24" x2="24" y2="44" stroke={colorMap.stroke} strokeWidth="2.5" />
            <line x1="36" y1="24" x2="38" y2="44" stroke={colorMap.stroke} strokeWidth="2.5" />
            <line x1="50" y1="24" x2="52" y2="44" stroke={colorMap.stroke} strokeWidth="2.5" />
            <line x1="64" y1="24" x2="66" y2="44" stroke={colorMap.stroke} strokeWidth="2.5" />

            <circle cx="36" cy="34" r="5.5" fill="#ffffff" stroke={colorMap.stroke} strokeWidth="1.5" />
            <text
              x="36"
              y="37"
              fontSize="7"
              fontWeight="900"
              textAnchor="middle"
              fill={colorMap.stroke}
              fontFamily="sans-serif"
            >
              ♻
            </text>

            <circle cx="14" cy="24" r="2" fill="#000000" />
            <circle cx="14" cy="46" r="2.5" fill="#000000" />
          </g>

          {/* CHASSIS */}
          <rect
            x="14"
            y="46"
            width="82"
            height="6"
            rx="1.5"
            fill={colorMap.chassis}
            stroke={colorMap.stroke}
            strokeWidth="2"
          />

          {/* Exhaust Pipe */}
          <path
            d="M 46 44 L 46 19 Q 46 16, 44 16 L 42 16"
            stroke={colorMap.stroke}
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 46 44 L 46 20 Q 46 17, 44 17 L 42 17"
            stroke="#94a3b8"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* CABIN */}
          <path
            d="M 48 24 L 78 24 Q 85 24, 89 28 L 97 37 Q 99 39, 99 43 L 99 48 L 48 48 Z"
            fill={colorMap.cab}
            stroke={colorMap.stroke}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M 46 22 L 80 22 L 78 25 L 46 25 Z"
            fill={colorMap.cabAccent}
            stroke={colorMap.stroke}
            strokeWidth="1.5"
          />

          <path
            d="M 76 27 L 87 28 L 94 36 L 76 36 Z"
            fill="#bae6fd"
            stroke={colorMap.stroke}
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M 52 27 L 72 27 L 72 36 L 52 36 Z"
            fill="#e0f2fe"
            stroke={colorMap.stroke}
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <circle cx="60" cy="32" r="2.5" fill="#0f172a" />
          <path d="M 56 36 Q 60 33, 64 36 Z" fill="#0f172a" />

          <rect
            x="96"
            y="42"
            width="5"
            height="8"
            rx="1"
            fill="#0f172a"
            stroke={colorMap.stroke}
            strokeWidth="2"
          />
          <polygon
            points="96,38 100,38 99,42 96,41"
            fill="#fef08a"
            stroke={colorMap.stroke}
            strokeWidth="1.5"
          />
          <polygon
            points="100,39 108,36 108,44 100,41"
            fill="rgba(254, 240, 138, 0.4)"
          />

          <line x1="64" y1="39" x2="68" y2="39" stroke={colorMap.stroke} strokeWidth="2" strokeLinecap="round" />

          {/* Mudguards */}
          <path d="M 20 48 A 12 12 0 0 1 40 48" stroke={colorMap.stroke} strokeWidth="2.5" fill="none" />
          <path d="M 60 48 A 12 12 0 0 1 80 48" stroke={colorMap.stroke} strokeWidth="2.5" fill="none" />
          <path d="M 76 48 A 12 12 0 0 1 96 48" stroke={colorMap.stroke} strokeWidth="2.5" fill="none" />

          {/* WHEELS */}
          <g className={animated ? "wp-wheel-anim-1" : ""}>
            <circle cx="30" cy="54" r="9" fill={colorMap.wheel} stroke={colorMap.stroke} strokeWidth="2.5" />
            <circle cx="30" cy="54" r="5" fill={colorMap.wheelHub} stroke={colorMap.stroke} strokeWidth="1.5" />
            <circle cx="30" cy="54" r="1.5" fill="#000000" />
          </g>

          <g className={animated ? "wp-wheel-anim-2" : ""}>
            <circle cx="70" cy="54" r="9" fill={colorMap.wheel} stroke={colorMap.stroke} strokeWidth="2.5" />
            <circle cx="70" cy="54" r="5" fill={colorMap.wheelHub} stroke={colorMap.stroke} strokeWidth="1.5" />
            <circle cx="70" cy="54" r="1.5" fill="#000000" />
          </g>

          <g className={animated ? "wp-wheel-anim-3" : ""}>
            <circle cx="86" cy="54" r="9" fill={colorMap.wheel} stroke={colorMap.stroke} strokeWidth="2.5" />
            <circle cx="86" cy="54" r="5" fill={colorMap.wheelHub} stroke={colorMap.stroke} strokeWidth="1.5" />
            <circle cx="86" cy="54" r="1.5" fill="#000000" />
          </g>
        </g>
      </svg>
    </div>
  );
}
