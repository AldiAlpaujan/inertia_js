import { createTheme } from "@mantine/core";

const theme = createTheme({
  fontFamily: 'Montserrat, sans-serif',
  primaryColor: 'primary',
  primaryShade: { light: 5, dark: 7 },
  headings: {
    sizes: {
      h1: {
        fontSize: '64px',
        lineHeight: '1.25',
        fontWeight: '800',
      },
      h2: {
        fontSize: '48px',
        lineHeight: '1.33',
        fontWeight: '800',
      },
      h3: {
        fontSize: '32px',
        lineHeight: '1.50',
        fontWeight: '700',
      },
      h4: {
        fontSize: '24px',
        lineHeight: '1.50',
        fontWeight: '700',
      },
      h5: {
        fontSize: '19px',
        lineHeight: '1.47',
        fontWeight: '700',
      },
    }
  },
  colors: {
    primary: [
      "#C8FAD6", // 0 (lighter)
      "#C8FAD6", // 1
      "#5BE49B", // 2 (light)
      "#5BE49B", // 3
      "#00A76F", // 4
      "#00A76F", // 5 (main)
      "#007867", // 6
      "#007867", // 7 (dark)
      "#004B50", // 8
      "#004B50", // 9 (darker)
    ],
    info: [
      "#CAFDF5", // 0 (lighter)
      "#CAFDF5", // 1
      "#61F3F3", // 2 (light)
      "#61F3F3", // 3
      "#00B8D9", // 4
      "#00B8D9", // 5 (main)
      "#006C9C", // 6
      "#006C9C", // 7 (dark)
      "#003768", // 8
      "#003768", // 9 (darker)
    ],
    success: [
      "#D3FCD2", // 0 (lighter)
      "#D3FCD2", // 1
      "#77ED8B", // 2 (light)
      "#77ED8B", // 3
      "#22C55E", // 4
      "#22C55E", // 5 (main)
      "#118D57", // 6
      "#118D57", // 7 (dark)
      "#065E49", // 8
      "#065E49", // 9 (darker)
    ],
    warning: [
      "#FFF5CC", // 0 (lighter)
      "#FFF5CC", // 1
      "#FFD666", // 2 (light)
      "#FFD666", // 3
      "#FFAB00", // 4
      "#FFAB00", // 5 (main)
      "#B76E00", // 6
      "#B76E00", // 7 (dark)
      "#7A4100", // 8
      "#7A4100", // 9 (darker)
    ],
    error: [
      "#FFE9D5", // 0 (lighter)
      "#FFE9D5", // 1
      "#FFAC82", // 2 (light)
      "#FFAC82", // 3
      "#FF5630", // 4
      "#FF5630", // 5 (main)
      "#B71D18", // 6
      "#B71D18", // 7 (dark)
      "#7A0916", // 8
      "#7A0916", // 9 (darker)
    ],
    grey: [
      '#FCFDFD', // 0
      '#F9FAFB', // 1
      '#F4F6F8', // 2
      '#DFE3E8', // 3
      '#C4CDD5', // 4
      '#919EAB', // 5 text disabled
      '#637381', // 6 text secondary
      '#454F5B', // 7 text primary
      '#1C252E', // 8
      '#141A21', // 9 
    ],
  },
});

export default theme;