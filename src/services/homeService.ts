import { Media } from "./types";
import { axiosClient } from "config/axiosClient";

export type Speciality = {
  id: number;
  title: string;
  image: Media;
};

type GetHomeServiceResponse = {
  data: {
    id: number;
    attributes: {
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      locale: string;
      title: string;
      specialities: {
        backgroundColor: string;
        backgroundImage: Media;
        specialities: Speciality[];
      };
    };
  };
};

const getHomeService = async (
  langCode?: string
): Promise<GetHomeServiceResponse> => {
  const lang = langCode ?? "ca";
  return await axiosClient().get(`/home?locale=${lang}&populate=*`);
};

export default getHomeService;
