//Terrain Rotation
AFRAME.registerComponent("collision-reader",{
    schema:{
        elementID:{type:'string',default:'#ring1'}
    },
    update: function(){
        this.isCollided(this.data.elementID)
    },
    updateTargets: function(){
        const element = document.querySelector('#fish');
        var txt = element.getAttribute('text').value
        target = parseInt(txt)
        element.setAttribute('text',{value:target-=1})
    },
    updateScore: function(){
        const element = document.querySelector('#ring');
        var txt = element.getAttribute('text').value
        target = parseInt(txt)
        element.setAttribute('text',{value:target+=50})
    },
    gameOver: function(){
        const plane = document.querySelector('#diver');
        plane.setAttribute('dynamic-body',{mass:1})
        const go = document.querySelector('#go');
        go.setAttribute('visible',true)
    },
    init: function () {
      var duration = 120;
      const timerEl = document.querySelector("#timer");
      this.startTimer(duration, timerEl);
    },
  
    startTimer: function (duration, timerEl) {
      var minutes;
      var seconds;
  
      setInterval(()=>{
        if (duration >= 0) {
            minutes = parseInt(duration / 60);
            seconds = parseInt(duration % 60);
    
            if (minutes < 10) {
              minutes = "0" + minutes;
            }
            if (seconds < 10) {
              seconds = "0" + seconds;
            }
    
            timerEl.setAttribute("text", {
              value: minutes + ":" + seconds,
            });
    
            duration -= 1;
          } else { 
              console.log('hi');
              this.gameOver();    
          }
      }, 1000);
  
      function countDown() {
        if (duration >= 0) {
          minutes = parseInt(duration / 60);
          seconds = parseInt(duration % 60);
  
          if (minutes < 10) {
            minutes = "0" + minutes;
          }
          if (seconds < 10) {
            seconds = "0" + seconds;
          }
  
          timerEl.setAttribute("text", {
            value: minutes + ":" + seconds,
          });
  
          duration -= 1;
        } else { 
            console.log('hi');
            this.gameOver();    
        }
      }
    },
    isCollided: function(id){
        const element = document.querySelector(id)
        element.addEventListener('collide',()=>{
            if (id.includes('#ring')) {
                console.log(id)
            }
            else if (id.includes('#fish')) {
                console.log(id)
            }
        })
    }
})