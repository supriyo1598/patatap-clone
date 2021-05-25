var keyData  = {
    a: {
      color: 'rgb(0,0,180)',
      sound: new Howl({
        src: ['sounds_bubbles.mp3']
      })
    },
    b: {
      color: 'rgb(175,13,102)',
      sound: new Howl({
        src: ['sounds_clay.mp3']
      })
    },
    c: {
      color: 'rgb(146,248,70)',
      sound: new Howl({
        src: ['sounds_confetti.mp3']
      })
    },
    d: {
      color: 'rgb(255,200,47)',
      sound: new Howl({
        src: ['sounds_corona.mp3']
      })
    },
    e: {
      color: 'rgb(255,118,0)',
      sound: new Howl({
        src: ['sounds_dotted-spiral.mp3']
      })
    },
    f: {
      color: 'rgb(185,185,185)',
      sound: new Howl({
        src: ['sounds_flash-1.mp3']
      })
    },
    g: {
      color: 'rgb(235,235,222)',
      sound: new Howl({
        src: ['sounds_flash-2.mp3']
      })
    },
    h: {
      color: 'rgb(100,100,100)',
      sound: new Howl({
        src: ['sounds_flash-3.mp3']
      })
    },
    i: {
      color: 'rgb(255,255,0)',
      sound: new Howl({
        src: ['sounds_glimmer.mp3']
      })
    },
    j: {
      color: 'rgb(55,19,112)',
      sound: new Howl({
        src: ['sounds_moon.mp3']
      })
    },
    k: {
      color: 'rgb(255,255,150)',
      sound: new Howl({
        src: ['sounds_pinwheel.mp3']
      })
    },
    l: {
      color: 'rgb(202,62,94)',
      sound: new Howl({
        src: ['sounds_piston-1.mp3']
      })
    },
    m: {
      color: 'rgb(205,145,63)',
      sound: new Howl({
        src: ['sounds_piston-2.mp3']
      })
    },
    n: {
      color: 'rgb(12,75,100)',
      sound: new Howl({
        src: ['sounds_piston-3.mp3']
      })
    },
    o: {
      color: 'rgb(255,0,0)',
      sound: new Howl({
        src: ['sounds_prism-1.mp3']
      })
    },
    p: {
      color: 'rgb(175,155,50)',
      sound: new Howl({
        src: ['sounds_prism-2.mp3']
      })
    },
    q: {
      color: 'rgb(10,235,130)',
      sound: new Howl({
        src: ['sounds_prism-3.mp3']
      })
    },
    r: {
      color: 'rgb(37,70,25)',
      sound: new Howl({
        src: ['sounds_splits.mp3']
      })
    },
    s: {
      color: 'rgb(121,33,135)',
      sound: new Howl({
        src: ['sounds_squiggle.mp3']
      })
    },
    t: {
      color: 'rgb(83,140,208)',
      sound: new Howl({
        src: ['sounds_strike.mp3']
      })
    },
    u: {
      color: 'rgb(0,154,37)',
      sound: new Howl({
        src: ['sounds_suspension.mp3']
      })
    },
    v: {
      color: 'rgb(178,220,205)',
      sound: new Howl({
        src: ['sounds_timer.mp3']
      })
    },
    w: {
      color: 'rgb(255,152,213)',
      sound: new Howl({
        src: ['sounds_ufo.mp3']
      })
    },
    x: {
      color: 'rgb(0,0,74)',
      sound: new Howl({
        src: ['sounds_veil.mp3']
      })
    },
    y: {
      color: 'rgb(175,200,74)',
      sound: new Howl({
        src: ['sounds_wipe.mp3']
      })
    },
    z: {
      color: 'rgb(63,25,1)',
      sound: new Howl({
        src: ['sounds_zig-zag.mp3']
      })
    },

}


var shape=[];
var canvas=document.querySelector('canvas');
function circleShape(key,point){
    var newCircle=new Path.Circle(point,500);
    newCircle.fillColor=keyData[key].color;
    keyData[key].sound.play();
    shape.push(newCircle);
}
function triangleShape(key,point){
    var triangle=new Path.RegularPolygon(point,3,300);
    triangle.fillColor=keyData[key].color;
    keyData[key].sound.play();
    shape.push(triangle);
}
function decagonShape(key,point){
    var decagon=new Path.RegularPolygon(point,10,400);
    decagon.fillColor=keyData[key].color;
    keyData[key].sound.play();
    shape.push(decagon);
}
function starShape(key,point){
    var points=12;
    var radius1=250;
    var radius2=400;
    var star=new Path.Star(point,points,radius1,radius2);
    star.fillColor=keyData[key].color;
    keyData[key].sound.play();
    shape.push(star);
}

function onKeyDown(event){
    var key=event.key;
    document.querySelector(".welcome").style.display="none";

    
        var maxpoint=new Point(view.size.width,view.size.height)
        var randompoint=Point.random();
        var point=maxpoint*randompoint;

        if(key === "a"|| key === "b" || key ==="c" || key === "d" || key === "e"){
            triangleShape(key, point);
          }else if(key === "f"|| key === "g" || key ==="h" || key === "i" || key === "j"){
            circleShape(key, point);
          }else if(key === "k"|| key === "l" || key ==="m" || key === "n" || key === "o"){
            starShape(key, point);
          }else if(key === "p"|| key === "q" || key ==="r" || key === "s" || key === "t"){
            decagonShape(key, point);
          }else if(key === "u"|| key === "v" || key ==="w" || key === "x" || key === "y" || key === "z"){
            starShape(key, point);
          }
}

function onFrame(event){
    for(var i=0;i<shape.length;i++)
    {
        shape[i].fillColor.hue+=1;
        shape[i].scale(0.9);
        if(shape[i].area<1){
            shape[i].remove();
            shape.splice(i,1);
            i--;
        }
    }
}