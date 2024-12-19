module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
    './public/index.html',
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    },
  corePlugins: {
    backgroundOpacity: false,
    textOpacity: false,
    divideOpacity: false,
    placeholderOpacity: false,
    ringOpacity: false,
    objectOpacity: false,
    transform: false,
  },
  theme: {
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      white: "#FDFDFD",
      black: "#151618",
      mainbg: "#EFF1F4",
      gray: {
        100: "#F7F8F9",
        200: "#E4E7EB",
        300: "#C4C9D0",
        400: "#9499A1",
        500: "#595E66",
        600: "#34393F",
        700: "#2A2D31",
        800: "#1D1F22",
      },
      primary: {
        DEFAULT: "#4870F6",
        dark: "#354FA8",
        "ultra-dark": "#27376C",
        light: "#D4DDFF",
        "ultra-light": "#F1F4FF",
      },
      secondary: {
        DEFAULT: "#FF952D",
        dark: "#D1751B",
        "ultra-dark": "#995614",
        light: "#FFD8B2",
        "ultra-light": "#FFF0E2",
      },
      green: {
        DEFAULT: "#12B76A",
        dark: "#0C844C",
        "ultra-dark": "#085732",
        light: "#74DEAD",
        "ultra-light": "#DFF9ED",
      },
      red: {
        DEFAULT: "#E4493F",
        dark: "#AF2E26",
        "ultra-dark": "#801F19",
        light: "#FB9993",
        "ultra-light": "#FFE4E3",
      },
      orange: {
        DEFAULT: "#F2794C",
        dark: "#C75328",
        "ultra-dark": "#984424",
        light: "#FFC185",
        "ultra-light": "#FFF3E8",
      },
    }),
    fontSize: {
      xxs: ["0.25rem"],
      xs: ["0.625rem"],
      sm: ["0.75rem"],
      md: ["0.875rem"],
      lg: ["1rem"],
      xl: ["1.125rem"],
      "2xl": ["1.25rem"],
      "3xl": ["1.375rem"],
      "4xl": ["1.5rem"],
      "5xl": ["1.625rem"],
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
    },
    borderRadius: {
      none: "0px",
      xs: "0.25rem", // 4px
      sm: "0.5rem", // 8px
      md: "0.625rem", // 10px
      lg: "0.75rem", // 12px
      full: "6rem",
    },
    boxShadow: {
      xs: "0px 1px 3px 0px rgba(16, 24, 40, 0.16), 0px 1px 2px 0px rgba(16, 24, 40, 0.02)",
      sm: "0px 4px 8px -2px rgba(16, 24, 40, 0.16), 0px 2px 4px -2px rgba(16, 24, 40, 0.04)",
      md: "0px 14px 24px -4px rgba(16, 24, 40, 0.12), 0px 6px 8px -4px rgba(16, 24, 40, 0.02)",
      lg: "0px 24px 48px -12px rgba(16, 24, 40, 0.18)",
      focused: "0px 0px 1px 1px rgba(72, 112, 246, 0.6)",
    },
    extend: {
      height: {
        "btn-sm": "1.875rem",
        "btn-md": "2.375rem",
        "btn-lg": "2.875rem",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    function ({ addComponents }) {
      addComponents({
        '.my-translate-x-40': {
          transform: 'translateX(40px)',
        },
        '.my-translate-x-15': {
          transform: 'translateX(15px)',
        },
      })
    },
  ],
};

