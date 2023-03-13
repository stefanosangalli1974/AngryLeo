var canvasElem = document.getElementById("game");
var world = boxbox.createWorld(canvasElem,{gravity : {x:0, y:10},scale:30,camera:{x:20,y:20}});

// EXTEND
tmpObject = new Object(world);
tmpObject.saluta = function() {
    cont = 0;
    console.log('Ciao'+cont);
    return null;
};
tmpObject.incrementa = function () {
    return cont;
};

world.saluta();

var x,y;


function GetPos(e){                                
    x = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
    y = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
}

function dragPlayer(e) {
    var evt = e ? e:window.event;
    player.x = evt.clientX;
    player.y = evt.clientY;
//    console.log(evt);
}

function dropPlayer() {
        
}

// Create player
world.createEntity(player, {
    x: 2,
    fixedRotation: false
});


// Create enemy
world.createEntity(enemy, {
  x: 19
});
world.createEntity(ostacolo, {
    x: 20.5,
    y: 18,
    width: .5,
    height: 4
});
world.createEntity(block, {
    x: 20.5,
    y: 14,
    width: .5,
    height: 4
});
world.createEntity(enemy, {
  x:22
});
world.createEntity(ostacolo, {
    x: 23.5,
    y: 18,
    width: .5,
    height: 4
});
world.createEntity(block, {
    x: 23.5,
    y: 14,
    width: .5,
    height: 4
});
world.createEntity(enemy, {
  x: 25,
  //spriteSheet: true,
  borderColor: "red"
});
 
// Create floor
world.createEntity({
    name: "ground",
    shape: "square",
    type: "static",
    color: "gray",
    width: 60,
    height: 1,
    y: 20.5
});

world.createEntity(block, {
    name: "null",
    x: -0.5,
    y: 0,
    width: 1,
    height: 40,
    type: "static",
    color: "gray",
    onImpact: function(entity, force) {}
});
 
world.createEntity(block, {
  x: 27,
  y:0,
  width:.5,
  height:50,
  type:"static",
  color:"gray"
});

world.createEntity(block, {
  x: 0,
  y: 0,
  width:60,
  height: .1,
  type:"static",
  color:"gray"
});

/*
world.createEntity({
    x:20,
    y:15,
    shape:"polygon",
    type:"static"
});
*/   

// Pali di legno 
world.createEntity(block, {
    x: 14,
    y: 18.5
});
 

world.createEntity(block, {
    x: 15,
    y: 18.5
});

world.createEntity(ostacolo, {
    x: 17.25,
    y: 15,
    width: .5,
    height: 10
});



world.createEntity(ostacolo, {
    x: 15,
    y: 10.5,
    width: 4,
    height: .5
});
world.createEntity(ostacolo, {
    x: 15,
    y: 15.5,
    width: 4,
    height: .5
});

// Altro nemico….
world.createEntity(enemy, {
    x: 15.0,
    y: 14.5
});


// ---
world.createEntity(block, {
    x: 13.5,
    y: 13.5
});



world.createEntity(block, {
    x: 16.5,
    y: 13.5
});

world.createEntity(block, {
    x: 15,
    y: 11.5,
    width: 4,
    height: 0.5
});

function genera_ufo(world) {
    creareUfo =  (Math.random());
    if (creareUfo <= 0.25) {
        randomY = (Math.round()*5);
        randomImpulse = -((Math.random()*10)+15);
        randomDegrees = (Math.random()*30)+60;
        world.createEntity( {
                image : "images/ufo.png",
                radius : 0.5,
                shape : "square",
                imageStretchToFit: true,
                density: 1,
                friction:1,
                restitution: 0.2,
                bullet:false,
                spriteSheet:false,
                x: 25,
                y:0,
                init: function(e) {
                    this.applyImpulse(randomImpulse, randomDegrees)    
                },
                onImpact: function(entity, force) {
                  if (entity.name() === "player") {
                    window.document.location.reload();
                    //window.alert('Game Over!');
                  } if (entity.name() === "block") {
                    //this.destroy();
                  } else {
        
                  }
                  //
                }
            });   
            //world.unbindOnRender();   
    } else {
        return;
    }
     
}

window.setInterval("genera_ufo(world)",1000);
