"use strict"


let dogs=[]


function showDogs(){

    for (let i=0;i<dogs.length;i++){
    
        let card = document.createElement("div") //Creates div
        card.classList.add("card")
        document.getElementById("cardholder").appendChild(card)
        document.body.appendChild(card)

        let dogName = document.createElement("h1") //Creates dogName in h1
        card.appendChild(dogName)
        dogName.style.backgroundColor = "yellow"
        
        document.body.style.backgroundColor = "yellow" //Changes background colour
        card.style.backgroundColor = "cyan" //Changes colour of the card
        let dogBreed = document.createElement("h2")
        card.appendChild(dogBreed)
    
        let dogPicture = document.createElement("img")
        dogPicture.classList.add("dogpicture")
        card.appendChild(dogPicture)
        dogPicture.src = dogs[i].picture
        dogPicture.style.width = 500 + "px"
        dogPicture.style.height = "auto"
    
        let dogAge = document.createElement("p")
        card.appendChild(dogAge)
        dogAge.style.fontWeight = "bold"
    
        card.style.padding = 300 + "px"
        card.style.margin = 400 + "px"
        card.style.borderRadius = 100 + "px"
    
        let button = document.createElement("button")
        button.classList.add ("button")
        card.appendChild(button)
    
        card.style.fontFamily = "Helvetica"
        dogName.innerHTML = dogs[i].name
        dogBreed.innerHTML = dogs[i].Breed
        dogPicture.innerHTML = dogs[i].picture
        dogAge.innerHTML = dogs[i].age

        button.innerHTML = "Adopt Now"
    }
}

class Dog {
    constructor (name, Breed, picture, age){ //Makes an instance of a class
        this.name = name
        this.Breed = Breed
        this.picture = picture
        this.age = age
    }
}

function setupDogs(){
    dogs.push(new Dog("Fluffy", "Poodle", "Images/fluffy.png", "7 months"))
    dogs.push(new Dog("Otto", "Chihuahua", "Images/chihuahua.jpg", "2 years old"))
    dogs.push (new Dog("Alfie", "French Bulldog", "Images/bulldog.png", "6 months"))
    dogs.push (new Dog("Ruby", "Pomeranian", "Images/pom.jpg", "3 months"))
    dogs.push (new Dog("Sparkie", "Golden Retriever", "Images/golden-retriever.jpg", "1 year old"))
    dogs.push (new Dog("Koko", "Jack Russell", "Images/jack-russell.jpg", "3 months"))
}

setupDogs()
showDogs()