const fetchMeal = async (id) => {
  try {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await res.json();
    if (data.meals) {
      return data.meals;
    } else {
      return []; // Return an empty array if no meals found
    }
  } catch (error) {
    console.error("Error fetching meals:", error);
  }
};

export async function generateMetadata({ params }) {
  // read route params
  const { id } = await params;

  // optionally access and extend (rather than replace) parent metadata
  const meal = await fetchMeal(id);

  return {
    title: meal[0].strMeal,
    description: meal[0].strInstructions,
  };
}

export default async function SingleMilePage({ params }) {
  // Extract the search query from searchParams
  const { id } = await params;
  const meal = await fetchMeal(id);

  return (
    <div className="w-4/6 mx-auto my-10 p-5">
      <div className=" p-5 border border-gray-600 rounded-lg my-4">
        <img src={meal[0].strMealThumb} alt={meal.strMeal} className="meal-image h-32 w-32 rounded-xl" />
        <h2 className="text-lg">Name: {meal[0].strMeal}</h2>
        <p className="text-lg">Category: {meal[0].strCategory}</p>
        <p className="text-lg">Tags: {meal[0].strTags}</p>
        <p className="text-lg">Area: {meal[0].strArea}</p>
        <p className="text-sm font-bold">Des:<span className="text-sm font-sans"> {meal[0].strInstructions}</span></p>
      </div>
    </div>
  );
}
