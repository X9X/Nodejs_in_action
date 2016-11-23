!function() {
    var canvas = document.getElementById('test-canvas');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "rgb(200,0,0)";
    // ctx.fillRect(10, 10, 50, 150);
    //
    // ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    // ctx.fillRect(30, 30, 150, 50);
    // ctx.strokeRect(50, 50, 50, 50);
    //
    // ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    // ctx.beginPath();
    // ctx.moveTo(100, 100);
    // ctx.lineTo(150, 100);
    // ctx.lineTo(150, 200);
    // ctx.fill();

    //smile
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.stroke();
    ctx.moveTo(110, 75);
    ctx.beginPath();
    ctx.setLineDash([5,5])
    ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
    ctx.stroke();
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
    ctx.stroke();
    //line to
    // Filled triangle
    // ctx.beginPath();
    // ctx.moveTo(25, 25);
    // ctx.lineTo(105, 25);
    // ctx.lineTo(25, 105);
    // ctx.fill();

    // // Stroked triangle
    // ctx.beginPath();
    // ctx.moveTo(125, 125);
    // ctx.lineTo(125, 45);
    // ctx.lineTo(45, 125);
    // ctx.closePath();
    // ctx.stroke();

    canvas.onclick = function(e){
        $(canvas).scrollLeft()
    }
}()
