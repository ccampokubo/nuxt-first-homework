interface setting {
  method?: string;
  typeHeader?: string;
  url: string;
  data?: object;
  api?: string;
  contentType?: number;
}

export const apiServices = async (setting: setting) => {
  try {
    const config = useRuntimeConfig();

    const options = {
      baseURL: config.public.API_BASE_URL,
      headers: getHeaders(setting.typeHeader),
      method: setting.method,
      body: "",
    } as any;

    if (setting.method !== "GET") {
      if (setting.contentType === 0) {
        const formData = new FormData();

        Object.entries(setting.data || {}).forEach((key) => {
          formData.append(key[0], key[1]);
        });

        setting.data = formData;
        options["Content-Type"] = "multipart/form-data";
        options.body = setting.data;
      } else {
        options["Content-Type"] = "application/json";
        options.body = JSON.stringify(setting.data);
      }
    }

    console.log(setting.url, options);

    const data = await useFetch(setting.url, options);

    return data;
  } catch (error) {}
};

export const getHeaders = (type: any) => {
  const config = useRuntimeConfig();
  const accessToken = useCookie("accessToken").value;
  const authToken = useCookie("authToken").value;
  let headers = {};

  if (type === "auth") {
    headers = {
      [`X-${config.public.SHORT_NAME.toUpperCase()}-Auth-Token`]: authToken,
    };
  } else {
    headers = {
      [`X-${config.public.SHORT_NAME.toUpperCase()}-Access-Token`]: accessToken,
    };
  }

  return headers;
};

export const getAccessToken = async () => {
  const config = useRuntimeConfig();

  const shortName = config.public.SHORT_NAME;

  const result = await apiServices({
    method: "GET",
    url: `${shortName}/generate-access-token`,
  });

  console.log(result);
};
