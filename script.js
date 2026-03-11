// Pi digits
const piDigits = "31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989";

const container = document.getElementById('corgiContainer');
const digits = [];
const numDigits = 60;

// Create circular path around corgi
const pathPoints = [];
const centerX = 200;
const centerY = 200;
const radius = 140;

for (let i = 0; i < 360; i += 3) {
    const angle = (i * Math.PI) / 180;
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;
    pathPoints.push({ x, y });
}

// Create digit elements
for (let i = 0; i < numDigits; i++) {
    const digit = document.createElement('div');
    digit.className = 'pi-digit';
    digit.textContent = piDigits[i % piDigits.length];
    container.appendChild(digit);
    
    digits.push({
        element: digit,
        position: i * (pathPoints.length / numDigits),
        speed: 0.8 + Math.random() * 0.4
    });
}

// Animate digits in a circle
function animate() {
    digits.forEach((digit, index) => {
        const pathIndex = Math.floor(digit.position) % pathPoints.length;
        const point = pathPoints[pathIndex];
        
        digit.element.style.left = `${point.x - 8}px`;
        digit.element.style.top = `${point.y - 8}px`;
        
        // Rotate digits around the circle
        const rotation = (digit.position / pathPoints.length) * 360;
        digit.element.style.transform = `rotate(${rotation}deg)`;
        
        digit.position += digit.speed;
        if (digit.position >= pathPoints.length) {
            digit.position = 0;
        }
    });
    
    requestAnimationFrame(animate);
}

animate();

// Animate pi number display - show more digits over time
let piIndex = 0;
const piDisplay = document.getElementById('piDisplay');
const fullPiString = "3." + piDigits.substring(1);

function updatePiDisplay() {
    if (piIndex < fullPiString.length) {
        piDisplay.textContent = fullPiString.substring(0, piIndex + 1);
        piIndex++;
        setTimeout(updatePiDisplay, 100);
    }
}

// Start pi display animation after a short delay
setTimeout(updatePiDisplay, 1000);

// Add some sparkle effect occasionally
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'pi-digit';
    sparkle.textContent = Math.floor(Math.random() * 10);
    sparkle.style.color = '#fff';
    sparkle.style.fontSize = '12px';
    sparkle.style.left = `${Math.random() * 400}px`;
    sparkle.style.top = `${Math.random() * 400}px`;
    sparkle.style.opacity = '0.6';
    container.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 2000);
}

setInterval(createSparkle, 2000);
