export const useShowAlert = (toast: object) =>
  useState<object>("toast", () => {
    return toast || {};
  });
