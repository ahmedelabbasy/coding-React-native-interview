export interface Theme {
  background: string;
  text: string;
  cardBackground: string;
  heartColor: string;
  starColor: string;
  rateColor: string;
  shadow: string;
  popupContainer: string;
  PopupOverlay: string;
  PopupContentBackground: string;
  PopupContentShaddow: string;
  PopupCloseButtonBackground: string;
  PopupDetailText: string;
  PopupDetailLabel: string;
  placeholderText: string;
  splashBackground: string;
  splashImageBackground: string;
}

const defaultTheme = {
  popupContainer: "rgba(0, 0, 0, 0.5)",
  PopupOverlay: "transparent",
  PopupContentBackground: "#fff",
  PopupContentShaddow: "#000",
  PopupCloseButtonBackground: "rgba(0, 0, 0, 0.6)",
  PopupDetailText: "#333",
  PopupDetailLabel: "#555",
  heartColor: "#ff0000",
  starColor: "#e6b800",
  rateColor: "#4d0000",
  splashImageBackground: "#fff",
};

export const lightTheme: Theme = {
  ...defaultTheme,
  background: "#ffffff",
  text: "#333333",
  placeholderText: "#999999",
  cardBackground: "#ffe6e6",
  shadow: "rgba(0, 0, 0, 0.1)",
  splashBackground: "#ffe6e6",
};

export const darkTheme: Theme = {
  ...defaultTheme,
  background: "#330000",
  text: "#f0f0f0",
  placeholderText: "#808080",
  cardBackground: "#4d0000",
  shadow: "rgba(0, 0, 0, 0.5)",
  splashBackground: "#330000",
};
