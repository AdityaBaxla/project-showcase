const getCroppedImageUrl = (url: string) => {
  const index = url.indexOf("media/") + "media/".length;
  const modifiedUrl = url.slice(0, index) + "crop/600/400/" + url.slice(index);
  console.log(modifiedUrl);
  return modifiedUrl;
};

export default getCroppedImageUrl;
