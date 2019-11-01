export interface Theme {
  colors: Colors;
  card: CardConfig;
}

interface Colors {
  text: string;
  background: string;
  disabled: string;
  terinary: string;
}

interface CardConfig {
  text: string;
  background: string;
}

export const DefaultTheme: Theme = {
  colors: {
    text: "#fff",
    background: "#004175",
    disabled: "#dedede",
    terinary: "#dddd"
  },
  card: {
    text: "#000",
    background: "#fff"
  }
};

export const DarkTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#000"
  },
  card: {
    text: "#fff",
    background: "#414141"
  }
};

export const CustomTheme: Theme = {
  ...DefaultTheme,
  colors: {
    text: "#fff",
    background: "#774F9E",
    disabled: "#dedede",
    terinary: "#dddd"
  }
};

export default Theme;
