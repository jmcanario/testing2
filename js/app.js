var imgs = [
    './../images/bg-1.jpg',
    './../images/bg-2.jpg',
    './../images/bg-3.jpg',
    './../images/bg-4.jpg',
    './../images/bg-5.jpg'
],
n = imgs.length,
current = n-1,
closedWidth = Math.floor(window.innerWidth/10);

// looping attributes functionality and responsive stilying
for (var i=0; i<n; i++){
    var bgImg = document.createElement('div');
    bg.appendChild(bgImg);

    gsap.set(bgImg, {
       attr:{id:'bgImg'+i, class:'bgImg'},
       width: '100%',
       height: '100%',
       backgroundImage: 'url('+imgs[i]+')',
       backgroundSize: 'cover',
       backgroundPosition: 'center'
    })

   // Accordion CSS Separation   
   var b = document.createElement('div');
   fg.appendChild(b);
 
   gsap.fromTo(b, {
       attr:{id:'b'+i, class:'box'},
       innerHTML:'<p><sub>ARTICLE.</sub> '+(i+1)+'</p>',
       width:'100%',
       height:'100%',
       borderLeft:(i>0)?'solid 1px #eee':'',
       backgroundColor:'rgba(250,250,250,0)',
       left:i*closedWidth,
       transformOrigin:'100% 100%',
       x:'100%'
   },{
       duration:i*0.15,
       x:0,
       ease:'expo.inOut'
   })  
}