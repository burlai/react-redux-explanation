export const ToggleThemeActionType = {
  TOGGLE_THEME: "TOGGLE_THEME",
} as const;

export const themeReducer = (
  state = { theme: "light" },
  action: { type: keyof typeof ToggleThemeActionType }
) => {
  if (action.type === "TOGGLE_THEME") {
    return { theme: state.theme === "light" ? "dark" : "light" };
  }

  return state;
};
