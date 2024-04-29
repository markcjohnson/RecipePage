import RCImage from "./recipeCardImage.tsx";
import recipeImage from "../../assets/images/image-omelette.jpeg";
import RCTitle from "./recipeCardTitle.tsx";
import PrepCard from "./recipePrepCard.tsx";
import RCIngredients from "./recipeCardIngredients.tsx";
import RCSpacer from "./recipeCardSpacer.tsx";
import RCInstructions from "./recipeCardInstructions.tsx";
import RCNutrients from "./recipeCardNutrients.tsx";

function RecipeCard() {
  return (
    <>
      <div className={"recipeCard"}>
        <RCImage url={recipeImage} altText={"an omelete"} />
        <RCTitle
          title={"Simple Omelette Recipe"}
          description={
            "An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats."
          }
        />
        <PrepCard total={10} prep={5} cooking={5} />
        <RCIngredients
          li1={"2-3 large eggs"}
          li2={"Salt, to taste"}
          li3={"Pepper, to taste"}
          li4={"1 tablespoon of butter or oil"}
          li5={
            "Optional fillings: cheese, diced vegetables, cooked meats, herbs"
          }
        />
        <RCSpacer />
        <RCInstructions />
        <RCSpacer />
        <RCNutrients />
      </div>
    </>
  );
}

export default RecipeCard;
