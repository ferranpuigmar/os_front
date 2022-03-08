import { GetFormat, getFormat } from "src/utils/getFormat";
import { Format, FormatTypes } from "@services/types";
import { Speciality } from "../homeService";

export type SpecialityImage = {
  alternativeText: string;
  name: string;
  caption: string;
  formats: GetFormat | null;
  height: number;
  url: string;
  width: number;
};

export type SpecialityDto = {
  id: number;
  title: string;
  image: SpecialityImage;
};

export const specialityDto = (speciality: Speciality): SpecialityDto => {
  const { alternativeText, name, caption, formats, height, url, width } =
    speciality.image.data.attributes;
  return {
    id: speciality.id,
    title: speciality.title,
    image: {
      alternativeText,
      name,
      caption,
      formats: getFormat(speciality.image),
      height,
      url,
      width,
    },
  };
};
