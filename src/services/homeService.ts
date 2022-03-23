import { Media } from "./types";
import { axiosClient } from "config/axiosClient";
import { Nulable } from "src/utils/types";

export type Speciality = {
  id: number;
  title: string;
  image: Media;
};

enum ContactModuleTypes {
  LOCATION = "location",
  WHATSAPP = "whatsapp",
  FACEBOOK = "facebook",
  INSTAGRAM = "instagram",
}

export type ContactModule = {
  id: number;
  title: Nulable<string>;
  description: string;
  type: ContactModuleTypes;
  link?: string;
  linkText?: string;
  icon: Media;
};

type ContactSection = ContactModule[];

export type ContactData = {
  id: number;
  title: string;
  contactModule: ContactSection;
  map: Map;
};

export type Map = {
  id: number;
  longitude: number;
  latitude: number;
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
      contactSection: ContactData;
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
