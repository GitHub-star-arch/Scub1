// Registering component in Target.js

AFRAME.registerComponent("target-ring", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `ring${i}`;
  
        //position variables     
        var posX =(Math.random() * 300 + (-100));      
        var posY = (Math.random() * 2 + (-1));
        var posZ = (Math.random() * 300 + (-100));
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createRings(id, position);
      }
    } ,
  
    createRings: function(id, position) { 
      
      var terrainEl = document.querySelector("#terrain");
  
      var ringEl = document.createElement("a-entity");
  
      ringEl.setAttribute("id",id);
      ringEl.setAttribute("position",position);
      
      ringEl.setAttribute("material","color","#ff9100");
      
      ringEl.setAttribute("gltf-model",'../assets/Coin/scene.gltf')
      birdEl.setAttribute("scale",{x:500, y:500, z:500});
      ringEl.setAttribute("static-body",{shape:'sphere',sphereRadius:2})
      ringEl.setAttribute('collision-reader',{elementID:`#${id}`})
  
      terrainEl.appendChild(ringEl);
    }
  });