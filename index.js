// Remember to import the data and Dog class!
import { Dog } from './Dog.js'
import { dogs } from './data.js'
let currentIndex = 0
let currentDog = new Dog(dogs[currentIndex])

document.getElementById('like-btn').addEventListener('click',like)
document.getElementById('nope-btn').addEventListener('click',nope)

render()

function render(){
    document.getElementById('feed').innerHTML = currentDog.getFeed()
}

function nope(){
    if(currentIndex < dogs.length-1){
    dogs[currentIndex].hasBeenSwiped = true
    document.getElementById('nope').style.display = 'block'
    setTimeout(newDog, 750)
    }
    else{
        document.getElementById('nope').style.display = 'block'
        setTimeout(noDogs,750)
    }
}

function like(){
    if(currentIndex < dogs.length-1){
    dogs[currentIndex].hasBeenSwiped = true
    dogs[currentIndex].hasBeenLiked = true
    document.getElementById('liked').style.display = 'block'
    setTimeout(newDog, 750)
    }
    else{
        document.getElementById('liked').style.display = 'block'
        setTimeout(noDogs,750)
    }
}

function newDog(){
    currentIndex++
    currentDog = new Dog(dogs[currentIndex])
    render()
}

function noDogs(){
    document.getElementById('like-btn').style.display= 'none'
    document.getElementById('nope-btn').style.display= 'none'
    document.getElementById('nope').style.display = 'block'
        document.getElementById('feed').innerHTML = 
        `
        <div class="no-dogs">
        <h2>Sorry!</h2>
        <h4>No more dogs in your area :(</h4>
        </div>
        `
}