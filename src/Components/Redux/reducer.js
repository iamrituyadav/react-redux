import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "./action";
const init_state = [
  {
    id: "100",
    title: "Learn Redux",
    desc: "test",
    status: false,
  },
];

export const todoReducer = (state = init_state, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return [...state, payload];

    case UPDATE_TODO:
      const updatedData = state.map((item) => {
        if (item.id !== payload.id) {
          return payload;
        }
        return item;
      });

      return updatedData;

    case DELETE_TODO:
      const deletedData = state.filter((item) => item.id !== payload.id);

      return deletedData;

    default:
      return state;
  }
};
