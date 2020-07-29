/* Here, you'll create the object that will take the 'database' and 
create a character sheet in HTML for each hero. 

We could use functions for this, but developers typically give 
objects properties and methods as a way to organize tasks and 
responsibilities */

const heroCreator = {};
// This "heroCreator" object will ultimately be responsible for 
// creating all of the HTML character sheets from the heroes array

// I'll add the first method, because I'm so nice
/**
 * This method adds an array of hero objects to the given HTML Element.
 * 
 * 1) This method should take 2 arguments; An HTML Div Element from the DOM, 
 * and an array of hero objects this method loops through each 
 * element of the array. 
 * 
 * 2) For each hero object, call the 
 * "createCharSheet()" method providing the hero object as an 
 * argument. 
 * 
 * 3)Take the result of that method call and append it to the 
 * HTML Div Element.
 * 
 * @param {HTMLDivElement} gridDiv div being populated
 * @param {Array} hero_array array of hero objects
 */
heroCreator.populateGrid = function(gridDiv, hero_array){
    for(const hero of hero_array){
        const charSheet = this.createCharSheet(hero); 
        // "this" is a keyword used to refer to the object this 
        // method belongs to, which is "heroCreator"
        // using "this" is preferred, but you could explicitly
        // write "heroCreator.createCharSheet(hero)" too
        gridDiv.appendChild(charSheet);
    }
}

// Notice the call to the "createCharSheet()" method...which doesn't
// exist yet! Now it's your turn; follow the documentation on how 
// each method should work.

// NOTE: I HIGHLY recommend testing your code in the browser
// The "sombra" hero object already exists, so you can use it for
// testing!

/**
 * 1) This method should take 1 parameter -> a hero object.
 * 
 * 2) Create a reference to the div container in your index.html with the class name "main_content" using the DOM
 * 
 * 3) * Create a new div element in the dom using the function createElement() and save it in a variable called "hero_container"
 *    * Set the class name of hero_container to "hero_container"
 * 
 * 4) * Create a new img element in the dom using the function createElement() and save it in a variable
 *    * Set the source of the image to the heroObj's "img" property
 *    * Append the new image element to the hero_container
 * 
 * 5) * Create a new div element in the dom using the function createElement() and save it in a variable called "hero_text"
 *    * Set the class name of hero_text to "hero_text"
 * 
 * 6) * Create a new h1 element in the dom using the function createElement() and save it in a variable
 *    * Set the inner text of the h1 to the heroObj's "name" property
 *    * Append the new element to the hero_text
 * 
 * 7) * Repeat step 6 but now make a p tag instead of an h1. 
 *    * Set the inner text of the p tag to the heroObj's "saying" property
 * 
 * 8) * Repeat step 6 but now make a p tag instead of an h1. 
 *    * Set the inner text of the p tag to the function call of this object's method getAbilityString(). 
 *    * getAbilityString() needs the heroObj's "abilities" property as the argument within the function call.
 * 
 * 9) * Append hero_text to the hero_container
 *    * Append hero_container to the main content div container
 * 
 * 10) return hero_container
 * 
 * @param {Object} heroObj hero object
 * 
 */
heroCreator.createCharSheet = function(){
    
}

/**
 * 1) This method should take 1 parameter, an array of ability objects.
 * 
 * 2) I'll leave this one more open-ended since there are many
 * potential approaches you can take. 
 * 
 * 3) In the end you should return a string with ONLY the names of each
 * ability separated by a comma+space. 
 * ex: "ability1, ability2, ability3"
 * 
 * 4) Make sure to return the resulting String!
 * 
 * @param {Array} abilitiesArr array of ability objects
 * @return {String}
 */
heroCreator.getAbilityString = function(){

}


/* BONUS: Create more elements in your createCharSheet function to display more hero properties!*/