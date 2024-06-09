document.addEventListener('DOMContentLoaded', function () {
	function displayRecipeInformation(recipeId) {
		fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
			.then((response) => response.json())
			.then((data) => {
				if (data.meals) {
					const recipe = data.meals[0];

					const recipeDetailsContainer = document.createElement('div');
					recipeDetailsContainer.className = 'recipe-details-container';

					recipeDetailsContainer.innerHTML = `
		<div class="recipe-bg">
			<img
				src="${recipe.strMealThumb}"
				alt="${recipe.strMeal}" />
			<div class="overlay"></div>
		</div>

		<section class="recipe">
			<div class="recipe-details">
				<div class="thumbmail-box">
					<img
						src="${recipe.strMealThumb}"
						alt="${recipe.strMeal}" />
				</div>
				<div class="recipe-content">
					<div>
						<h1>${recipe.strMeal}</h1>
						<h3>
							<span>Tags: ${recipe.strTags ? recipe.strTags : 'No Tags'}</span>
						</h3>

						<h3>
							<span>Country:</span>
							${recipe.strArea}
						</h3>
					</div>

					<div>
						<h3>
							<span>Category:</span>
							${recipe.strCategory}
						</h3>
					</div>
				</div>

				<div class="recipe-instruction">
					<div>
						<h2>Instructions</h2>
						<p>
						${recipe.strInstructions}
						</p>
					</div>
					<div>
						<h2>Ingredients</h2>
						<ul>
						${generateIngredientList(recipe)}
						</ul>
					</div>
				</div>
			</div>
					<a
			href="/displayRecipe.html"
			class="return-link"
			>Go back</a
		>
					`;
					document.body.appendChild(recipeDetailsContainer);
				}
			});
	}

	// Function to generate ingredient list HTML in recipe.html
	function generateIngredientList(recipe) {
		let ingredientList = '';
		for (let i = 1; i <= 20; i++) {
			const ingredient = recipe[`strIngredient${i}`];
			const measure = recipe[`strMeasure${i}`];
			if (ingredient) {
				ingredientList += `<li>${
					measure ? measure.trim() + ' ' : ''
				}${ingredient}</li>`;
			} else {
				break; // Stop loop if no more ingredients
			}
		}
		return ingredientList;
	}

	// Function to fetch and display recipes based on search term
	function fetchAndDisplayRecipes(searchTerm) {
		const recipeContainer = document.getElementById('recipe-container');

		fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
			.then((response) => response.json())
			.then((data) => {
				recipeContainer.innerHTML = ''; // Clear previous results
				if (data.meals) {
					document.getElementById(
						'recipe-count'
					).textContent = `${data.meals.length} Recipes Found`;
					data.meals.forEach((meal) => {
						const mealDiv = document.createElement('div');
						mealDiv.className = 'meal';
						mealDiv.dataset.id = meal.idMeal;
						mealDiv.innerHTML = `
                            <img src="${meal.strMealThumb}" alt="${
							meal.strMeal
						}">
                            <div class="recipe-info">
                                <h3>${meal.strMeal}</h3>
																<span>${meal.strTags ? meal.strTags : 'No Tags'}</span><br />
																<button type="button" class="view-recipe" data-id="${
																	meal.idMeal
																}">View Recipe</button>
                            </div>
                        `;
						recipeContainer.appendChild(mealDiv);
						document
							.getElementById('noRecipe-message')
							.classList.remove('message');
					});
				} else {
					document.getElementById('recipe-count').textContent =
						'No Recipes Found';
					document.getElementById('noRecipe-message').textContent =
						'No results found';
				}
			});
	}

	// Handle when the button of the recipe is clicked.
	document.addEventListener('click', (event) => {
		if (event.target.matches('.view-recipe')) {
			const recipeId = event.target.dataset.id;
			if (recipeId) {
				window.open(`recipe.html?view-recipe=${recipeId}`, '_self');
			} else {
				console.error('No recipeId found for the clicked recipe button.');
			}
		}
	});

	// For displaying the recipe details once the recipeId was found
	const urlParam = new URLSearchParams(window.location.search);
	const recipeId = urlParam.get('view-recipe');

	if (recipeId) {
		displayRecipeInformation(recipeId);
	}
	// Check if a search term is present in the URL
	const urlParams = new URLSearchParams(window.location.search);
	const searchTerm = urlParams.get('search');
	if (searchTerm) {
		// Fetch and display recipes if search term is present
		fetchAndDisplayRecipes(searchTerm);
	}

	// display the recipes whenever the user pressed the 'enter' key
	document.getElementById('search').addEventListener('keydown', (event) => {
		if (event.key === 'Enter') {
			const userInput = document.getElementById('search').value.trim();
			if (userInput) {
				// Navigate to the search results page in the same tab
				window.location.href = `displayRecipe.html?search=${encodeURIComponent(
					userInput
				)}`;
			}
			document.getElementById('search').value = ''; // remove previous search value once submitted.
		}
	});

	// display the recipes whenever the user clicks a search button
	document.getElementById('search-btn').addEventListener('click', () => {
		const userInput = document.getElementById('search').value.trim();
		if (userInput) {
			// Navigate to the search results page in the same tab
			window.location.href = `displayRecipe.html?search=${encodeURIComponent(
				userInput
			)}`;
		}
		document.getElementById('search').value = ''; // remove previous search value once submitted.
	});

	console.log(document.querySelector('.filter-options'));
	// Get the parent element containing all filter options
	const filterOptions = document.querySelector('.filter-options');
	// Attach click event listener to the parent element
	filterOptions.addEventListener('click', (event) => {
		if (event.target.tagName === 'SPAN') {
			// Find the closest parent div with the class representing the filter type
			const filterDiv = event.target.closest('.c, .a, .i');

			if (filterDiv) {
				// Get the first character of the class name (e.g., 'category' -> 'c')
				const filterType = filterDiv.classList[0].charAt(0);
				const filterValue = event.target.textContent.trim();

				const recipeContainer = document.getElementById('recipe-container');
				// Construct the API URL based on filter type and value
				const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?${filterType}=${filterValue}`;
				// Fetch data from the API
				fetch(apiUrl)
					.then((response) => response.json())
					.then((data) => {
						recipeContainer.innerHTML = ''; // Clear previous results
						if (data.meals) {
							document.getElementById(
								'recipe-count'
							).textContent = `${data.meals.length} Recipes Found`;
							data.meals.forEach((meal) => {
								const mealDiv = document.createElement('div');
								mealDiv.className = 'meal';
								mealDiv.dataset.id = meal.idMeal;
								mealDiv.innerHTML = `
																<img  loading="lazy" src="${meal.strMealThumb}" alt="${meal.strMeal}">
																<div class="recipe-info">
																		<h3>${meal.strMeal}</h3>
																		<button type="button" class="view-recipe" data-id="${meal.idMeal}">View Recipe</button>
																</div>
														`;
								recipeContainer.appendChild(mealDiv);
								document.getElementById('noRecipe-message').textContent = '';
							});
						} else {
							document.getElementById('recipe-count').textContent =
								'No Recipes Found';
							document.getElementById('noRecipe-message').textContent =
								'No Recipes Found';
							document
								.getElementById('noRecipe-message')
								.classList.add('message');
						}
					});
			} else {
				console.error('Parent div with filter type class not found.');
			}
		}
	});
});
