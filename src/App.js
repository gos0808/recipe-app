import './App.css';
import { useEffect, useState } from 'react';
import video from './food.mp4';
import MyRecipes from './MyRecipes';

function App() {

  const id = 'ff32d4fa';
  const key = '7bb55818982c6350afde958ab7c77a18';

  const [recipeSearch, setRecipeSearch] = useState('');
  const [myRecipe, setMyRecipe] = useState([]);
  const [wordSubmitSet, setWordSubmit] = useState('');


  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitSet}&app_id=${id}&app_key=${key}`);

      const data = await response.json();
      setMyRecipe(data.hits);
    };
    getRecipe();
  }, [wordSubmitSet]);

  const myRecipeSearch = (e) => {
    setRecipeSearch(e.target.value);
  };

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmit(recipeSearch);
  };

  return (
    <div className="App">

      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <h1>Find a Recipe</h1>
      </div>

      <form className='container search' onSubmit={finalSearch}>
        <input className='search-input'
          placeholder='Search for ingredients'
          onChange={myRecipeSearch}
          value={recipeSearch}
        />

        <div className='container'>
          <button className='search-button' onClick={finalSearch}>
            <img src="https://img.icons8.com/fluency/48/000000/fry.png" alt="icon" />
          </button>
        </div>
      </form>

      {myRecipe.map((element, index) => (
        < MyRecipes
          key={index}
          label={element.recipe.label}
          image={element.recipe.image}
          calories={element.recipe.calories}
          ingredients={element.recipe.ingredientLines}
          cuisineType={element.recipe.cuisineType}
        />
      ))}

    </div >
  );
}

export default App;
