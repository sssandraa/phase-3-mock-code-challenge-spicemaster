// write your code here
urlMain = 'http://localhost:3000/spiceblends'
urlIng = 'http://localhost:3000/ingredients'

let mainDiv = document.querySelector("#spice-blend-detail")
let mainImg = mainDiv.querySelector(".detail-image")
let mainTitle = mainDiv.querySelector(".title")
let ingredientsList = mainDiv.querySelector(".ingredients-list")



// console.log(ingredientsList)
id = 1

let spiceBlend = function (){
    fetch(`${urlMain}/${id}`)
    .then(response => response.json())
    .then(spiceObject => { 
        let spiceIng = spiceObject.ingredients 
        mainImg.src = spiceObject.image 
        mainTitle.textContent = spiceObject.title
        let li = document.createElement('li')
        li.textContent = spiceIng.forEach(ing => ing.name)  
        ingredientsList.append(li)
    })    
}

spiceBlend()




// fetch(`${urlIng}`)
// .then(response => response.json())
// .then(ingredientObejct => { console.log(ingredientObejct)

//     // ingredientObejct.forEach((ing) =>  
//     // ingredientsList.textContent = ing.name )
// })