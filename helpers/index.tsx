interface Metadata {
  [key: string]: string;
}

export const parseCss = (text: string, metadata: Metadata) => {
  return text.replace(/\${(.*?)}/g, (_, key) => metadata[key]);
};
