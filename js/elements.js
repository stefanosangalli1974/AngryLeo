var power = 100;

var _e;

var player = {
  name: "player",
  shape: "circle",
  radius: 1,
  image: "images/leo.png",
  imageStretchToFit: true,
  density: 5,
  x: 2,
  y: 10,
  onKeyDown: function(e) {
    console.log('e.key=' + e.key + '; ' + e);
    this.image("images/leo_accelera.png");
    if (e.key == "ArrowUp") {
        this.applyImpulse(power, 0);            
    }
    if (e.key == "ArrowDown") {
        //this.applyImpulse(-power, 0);            
    }
    if (e.key == "ArrowLeft") {
        this.applyImpulse(-power, 90);            
    }
    if (e.key == "ArrowRight") {
        this.applyImpulse(power, 90);            
    }
  },
    onKeyUp: function(e) {
        this.image( "images/leo.png")
    },
  
  friction:1,
  restitution: 0.2,
  bullet:false,
  spriteSheet:false,
  onStartContact : function(e) {},
  onTick : function(e) {}  
};

var enemy = {
  name: "enemy",
  shape: "circle",
  radius: 1,
  image: "images/ste.png",
  imageStretchToFit: true,
  density: 5,
  friction:1,
  restitution: 0.2,
  bullet:false,
  spriteSheet: false,
  onStartContact : function(e) {},
  onTick : function(e) {},
  onImpact: function(entity, force) {
    if (entity.name() === "player" || entity.name() === "block") {
        window.document.getElementById("points").value = parseInt(window.document.getElementById("points").value)+5000;
        this.destroy();
        //console.log("onImpact ",entity,force);
    }
  }
};

var ufo = {
    name : "ufo",
    image : "images/ufo.png",
    radius : 1,
    shape : "circle",
    imageStretchToFit: true,
    friction:1,
    restitution: 0.2,
    bullet:false,
    spriteSheet: false
};

// Pali di legno
var block = {
  name: "block",
  shape: "square",
  //image:"images/legno.png",
  //imageStretchToFit: true,
  color: "brown",
  width: .5,
  height: 4,
  onImpact: function(entity, force) {
    if (entity.name() === "player") {
        //console.log("color:",this.color());
        if (this.color() == "white") {

        } else {
            window.document.getElementById("points").value = parseInt(window.document.getElementById("points").value)+100;
            this.color("white");
          //this.image("images/legno_rotto.png");
        }
    }
  }
};

var ostacolo = {
    name:"ostacolo",
    shape: "square",
    color: "red",
    width: .5,
    height: .4,
    type: "static",
    onImpact: function(entity, force) {}  
};