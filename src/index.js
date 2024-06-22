function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let apiKey = "be427b594372a38b6f2t7o035dc1e24d";
  let context =
    "You are an expert chef who loves creating short, easy-to-make recipes. Your task is to generate a concise recipe that incorporates the ingredient provided by the user. Ensure that the recipe title does not include the words 'recipe' or 'easy'. Present the recipe in basic HTML format. Do not use ";
  let prompt = `User ingredient: ${instructions.value}. Generate a short, easy-to-follow recipe using this ingredient.`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayRecipe);
}

let recipeForm = document.querySelector("#recipe-generator-form");
recipeForm.addEventListener("submit", generateRecipe);
