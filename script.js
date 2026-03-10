const pi =
"3.14159265358979323846264338327950288419716939937510"+
"58209749445923078164062862089986280348253421170679";

const text = document.getElementById("piText");

text.textContent = pi.repeat(10);

// движение цифр по линии
let offset = 0;

setInterval(()=>{
offset += 0.1;
text.setAttribute("startOffset", offset + "%");
},40);
