window.addEventListener("load",()=>{let e=document.documentElement,i=document.createElement("canvas");if(i.id="sakura",document.body.appendChild(i),"dark"===e.getAttribute("data-theme"))return void(i.style.display="none");let a={colors:["#fde2e2","#ffb6b9","#ffc9c9","#f6c6ea","#f5b0cb"],numPetals:50,petalSize:15,petalSpeed:1},t=i.getContext("2d"),s=[],o=0,h=0;new MutationObserver(t=>{t.forEach(t=>{"data-theme"===t.attributeName&&(t=e.getAttribute("data-theme"),i.style.display="dark"===t?"none":"block")})}).observe(e,{attributes:!0});var n=()=>{o=window.innerWidth,h=window.innerHeight,i.width=o,i.height=h,s=[],(()=>{for(let t=0;t<a.numPetals;t++)s.push(new r)})()};class r{constructor(){this.x=Math.random()*o,this.y=Math.random()*-h,this.size=Math.random()*a.petalSize+5,this.speed=Math.random()*a.petalSpeed+.5,this.rotation=360*Math.random(),this.rotationSpeed=2*Math.random()-1,this.color=a.colors[Math.floor(Math.random()*a.colors.length)],this.opacity=.8*Math.random()+.2,this.swing=0,this.swingSpeed=.03*Math.random()+.01}update(){this.y+=this.speed,this.x+=.8*Math.sin(this.swing),this.swing+=this.swingSpeed,this.rotation+=this.rotationSpeed,this.y>h&&(this.y=-100*Math.random(),this.x=Math.random()*o)}draw(){t.save(),t.translate(this.x,this.y),t.rotate(this.rotation*Math.PI/180),t.globalAlpha=this.opacity,t.fillStyle=this.color,t.beginPath(),t.moveTo(0,0),t.bezierCurveTo(this.size/2,-this.size/2,this.size,0,this.size/2,this.size/2),t.bezierCurveTo(0,this.size,-this.size/2,this.size/2,0,0),t.fill(),t.restore()}}let d=()=>{t.clearRect(0,0,o,h),s.forEach(t=>{t.update(),t.draw()}),requestAnimationFrame(d)};n(),d(),window.addEventListener("resize",n)});