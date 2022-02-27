import { Media } from "./types";
import { axiosClient } from "../config/axiosClient";

type Logo = {
  id: number;
  image: Media;
};

type GetBasicLayoutServiceResponse = {
  data: {
    id: number;
    attributes: {
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      Logo: Logo;
    };
  };
};

const getBasicLayoutService =
  async (): Promise<GetBasicLayoutServiceResponse> => {
    return await axiosClient().get("/base-layout");
  };

export default getBasicLayoutService;
