const searchCocktail = () => {
    const input = document.getElementById('search-input')
    const inputText = input.value

    input.value = ''
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${inputText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCocktails(data.drinks))

}
const displayCocktails = cocktails => {
    const searchResult = document.getElementById('display-search')
    searchResult.innerHTML = ''
    cocktails.forEach(cocktail => {
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `<div class="card h-100 ">
                         <img src="${cocktail.strDrinkThumb}" class="card-img-top" alt="...">
                            <div class="card-body">
                             <h5  onclick="showDetails(${cocktail.idDrink})"   class="card-title">${cocktail.strDrink}</h5>
                       
              </div>
      </div>`
        searchResult.appendChild(div)
    })
}

const showDetails = cocktailId => {
   console.log(cocktailId)
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`
    fetch(url)
        .then(res => res.json())
        .then(data => showDetailsCocktails(data.drinks[0]))

}




const showDetailsCocktails = cocktail => {
    const showdisplay = document.getElementById('display-cocktails')
    showdisplay.textContent = ''
    const div = document.createElement('div')
    div.classList.add('col')
    div.innerHTML = `<div class="card h-100 ">
                     <img  src="${cocktail.strDrinkThumb}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5  class="card-title">${cocktail.strDrink}</h5>
                    <p>${cocktail.strInstructions}</P
  
                      </div>
                      </div>`
    showdisplay.appendChild(div)

}