function RCTitle({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <h1>{title}</h1>
      <p className={"bodyCopy"}>{description}</p>
    </>
  );
}

export default RCTitle;
