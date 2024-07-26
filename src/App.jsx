import imgOmelette from "./assets/images/image-omelette.jpeg";

export default function App() {
  return (
    <main className="container">
      <img className="img" src={imgOmelette} alt="" />
      <div>
        <h1 className="serifeTitle">Simple Omelette Recipe</h1>
        <p>
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
      </div>
      <section className="time">
        <h3 className="h3collor">Preparation time</h3>
        <ul className="colorBullets">
          <li>
            <strong>Total:</strong> Approximately 10 minutes
          </li>
          <li>
            <strong>Preparation:</strong> 5 minutes
          </li>
          <li>
            <strong>Cooking:</strong> 5 minutes
          </li>
        </ul>
      </section>

      <section>
        <h2 className="serife">Ingredients</h2>
        <ul className="colorBullets">
          <li>2-3 large eggs</li>
          <li>Salt, to taste</li>
          <li>Pepper, to taste</li>
          <li>1 tablespoon of butter or oil</li>
          <li>
            Optional fillings: cheese, diced vegetables, cooked meats, herbs
          </li>
        </ul>
      </section>

      <section>
        <h2 className="serife">Instructions</h2>
        <ol className="colorNumbers">
          <li>
            <strong>Beat the eggs:</strong> In a bowl, beat the eggs with a
            pinch of salt and pepper until they are well mixed. You can add a
            tablespoon of water or milk for a fluffier texture.
          </li>
          <li>
            <strong>Heat the pan:</strong> Place a non-stick frying pan over
            medium heat and add butter or oil.
          </li>
          <li>
            <strong>Cook the omelette:</strong> Once the butter is melted and
            bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly
            coat the surface.
          </li>
          <li>
            <strong>Add fillings (optional):</strong> When the eggs begin to set
            at the edges but are still slightly runny in the middle, sprinkle
            your chosen fillings over one half of the omelette.
          </li>
          <li>
            <strong>Fold and serve:</strong> As the omelette continues to cook,
            careflily lift one edge and fold it over the fillings. Let it cook
            for another minute, then slide it onto a plate.
          </li>
          <li>
            <strong>Enjoy:</strong> Serve hot, with additional salt and pepper
            if needed.
          </li>
        </ol>
      </section>

      <section>
        <h2 className="serife">Nutrition</h2>
        <p>
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>

        <table className="table">
          <tr>
            <td className="ingredient">Calories</td>
            <td className="tableColor"><strong>277kcal</strong></td>
          </tr>
      
          <tr>
            <td className="ingredient">Carbs</td>
            <td className="tableColor"><strong>0g</strong></td>
          </tr>
          
          <tr>
            <td className="ingredient">Protein</td>
            <td className="tableColor"><strong>20g</strong></td>
          </tr>
         
          <tr>
            <td className="ingredient">Fat</td>
            <td className="tableColor"><strong>22g</strong></td>
          </tr>
        </table>
      </section>
    </main>
  );
}
