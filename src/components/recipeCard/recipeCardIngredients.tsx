function RCIngredients({
  li1,
  li2,
  li3,
  li4,
  li5,
}: {
  li1: string;
  li2: string;
  li3: string;
  li4: string;
  li5: string;
}) {
  return (
    <>
      <h2>Ingredients</h2>
      <ul className={"ingredientsList"}>
        <li>{li1}</li>
        <li>{li2}</li>
        <li>{li3}</li>
        <li>{li4}</li>
        <li>{li5}</li>
      </ul>
    </>
  );
}

export default RCIngredients;
