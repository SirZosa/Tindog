import {dogs} from "./data.js"

export class Dog {
    constructor(data){
        Object.assign(this, data)
    }

    getFeed(){
        const {name, avatar, age, bio} = this
        return `
        <img  id="liked" src="images/badge-like.png" alt="liked">
        <img id="nope" src="images/badge-nope.png" alt="nope">
        <img src="${avatar}" alt="${name} the dog">
        <div class="info">
        <h2>${name}, ${age}</h2>
        <h3>${bio}</h3>
            `
    }
}