import { useParams } from 'react-router-dom';
import recipeData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  
  const recipeId = parseInt(id);
const recipe = recipeData.find((r) => r.id === recipeId);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg mb-4" />
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <p className="text-gray-700 mb-6">{recipe.summary}</p>
        
        <h2 className="text-2xl font-bold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside mb-6">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">{ingredient}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mb-2">Instructions</h2>
        <div className="space-y-2">
          {recipe.instructions.map((step, index) => (
            <p key={index} className="text-gray-700">{index + 1}. {step}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
