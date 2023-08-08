import { Ref } from "vue";

// interfaces
interface showAlertI {
  title?: string;
  message: string;
  type?: string; // success, info, warn, error
  duration?: number; // Delay in milliseconds to close the message automatically
}

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

export const showAlert = (config: showAlertI) => {
  const nuxtApp = useNuxtApp();
  const toast = nuxtApp.$toast;
  config.type = "error";
  config.duration = 3500;

  toast.add({
    severity: config.type,
    summary: config.title,
    detail: config.message,
    life: config.duration,
  });
};
