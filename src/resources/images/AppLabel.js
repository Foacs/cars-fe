import React from "react";

const AppLabel = ({ color = "inherit", height, width }) => {

  // region Compute height and width
  if (width && !height) {
    // In case only the width is given, compute the height
    height = `calc(0.254 * ${width})`;
  } else if (!width && height) {
    // In case only the height is given, compute the width
    width = `calc(3.9375 * ${height})`;
  } else if (!width && !height) {
    // In case neither the width nor the height are given, use default values
    width = 189;
    height = 48;
  }
  // endregion

  // region Render
  return (
    <svg width={width} height={height} viewBox="24.1 4.2 16.37 16.37">
      <g fill={color}>
        <path d="M9 7.859999999999999 q-0.26 -0.04 -0.43 -0.24 t-0.17 -0.46 l0 -1.46 q0 -0.34 0.24 -0.54 t0.56 -0.16 q1.72 0.28 3.06 1.22 q1.74 1.26 2.46 3.34 q0.12 0.34 -0.08 0.64 t-0.58 0.3 l-1.6 0 q-0.22 0 -0.4 -0.11 t-0.26 -0.31 q-0.44 -1.04 -1.34 -1.66 q-0.7 -0.44 -1.46 -0.56 z M14.06 14.5 q0.38 0 0.58 0.3 t0.08 0.64 q-0.72 2.08 -2.46 3.34 q-1.34 0.94 -3.06 1.22 l-0.1 0 q-0.28 0 -0.46 -0.18 q-0.24 -0.18 -0.24 -0.52 l0 -1.46 q0 -0.26 0.16 -0.46 t0.42 -0.24 q0.84 -0.12 1.48 -0.56 q0.9 -0.62 1.34 -1.66 q0.08 -0.2 0.26 -0.31 t0.4 -0.11 l1.6 0 z M6.9 5.24 q0.26 0.2 0.26 0.54 l0 1.56 q0 0.22 -0.15 0.41 t-0.37 0.27 q-0.28 0.06 -0.44 0.14 q-0.8 0.36 -1.36 0.98 q-1.14 1.28 -1.14 3.35 t1.14 3.37 q0.7 0.8 1.8 1.12 q0.22 0.06 0.37 0.25 t0.15 0.41 l0 1.58 q0 0.34 -0.26 0.54 q-0.18 0.16 -0.46 0.16 l-0.14 0 q-2.14 -0.46 -3.62 -2.08 q-1.9 -2.14 -1.9 -5.34 t1.9 -5.34 q1.48 -1.64 3.62 -2.06 q0.32 -0.08 0.6 0.14 z M31.948 18.86 q0.14 0.32 -0.07 0.65 t-0.57 0.33 l-13.32 0 q-0.18 0 -0.34 -0.09 t-0.24 -0.23 q-0.22 -0.32 -0.06 -0.66 l0.62 -1.46 q0.08 -0.2 0.26 -0.32 t0.38 -0.12 l9.32 0 l-3.28 -7.84 l-2.68 6.4 q-0.08 0.2 -0.25 0.31 t-0.39 0.11 l-1.68 0 q-0.38 0 -0.6 -0.32 q-0.08 -0.14 -0.1 -0.32 t0.04 -0.34 l4.06 -9.52 q0.08 -0.2 0.25 -0.32 t0.39 -0.12 l1.92 0 q0.22 0 0.39 0.12 t0.25 0.32 z M44.976 14.1 l3.02 4.62 q0.22 0.36 0.02 0.72 q-0.08 0.16 -0.25 0.26 t-0.35 0.1 l-1.82 0 q-0.18 0 -0.34 -0.09 t-0.24 -0.23 l-3.04 -4.82 l-3.56 0 l0 4.44 q0 0.28 -0.21 0.49 t-0.49 0.21 l-1.52 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -6.58 q0 -0.28 0.21 -0.49 t0.49 -0.21 l6.16 0 q1.76 0 2.34 -1 q0.2 -0.32 0.2 -0.92 q0 -0.94 -0.62 -1.48 q-0.64 -0.58 -1.84 -0.58 l-6.24 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -1.44 q0 -0.28 0.21 -0.49 t0.49 -0.21 l6.42 0 q2.34 0 3.74 1.32 q1.46 1.32 1.46 3.58 q0 1.46 -0.64 2.49 t-1.86 1.57 z M61.96399999999999 12.42 q0.86 0.54 1.31 1.32 t0.45 1.74 q0 2.26 -1.72 3.46 q-1.16 0.84 -3.14 1.06 l-0.08 0 q-0.28 0 -0.46 -0.18 q-0.24 -0.22 -0.24 -0.52 l0 -1.44 q0 -0.26 0.18 -0.46 t0.44 -0.24 q0.94 -0.1 1.46 -0.44 q0.4 -0.24 0.54 -0.62 q0.08 -0.22 0.08 -0.56 q0 -0.22 -0.08 -0.38 t-0.28 -0.3 q-0.58 -0.4 -1.5 -0.68 l-0.32 -0.1 q-1 -0.28 -1.84 -0.46 q-0.18 -0.04 -0.58 -0.14 l-0.22 -0.06 q-0.72 -0.18 -1.52 -0.5 q-1.18 -0.5 -1.94 -1.26 q-0.88 -0.88 -0.88 -2.32 q0 -1.98 1.52 -3.22 q1.04 -0.88 2.92 -1.12 q0.32 -0.04 0.55 0.18 t0.23 0.52 l0 1.44 q0 0.26 -0.16 0.46 t-0.41 0.23 t-0.51 0.11 q-0.58 0.22 -0.82 0.43 t-0.34 0.43 q-0.1 0.34 -0.1 0.64 q0 0.16 0.18 0.34 q0.28 0.28 0.82 0.5 q0.24 0.1 0.84 0.3 l2.5 0.62 l0.12 0.04 q0.94 0.26 1.36 0.4 q0.94 0.32 1.64 0.78 z M58.623999999999995 7.9 q-0.24 -0.06 -0.39 -0.25 t-0.15 -0.45 l0 -1.46 q0 -0.32 0.26 -0.54 q0.1 -0.1 0.26 -0.13 t0.3 -0.01 q1.76 0.28 2.86 1.2 q1.5 1.24 1.6 3.16 q0.02 0.28 -0.19 0.51 t-0.51 0.23 l-1.56 0 q-0.26 0 -0.46 -0.18 t-0.22 -0.44 q-0.08 -0.52 -0.34 -0.86 q-0.42 -0.5 -1.3 -0.76 q-0.06 0 -0.08 -0.02 l-0.08 0 z M56.28399999999999 17.08 q0.24 0.04 0.4 0.24 t0.16 0.44 l0 1.48 q0 0.32 -0.24 0.54 q-0.2 0.16 -0.46 0.16 l-0.1 0 q-1.86 -0.28 -3.06 -1.22 q-1.56 -1.24 -1.76 -3.46 q-0.04 -0.32 0.18 -0.55 t0.52 -0.23 l1.58 0 q0.28 0 0.48 0.19 t0.22 0.47 q0.06 1 0.98 1.54 q0.42 0.24 1.1 0.4 z"/>
      </g>
    </svg>
  );
  // endregion

};

export default AppLabel;
