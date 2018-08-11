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
function pickUpItem(obj1, obj2){
    var buttonPickUp = document.getElementById('dagger');
    // console.log(buttonPickUp)
    // buttonPickUp.onclick = function(){
    //     obj1.inventory.push(dagger, 2);
    }
    obj1.inventory.push(obj2);
}

function equipWeapon(){}



