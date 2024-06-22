function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "Tomato Basil Pasta",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipeForm = document.querySelector("#recipe-generator-form");
recipeForm.addEventListener("submit", generateRecipe);
