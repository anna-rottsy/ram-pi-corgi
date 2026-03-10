const pi =
"3.14159265358979323846264338327950288419716939937510"+
"58209749445923078164062862089986280348253421170679"+
"82148086513282306647093844609550582231725359408128"+
"48111745028410270193852110555964462294895493038196";

const textPath = document.getElementById("piText");

textPath.textContent = pi.repeat(20);

let offset = 0;

function animate(){

offset += 0.05;

if(offset > 100){
offset = 0;
}

textPath.setAttribute("startOffset", offset + "%");

requestAnimationFrame(animate);

}

animate();
