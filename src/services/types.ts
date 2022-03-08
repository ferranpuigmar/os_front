export enum ImageFormats {
  THUMBNAIL = "thumbnail",
  LARGE = "large",
  MEDIUM = "medium",
  SMALL = "small",
}

export type FormatTypes = Record<ImageFormats, Format>;

export type Format = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: null;
  width: number;
  height: number;
  size: number;
  url: string;
};

export type Media = {
  data: {
    attributes: {
      alternativeText: string;
      caption: string;
      createdAt: string;
      ext: string;
      formats: FormatTypes | null;
      hash: string;
      height: number;
      mime: string;
      name: string;
      previewUrl: null;
      provider: string;
      provider_metadata: null;
      size: number;
      updatedAt: string;
      url: string;
      width: number;
    };
  };
};
