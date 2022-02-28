import { axiosClient } from "config/axiosClient";

export type GetLocalesServiceResponse = {
  id: number;
  name: string;
  code: string;
  createdAt: string;
  updatedAt: string;
  isDefault: boolean;
};

const getLocales = async (): Promise<GetLocalesServiceResponse[]> => {
  return await axiosClient().get("/i18n/locales");
};

export default getLocales;
