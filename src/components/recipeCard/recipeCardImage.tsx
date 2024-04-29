function RCImage({ url, altText }: { url: string; altText: string }) {
  return <img src={url} alt={altText} className="recipeImage" />;
}

export default RCImage;
