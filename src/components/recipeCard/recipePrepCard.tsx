function PrepCard({
  total,
  prep,
  cooking,
}: {
  total: number;
  prep: number;
  cooking: number;
}) {
  return (
    <div className={"prepCard"}>
      <h3 className={"prepTitle"}>Preparation time</h3>
      <ul className={"prepList"}>
        <li>Total: Approximately {total} minutes</li>
        <li>Preparation: {prep} minutes</li>
        <li>Cooking: {cooking} minutes</li>
      </ul>
    </div>
  );
}

export default PrepCard;
