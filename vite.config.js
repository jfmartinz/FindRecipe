import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				recipe: resolve(__dirname, 'recipe.html'),
				displayRecipe: resolve(__dirname, 'displayRecipe.html'),
				'Beef-stroganoff': resolve(
					__dirname,
					'src/featured-page/Beef-stroganoff.html'
				),
				MaPoTofu: resolve(__dirname, 'src/featured-page/MaPoTofu.html'),
				'rock-cakes': resolve(__dirname, 'src/featured-page/rock-cakes.html'),
				'shrimp-chow-fun': resolve(
					__dirname,
					'src/featured-page/shrimp-chow-fun.html'
				),
				'Steak-and-Kidney-Pie': resolve(
					__dirname,
					'src/featured-page/Steak-and-Kidney-Pie.html'
				),
				'Blini-Pancakes': resolve(
					__dirname,
					'src/lastest-page/Blini-Pancakes.html'
				),
				CabbageSoup: resolve(__dirname, 'src/lastest-page/CabbageSoup.html'),
				FishSoup: resolve(__dirname, 'src/lastest-page/FishSoup.html'),
				LambPilaf: resolve(__dirname, 'src/lastest-page/LambPilaf.html'),
				'Strawberries-Romanoff': resolve(
					__dirname,
					'src/lastest-page/Strawberries-Romanoff.html'
				),
			},
		},
	},
});

// .root
//    public/
// 		 ...images,svgs, etc here
//    /src/
// 			components/
// 				categories.css
// 				blog.css
// 				featured-recipes.css
// 				footer.css
// 				header.css
// 				lastest-meal.css
// 				main.css
// 				newsletter.css
// 			blog/
// 			blog.html
// 			blog.css
// 				blog-page/
// 						How-to-Make-Pesto-Using-Discarded-Greens.html
// 						How-to-MakOvemight-Oats-with-Maple-and-Caramel.html
// 						How-to-Prepare-Roasted-Okra.html
// 						How-to-Preserve-Fresh-Herbs.html
// 						blog-page.css
// 			featured-page/
// 					Beef-stroganoff.html
// 					MaPoTofu.html
// 					rock-cakes.html
// 					shrimp-chow-fun.html
// 					Steak-and-Kidney-Pie.html
// 					featured.css
// 			lastest-page/
// 					Blini-Pancakes.html
// 					CabbageSoup.html
// 					FishSoup.html
// 					LambPilaf.html
// 					Strawberries-Romanoff.html
// 					lastest.css
// 			js/
// 				dropdown.js
// 				main.js
// 				mealDBAPl.js
// 				navbar.js
// 				swiper.js
// 		displayRecipe.css
// 		recipeDetails.css
// 		main.js
// displayRecipe.html
// recipe.html
// index.html
// style.css
