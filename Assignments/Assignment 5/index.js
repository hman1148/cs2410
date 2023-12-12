// create the recepie object
let recipe = {
    title: "",
    ingredients: [],
    instructions: [],
}

const inputTitle = document.getElementById("title");
const errorTitle = document.getElementById("error-title");

inputTitle.value = recipe.title;

inputTitle.addEventListener("blur", () => {
    const error = addError(`<p class = "error-div" tabindex=0 aria-live="assertive">Plese type in title for your recipe</p>`);

    if (recipeForm.value == "") {
        errorTitle.appendChild(error);
        setTimeout(() => {
            error.remove();
        }, 3000);

    } else if (recipeForm.value != "") {
        recipe.title = inputTitle.value;
    }
});


// second form
const recipeForm = document.getElementById("recipe-form");
const recipeButton = document.getElementById("recipe-button");
const ingredientContainer = document.getElementById("item-container-recipe");

const createDivItem = (text) => {
    const div = document.createElement("div");
    div.innerHTML = text;
    return div.firstElementChild;
}

const addError = (text) => {
    const message = document.createElement("p");
    message.innerHTML = text;
    return message.firstElementChild;
}

// inputTitle.addEventListener("mouseleave", () => {
//     inputTitle.value = recipe.title;
// });

// adding an ingredient
recipeButton.addEventListener("click", () => {
    // console.log(ingredientContainer.childNodes.length)
    const error = addError(`<div class = "error-div" aria-live="assertive"><p tabindex=0>Plese type in an ingredient</p></div>`);
    
    if (recipeForm.value == "") {
        ingredientContainer.appendChild(error);
        setTimeout(() => {
            error.remove();
        }, 3000);
        
    } else if (recipeForm.value != "") {    
        const ingredient = recipeForm.value;
        recipe.ingredients.push(ingredient);

        const div = createDivItem(
            `<div class = "item" tabindex=0 aria-label=${ingredient} aria-description="Press enter to remove this ingredient">
                ${ingredient}
            </div>
            `
        );
        div.addEventListener("click", () => {
            div.remove();
            let val = recipe.ingredients.indexOf(ingredient);
            recipe.ingredients.splice(val);
        });

        div.addEventListener("keydown", () => {
            div.remove();
            let val = recipe.ingredients.indexOf(ingredient);
            recipe.ingredients.splice(val);
        });

        document.getElementById("item-container-recipe").appendChild(div);
    }
});


//adding instructions 
const instructionForm = document.getElementById("instruction-form");
const instructionButton = document.getElementById("instructions-button");
const instructionContainer = document.getElementById("instruction-container");

instructionButton.addEventListener("click", () => {
    const error = addError(`<div class = "error-div" aria-live="assertive"><p tabindex=0>Plese type in an ingredient</p></div>`);
    
    if (instructionForm.value == "") {
        instructionContainer.appendChild(error);
        setTimeout(() => {
            error.remove();
        }, 3000);

    } else if (instructionForm.value != "") {

        const instruction = instructionForm.value;
        recipe.instructions.push(instruction);

        const div = createDivItem(
            `<div class = "item" tabindex=0 aria-label=${instruction} aria-description="Press enter to remove this instruction">
            ${instruction}
            </div>
            `
        );
        div.addEventListener("click", () => {
            div.remove();
            let val = recipe.instructions.indexOf(instruction);
            recipe.instructions.splice(val);
        });

        div.addEventListener("keydown", () => {
            div.remove();
            let val = recipe.instructions.indexOf(instruction);
            recipe.instructions.splice(val);
        });
        
        document.getElementById("instruction-container").appendChild(div);
    }
});


// when user is done adding recipe information, save the card 
const save = document.getElementById("save");
const errorButton = document.getElementById("save-error");

save.addEventListener("click", () => {
    const error = addError(`<div class = "error-div" aria-live="assertive">You must fill out all the forms</div>`)
    if (recipe.title == "" || recipe.ingredients == [] || recipe.instructions == []) {
        errorButton.appendChild(error);
        setTimeout(() => {
            error.remove();
        }, 3000);
    } else if (recipe.title != "" || recipe.ingredients != [] || recipe.instructions != []) {
        writeRecipeToFile(recipe);
    }
});

// when user wants to reset the card
const reset = document.getElementById("reset");

reset.addEventListener("click", () => {
    location.reload();
});


