import Link from "next/link";
import MealSearchInput from "./components/MealSearchInput";
import Image from "next/image";

export const metadata = {
  title: "All Meals",
  descriptions: "Search for your favorite meals",
};

export default async function mealsPage({ searchParams }) {
  // Extract the search query from searchParams
  const query = await searchParams
  const fetchMeals = async () => {
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`);
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
  const meals = await fetchMeals();

  return (
    <div className="w-4/6 mx-auto my-10 p-5">
      <div>
        <MealSearchInput></MealSearchInput>
      </div>
      <div>
        {meals.map((meal) => (
          <div key={meal.idMeal} className=" p-5 border border-gray-600 rounded-lg my-4">
            <Image
              width={641}
              height={641}
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="meal-image h-32 w-32 rounded-xl"
            ></Image>

            {/* Use the Geist Mono font for the meal name */}
            <h2 className="text-lg geist-mono">{meal.strMeal} (--font-geist-mono)</h2>

            <p className="text-sm">{meal.strInstructions}</p>
            <Link href={`/meals/${meal.idMeal}`} className="text-blue-500 hover:underline">
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
