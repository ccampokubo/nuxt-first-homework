import { Ref } from "vue";

export const useLoading = (value: Ref<boolean>) =>
  useState<boolean>("loading", () => {
    return value;
  });

export const searchItemJson = (path: string, obj: any) => {
  const keys = path.split(".");
  let result = obj;

  for (const key of keys) {
    const matches = key.match(/(\w+)(\[(\d+)\])?/);

    if (matches) {
      const property = matches[1];
      const index = matches[3];
      result = Object.keys(result || {}).length > 0 ? result : {};
      if (
        typeof result !== "undefined" &&
        Object.prototype.hasOwnProperty.call(result, property)
      ) {
        result = result[property];

        if (index !== undefined) {
          result = result[index];
        }
      } else {
        return undefined || null || "";
      }
    } else {
      return undefined || null || "";
    }
  }

  return result;
};
