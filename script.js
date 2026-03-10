const pi =
"3.14159265358979323846264338327950288419716939937510"+
"58209749445923078164062862089986280348253421170679"+
"82148086513282306647093844609550582231725359408128";

const text = document.getElementById("piText");

text.textContent = pi.repeat(20);

let offset = 0;

setInterval(()=>{

offset += 0.08;

text.setAttribute("startOffset", offset + "%");

},40);
