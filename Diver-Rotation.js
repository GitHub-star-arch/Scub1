//Terrain Rotation
AFRAME.registerComponent("terrain-rotation-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 }    
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
          if (this.data.speedOfRotation < 0.2) {
            this.data.speedOfRotation += 0.01;
          }
        }
        if (e.key === "ArrowLeft") {
          if (this.data.speedOfRotation > -0.2) {
            this.data.speedOfRotation -= 0.01;
          }
        }
      });
    },
    tick: function () {
      var mapRotation = this.el.getAttribute("rotation");
  
      mapRotation.y += this.data.speedOfRotation;
  
      this.el.setAttribute("rotation", {
        x: mapRotation.x,
        y: mapRotation.y,
        z: mapRotation.z
      });
    }
  });
  
  AFRAME.registerComponent("diver-rotation-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 },
      speedOfRotations: { type: "number", default: 0 },
      speedOfLift: { type: "number", default: 0 } 
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowUp") {
          if (this.data.speedOfLift < 5) {
            this.data.speedOfLift += 0.01;
          }
        }
        if (e.key === "ArrowDown") {
          if (this.data.speedOfLift > -5) {
            this.data.speedOfLift -= 0.01;
          }
        }
      });
    },
    tick: function () {
      var mapRotation = this.el.getAttribute("rotation");
      var mapPosition = this.el.getAttribute("position");
  
      mapRotation.x = this.data.speedOfRotation;
      mapRotation.z = this.data.speedOfRotations;
      mapPosition.y = this.data.speedOfLift;
  
      this.el.setAttribute("rotation", {
        x: mapRotation.x,
        y: mapRotation.y,
        z: mapRotation.z
      });
      this.el.setAttribute("position", {
        x: mapPosition.x,
        y: mapPosition.y,
        z: mapPosition.z
      });
    }
  });  