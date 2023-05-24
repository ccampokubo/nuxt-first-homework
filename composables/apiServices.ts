import type { UseFetchOptions } from "nuxt/app";

interface setting {
  method?: string;
  typeHeader?: string;
  url: string;
  data?: object;
  api?: string;
  contentType?: number;
}

interface responseApi {
  code: number;
  message: string;
  data?: object;
  status: boolean;
}

export const apiServices = (setting: setting) => {
  try {
    const config = useRuntimeConfig();

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

    console.log(setting.url, options);

    return useFetch(setting.url, options);
  } catch (error) {}
};

export const getHeaders = async (type: any) => {
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
        accessToken || (await getAccessToken()),
    };
  }

  return headers;
};

export const getAccessToken = async () => {
  const config = useRuntimeConfig();
  let accessToken = useCookie("accessToken").value;

  try {
    if (!accessToken) {
      const shortName = config.public.SHORT_NAME;

      const result = (await apiServices({
        method: "GET",
        url: `${shortName}/generate-access-token`,
      })) as any;

      const { data } = result;

      console.log(data._value);

      if (data._value.code === 100) {
        accessToken = data._value.data.accessToken;
      }
    }
  } catch (error) {
    console.log(error);
  }

  return accessToken;
};
