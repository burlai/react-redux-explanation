export const CountActionType = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  INCREASE_BY: "INCREASE_BY",
  DECREASE_BY: "DECREASE_BY",
} as const;

export const countReducer = (
  state = { count: 0 },
  action: { type: keyof typeof CountActionType; value: number }
) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "INCREASE_BY":
      return { count: state.count + action.value };
    case "DECREASE_BY":
      return { count: state.count - action.value };
    default:
      return state;
  }
};
