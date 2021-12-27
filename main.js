canvas=document.getElementById("CanvasOfcircle");
ctx=canvas.getContext("2d");

ctx.beginPath();// take your pen
ctx.strokeStyle= "orange";// Choose the pen color
ctx.lineWidth=5;// choose your pen width
//arc(x,y,r,startangle,endangle) - creates an arc/curve. To create a circle with arc(): Set start angle to 0 and end angle to 2*Math.PI. The x and y parameters define the x- and y-coordinates of the center of the circle. The r parameter defines the radius of the circle.
ctx.rect(150,143,430,200);
ctx.stroke();

ctx.beginPath();// take your pen
ctx.strokeStyle= "blue";// Choose the pen color
ctx.lineWidth=5;// choose your pen width
//arc(x,y,r,startangle,endangle) - creates an arc/curve. To create a circle with arc(): Set start angle to 0 and end angle to 2*Math.PI. The x and y parameters define the x- and y-coordinates of the center of the circle. The r parameter defines the radius of the circle.
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();// take your pen
ctx.strokeStyle= "yellow";// Choose the pen color
ctx.lineWidth=5;// choose your pen width
//arc(x,y,r,startangle,endangle) - creates an arc/curve. To create a circle with arc(): Set start angle to 0 and end angle to 2*Math.PI. The x and y parameters define the x- and y-coordinates of the center of the circle. The r parameter defines the radius of the circle.
ctx.arc(250,250,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();// take your pen
ctx.strokeStyle= "black";// Choose the pen color
ctx.lineWidth=5;// choose your pen width
//arc(x,y,r,startangle,endangle) - creates an arc/curve. To create a circle with arc(): Set start angle to 0 and end angle to 2*Math.PI. The x and y parameters define the x- and y-coordinates of the center of the circle. The r parameter defines the radius of the circle.
ctx.arc(300,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();// take your pen
ctx.strokeStyle= "green";// Choose the pen color
ctx.lineWidth=5;// choose your pen width
//arc(x,y,r,startangle,endangle) - creates an arc/curve. To create a circle with arc(): Set start angle to 0 and end angle to 2*Math.PI. The x and y parameters define the x- and y-coordinates of the center of the circle. The r parameter defines the radius of the circle.
ctx.arc(350,250,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();// take your pen
ctx.strokeStyle= "red";// Choose the pen color
ctx.lineWidth=5;// choose your pen width
//arc(x,y,r,startangle,endangle) - creates an arc/curve. To create a circle with arc(): Set start angle to 0 and end angle to 2*Math.PI. The x and y parameters define the x- and y-coordinates of the center of the circle. The r parameter defines the radius of the circle.
ctx.arc(400,200,40,0,2*Math.PI);
ctx.stroke();
