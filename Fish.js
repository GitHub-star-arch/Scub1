// Registering component in Target.js

AFRAME.registerComponent("avoid-fish", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `fish${i}`;
  
        //position variables     
        var posX =(Math.random() * 300 + (-100));      
        var posY = (Math.random() * 2 + (-1));
        var posZ = (Math.random() * 300 + (-100));
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createBirds(id, position);
      }
    } ,
  
    createBirds: function(id, position) { 
      
      var terrainEl = document.querySelector("#terrain");
  
      var birdEl = document.createElement("a-entity");
  
      birdEl.setAttribute("id",id);
      birdEl.setAttribute("position",position);

      birdEl.setAttribute("gltf-model",'../assets/Fish/scene.gltf')
      birdEl.setAttribute("scale",{x:500, y:500, z:500});
      birdEl.setAttribute("static-body",{shape:'sphere',sphereRadius:2})
      birdEl.setAttribute('collision-reader',{elementID:`#${id}`})
  
      terrainEl.appendChild(birdEl);
    }
  });