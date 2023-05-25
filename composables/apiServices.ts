import type { UseFetchOptions } from "nuxt/app";

interface setting {
  method?: string;
  typeHeader?: string;
  url: string;
  data?: object;
  api?: string;
  contentType?: number;
}

export interface responseApi {
  code: number;
  message: string;
  data?: object;
  status: boolean;
}

export const apiServices = async (setting: setting) => {
  const nuxtApp = useNuxtApp();

  try {
    const config = useRuntimeConfig();
    // const toast = useToast();

    const options: UseFetchOptions<unknown> = {
      baseURL: config.public.API_BASE_URL,
      headers: getHeaders(setting.typeHeader),
      method: setting.method,
    } as any;

    if (setting.method !== "GET") {
      if (setting.contentType === 0) {
        const formData = new FormData();

        Object.entries(setting.data || {}).forEach((key) => {
          formData.append(key[0], key[1]);
        });

        setting.data = formData;
        options.headers = {
          ...options.headers,
          "Content-Type": "multipart/form-data",
        };
        options.body = setting.data;
      } else {
        options.headers = {
          ...options.headers,
          "Content-Type": "application/json",
        };
        options.body = JSON.stringify(setting.data);
      }
    }

    const { data, error } = await useFetch(setting.url, options);
    if (error.value) {
      const errorData = error.value;

      if (errorData.statusCode === 404) {
        if (errorData.data.message) {
          return {
            success: false,
            status: false,
            code: 102,
            message: errorData.data.message,
            error: errorData,
          };
        } else {
          // ? No encontró el servicio
          return {
            success: false,
            status: false,
            code: 101,
            message: nuxtApp.$i18n.t("store.apiServices.notFound"),
            error: errorData,
          };
        }
      } else if (errorData.data.code === 120) {
        return {
          success: false,
          status: false,
          code: 120,
          message: errorData.data.message,
          error: errorData,
        };
      } else if (errorData.data.message) {
        return {
          success: false,
          status: false,
          code: 102,
          message: errorData.data.message,
          error: errorData,
        };
      } else {
        return {
          success: false,
          status: false,
          code: 101,
          message: nuxtApp.$i18n.t("store.apiServices.generalError"),
          error: errorData,
        };
      }
    }

    return data.value;
  } catch (erdataror) {
    console.log(erdataror);
  }
};

export const getHeaders = (type: any) => {
  const config = useRuntimeConfig();
  const accessToken = useCookie("accessToken").value;
  const authToken = useCookie("authToken").value;
  let headers = {};

  if (type === "auth") {
    headers = {
      [`X-${config.public.SHORT_NAME.toUpperCase()}-Auth-Token`]:
        authToken || "",
    };
  } else {
    headers = {
      [`X-${config.public.SHORT_NAME.toUpperCase()}-Access-Token`]:
        accessToken || "",
    };
  }

  return headers;
};

export const generateAccessToken = async () => {
  const config = useRuntimeConfig();
  let accessToken = useCookie<string>("accessToken");

  try {
    if (!accessToken.value) {
      const shortName = config.public.SHORT_NAME;

      const result = (await apiServices({
        method: "GET",
        url: `${shortName}/generate-access-token`,
      })) as any;

      if (result.code === 100) {
        accessToken.value = result.data.accessToken;
      }
    }
  } catch (error) {
    console.log(error);
  }

  return accessToken;
};

export const setLoginUser = (data: any) => {
  const authToken = useCookie<string>("authToken");
  const userData = useCookie<object>("userData");

  userData.value = data.user;
  authToken.value = data.authToken;
};
