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

function rest(obj){
    // const inn = this;
    var buttonRest = document.getElementById('inn');

    buttonRest.onclick = function(){
        hero.health = 10;
        console.log( hero.health )
    }
    obj.health = 10
    return obj;
}


function pickUpItem(){
//pickUpItem function takes a hero-like object as the first argument and an object as the second argument
// equipWeapon function takes a hero-like object as an argument
// And reassigns the `weapon` property to the first element of the inventory array
}

function equipWeapon(){}



