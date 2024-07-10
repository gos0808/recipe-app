function MyRecipes({ label, image, calories, ingredients, cuisineType }) {

    return (
        <div className='recipe-container'>
            <div className='container'>
                <h2>{label}</h2>
            </div>

            <div className='info-cont container'>
                <img src={image} alt={label} />
                <div>
                    <p className='info calories'>{calories.toFixed()} calories</p>
                    <p className='info cuisine'>{cuisineType} cuisine</p>
                </div>
            </div>

            <div className='container'>
                <ul className="ingridients">
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>
                            <img src='https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png' alt='icon' />
                            {ingredient}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default MyRecipes;