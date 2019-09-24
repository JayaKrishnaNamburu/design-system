export const BasicTheme = {
  colors: {
    primaryText: "#fff",
    primaryBackground: "#004175"
  }
};

export const LighTheme = {
  ...BasicTheme,
  colors: {
    ...BasicTheme.colors,
    primaryBackground: "darkorange"
  }
};

export const DarkTheme = {
  ...BasicTheme,
  colors: {
    ...BasicTheme.colors,
    primaryBackground: "#000"
  }
};
