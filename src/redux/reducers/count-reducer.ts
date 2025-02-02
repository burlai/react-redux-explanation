export const CountActionType = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
} as const;

export const countReducer = (
  state = { count: 0 },
  action: { type: keyof typeof CountActionType }
) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
