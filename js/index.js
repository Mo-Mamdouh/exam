let data = []; 

function random() {
  const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      displayMeals(data); 
    })
    .catch(error => console.error('Error fetching meal:', error));
}

function displayMeals(mealData) {
  data = mealData.meals; 
  const mealContainer = document.getElementById('meals');
  mealContainer.innerHTML = '';
  if (data) {
    data.slice(0, 20).forEach(meal => {
      mealContainer.innerHTML += `
        <div class="col position-relative overflow-hidden d-flex" id="${meal.idMeal}" role="button" onclick="details(event)"> 
        <img src="${meal.strMealThumb}" class="w-100 rounded overflow-hidden" alt="">
       <h2 class="overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.7); color: white; padding: 10px;">${meal.strMeal}</h2>
        </div>
      `;
    });
  } else {
    console.log('No meals found for this letter.');
  }
}

function details(event) {
    const mealId = event.currentTarget.id;
    const mealContainer = document.querySelector('#home');
    mealContainer.classList.add('hidden')
    const detailsContainer = document.querySelector('#mealDetails');
    detailsContainer.classList.remove('hidden');
    const mealData = data.find(meal => meal.idMeal == mealId);
    const Details = document.querySelector('#mealDetails');
  Details.innerHTML = `
   <div class="container">
                <div class="d-flex justify-content-between">
                    <button class="btn-close btn-close-white py-4" id="btnClose"></button>
                </div>
      <div class="row g-4" id="detailsContent">
        <div class="col-md-4">
          <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}" class="w-100 rounded">
        </div>
        <div class="col-md-8">
        <h2 class="mb-4">Instructions</h2>
          <p>${mealData.strInstructions}</p>
            <h2 class="mb-4">Area : ${mealData.strArea}</h2>
            <h2 class="mb-4">Category : ${mealData.strCategory}</h2
            <h2 class="mb4"> Recipes:</h2>
            <ul class="">
            <li class=" badge alert alert-info"> ${mealData.strMeasure1} ${mealData.strIngredient1} </li>
            <li class="badge alert alert-info"> ${mealData.strMeasure2} ${mealData.strIngredient2}</li>
            <li class="badge alert alert-info"> ${mealData.strMeasure3} ${mealData.strIngredient3} </li>
            <li class="badge alert alert-info"> ${mealData.strMeasure4} ${mealData.strIngredient4} </li>
            <li class="badge alert alert-info"> ${mealData.strMeasure5} ${mealData.strIngredient5}</li>
            <li class="badge alert alert-info"> ${mealData.strMeasure6} ${mealData.strIngredient6}</li>
            </ul>
            <h2 class="mb-4">Tags : </h2>
            <div class="badge alert alert-danger"> ${mealData.strTags}</div>
            <div>
            <button class="btn btn-danger"><a href="${mealData.strYoutube}">Youtube</a></button>
            </div>

            
        </div>
      </div>
    </div>
  `;
  const btnClose = document.querySelector('#btnClose');
  btnClose.addEventListener('click', () => {
  Details.classList.add('hidden');
  mealContainer.classList.remove('hidden');
});    
  }
random();
const button = document.getElementById('toggle-button');
let isClose = false;

button.addEventListener('click', () => {
    isClose = !isClose;
    button.innerHTML = isClose ? '<i class="fas fa-times text-black"></i>' : '<i class="fas fa-bars"></i>';
    sidebar.classList.toggle('d-none');
});

