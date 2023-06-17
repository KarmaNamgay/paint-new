var last_x_position,last_y_position;
var new_x_position,new_y_position;
var mouseEvent="empty";
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var radius=30;
var color="red";
var line_width=5;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    line_width=document.getElementById("width").value;
    radius.getElementById("radius").value;
    mouseEvent="mouseDown";
}

    canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUP";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    new_x_position=e.clientX-canvas.offsetLeft;
    new_y_position=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mouseDown")
        console.log("new position of x and y coordinates= ");
        console.log("x =" + new_x_position + "y =" + new_y_position);
        ctx.beginPath();
        ctx.strokeStyle =color;
        ctx.lineWidth=line_width;
        ctx.arc(new_x_position,new_y_position,radius,0,2*Math.PI);
        ctx.stroke();
}
        last_x_position=new_x_position;
        last_y_position=new_y_position;