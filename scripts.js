// Javascript for TP9
// Also working on tinkering with functions and adding more customization to the website. WORK IN PROGRESS

//function to load a file from the URL "fromfile" into the object identified by "whereto" 
function loadFileInto(recipeID, listName, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

  //define fromFiles variables with passed recipe name and list.
  fromFile = "recipes.php?recipeID=" + recipeID + "&recipeList" + listName;
  
	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
			if ((this.readyState == 4) && (this.status == 200)) {
				console.log("AJAX response: " + this.responseText);
        
        if (this.responseText !=0) {
          responseArray = JSON.parse(this.responseText);
          
          responseHTML = "";
          for (x=0; x < responseArray.length; x++) {
              responseHTML += "<li>" + responseArray[x] + "</li>";
          }
          document.querySelector(whereTo).innerHTML = responseHTML; 
        } else {
            console.log("ERROR! NO LISTS!");
        }
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
        
        console.log("AJAX RESPONSE: " + this.responseText);
        
        if (this.responseText != 0) {
        
         responseArray = JSON.parse(this.responseText);
          
          responseHTML = "";
          for (x=0;x < responseArray.length; x++) {
            responseHTML += "<li>" + responseArray[x] + "</li>";
          }
          
        document.querySelector(whereTo).innerHTML = responseHTML;
          
        }else  {
        console.log("ERROR! - NO RECIPE OR LIST FOUND!") 
        }
        
        
			}
		
	} // end ajax.onreadystatechange function

	// initiate request and wait for response
	ajax.send();

}

// new recipe object constructor - CHANGED FOR TP9 

function Recipe(recipeTitle, recipeImageSrc, recipeContributor, RecipeID) {
  
  this.title = recipeTitle;
  this.imgSRC = recipeImageSrc;
  this.contributor = ingredientsURL;
  this.id = recipeID;
  
  this.displayRecipe = function() {
    
    layoutTitle = document.querySelectorAll("#titleBanner h1");
    layoutTitle[0].innerHTML = this.title;
    
    layoutContributor = document.querySelectorAll("#titleBanner h4");
    layoutContributor[0].innerHTML = "Contributed By" + this.contributor;
    
    document.getElementById("TitleBanner").style.backgroundImage = "url(" + this.image.Src + ")";
    
    loadFileInto(this.recipe, "ingredients", "#ingredients ul");
    loadFileInto(this.recipe, "equipment", "#equipment ul");
    loadFileInto(this.recipe, "directions" ,"#directions ol");
  }
}

FrenchToast = new Recipe ("The best French Toast!","Andrew Witsoe","FrenchToast"
);
LemonBars = new Recipe ("The best Lemon Bars IN THE WORLD!","Andrew Witsoe","FrenchToast"
);
SugarCookies = new Recipe ("The best Sugar Cookies!","Andrew Witsoe","FrenchToast"
);
window.onload = function() {

}