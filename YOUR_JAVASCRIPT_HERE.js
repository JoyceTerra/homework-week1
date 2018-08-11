//Hero Object
var hero = {
    name: ' Joy',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: 'sword ',
        damage: 2
    }
}

//Game logic functions

//Resting

TODO://Comment for Rien:
//I was stuck in this one for very long. I tried adding onClick as an attribute on the front page with no success.
//It works, but I know it can be better.
function rest(obj){
    // const inn = this;
    var buttonRest = document.getElementById('inn');

    buttonRest.onclick = function(){
        hero.health = 10;
    }
    obj.health = 10
    return obj;
}

//Picking up items

TODO://Comment for Rien:
//This function should add a new weapon object to the inventory with two properties of type and damage.
//I understand what I have to do but I don't know how to implement.


function pickUpItem(obj1, obj2){
    var buttonPickUp = document.getElementById('dagger');
// console.log(buttonPickUp) -- gives me the image 
    //buttonPickUp.innerHTML = obj.inventory.push({type: dagger, damage: 2})

    obj1.inventory.push(obj2);
}

// var weapon = 0;
// function whatever(){
//     buttonPickUp +=1;
//     document.getElementById("buttonPickUp").innerHTML = buttonPickUp;    

// }
// obj1.inventory.push(obj2);


//ex: 
// a = new Array();
// b = new Object();
// a[0] = b;



TODO://Comment for Rien:
//I tried this one a lot as well, but I've got to a certain point that I don't know what I'm doing anymore.
//I understand that when the button is clicked, the hero should get the first picked up item, but, 
//one more time, I don't know hot to implement.
//I made 15 from 18

function equipWeapon(obj){
    // obj.weapon = obj.inventory.type;

}



