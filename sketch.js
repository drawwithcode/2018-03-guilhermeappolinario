
function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  frameRate(2);
  background(color('#8f0126'));
  noStroke();


function draw() {
    }
    //colors
    var colorList = ['#fa3d28', '#dd251e','#c6433e','#8f0126'];


//forma cor cambiante 1 - inferior
  for(var x = windowWidth/32; x < windowWidth; x += windowWidth/16) {
    for(var y= windowWidth/32; y < windowHeight; y+=windowWidth/16)
    {
      if(random()<1)
      {
         var index = floor(random() * colorList.length);
         var colorHex = colorList[index];
         fill(color(colorHex));
      }
      else {

noFill();
    }
  //quad(x1,                y1,               x2,               y2,               x3,               y3,               x4,                 y4;
    // fill('#000000')
    quad(x-windowWidth/32,  y+windowWidth/96, x+windowWidth/96, y+windowWidth/96 , x+windowWidth/32, y+windowWidth/32, x-windowWidth/32,   y+windowWidth/32);
    }
  }
  //forma cor cambiante 2 - direita
    for(var x = windowWidth/32; x < windowWidth; x += windowWidth/16) {
      for(var y= windowWidth/32; y < windowHeight; y+=windowWidth/16)
      {
        if(random()<1)
        {
           var index = floor(random() * colorList.length);
           var colorHex = colorList[index];
           fill(color(colorHex));
        }
        else {

  noFill();
      }
    //quad(x1,                y1,               x2,               y2,               x3,               y3,               x4,                 y4;
      // fill(0,0,0,50)
      quad(x+windowWidth/96,  y-windowWidth/32, x+windowWidth/96, y+windowWidth/96 , x+windowWidth/32, y+windowWidth/32, x+windowWidth/32,   y-windowWidth/32);
      }
    }
//forma cor cambiante 3 PQ - topo
      for(var x = windowWidth/32; x < windowWidth; x += windowWidth/16) {
        for(var y= windowWidth/32; y < windowHeight; y+=windowWidth/16)
        {
          if(random()<0.6)
          {
             var index = floor(random() * colorList.length);
             var colorHex = colorList[index];
             fill(color(colorHex));
          }
          else {

    noFill();
        }
      //quad(x1,                y1,               x2,               y2,               x3,               y3,               x4,                 y4;
        // fill(0,0,0,50)
        quad(x-windowWidth/32,  y-windowWidth/32, x-windowWidth/96, y-windowWidth/96 , x+windowWidth/96, y-windowWidth/96, x+windowWidth/96,   y-windowWidth/32);
        }
      }
//forma cor cambiante 4 PQ - esquerda
            for(var x = windowWidth/32; x < windowWidth; x += windowWidth/16) {
              for(var y= windowWidth/32; y < windowHeight; y+=windowWidth/16)
              {
                if(random()<0.6)
                {
                   var index = floor(random() * colorList.length);
                   var colorHex = colorList[index];
                   fill(color(colorHex));
                }
                else {

          noFill();
              }
            //quad(x1,                y1,               x2,               y2,               x3,               y3,               x4,                 y4;
              // fill(0,0,0,50)
              quad(x-windowWidth/32,  y-windowWidth/32, x-windowWidth/96, y-windowWidth/96 , x-windowWidth/96, y+windowWidth/96, x-windowWidth/32,   y+windowWidth/96);
              }
            }

  //second layer
  for(var x = windowWidth/32; x < windowWidth; x += windowWidth/16) {
    for(var y= windowWidth/32; y < windowHeight; y+=windowWidth/16)
    {


  fill('#ebe966')
         rect(x-windowWidth/96,y-windowWidth/96,windowWidth/48,windowWidth/48)

   }
  }


  redraw();
}
