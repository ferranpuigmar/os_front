import { Format, Media, ImageFormats } from "./../services/types";

export type GetFormat = {
  mobile: Format;
  desktop: Format;
};

export const getFormat = (imageData: Media): GetFormat | null => {
  if (!imageData) return null;

  let mobile, desktop;

  const {
    data: {
      attributes: { formats },
    },
  } = imageData;

  if (!formats || Object.keys(formats).length < 2) return null;

  mobile = formats[ImageFormats.MEDIUM];
  desktop = formats[ImageFormats.LARGE];

  return {
    mobile,
    desktop,
  };
};
