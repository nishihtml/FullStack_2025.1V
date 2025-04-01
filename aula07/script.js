let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d')
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.strokeStyle = 'black';
ctx.font = "90px Arial"
ctx.textAlign = "center";
ctx.fillText("brat",200,200);
ctx.strokeText("brat",200,200)
ctx.closePath();

let canvas1 = document.getElementById('canvas1');
let ctx1 = canvas1.getContext('2d')
ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.strokeStyle = 'green';
ctx1.arc(200,200,50,0, 1*Math.PI);
ctx1.stroke();
ctx1.closePath();
ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.strokeStyle = 'green';
ctx1.moveTo(0,200);
ctx1.lineTo(400,200);
ctx1.stroke()
ctx1.closePath();
ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = 'red';
ctx1.strokeStyle = 'red';
ctx1.fillRect(0,0,50,50);
ctx1.strokeRect(0,0,50,50);
ctx1.closePath();
ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = 'blue';
ctx1.strokeStyle = 'blue';
ctx1.fillRect(400,0,50,50);
ctx1.strokeRect(400,400,350,350);
ctx1.closePath();