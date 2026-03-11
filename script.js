// Pi digits
const piDigits = "31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679";

const container = document.getElementById('corgiContainer');
const digits = [];
const numDigits = 50;

// Path for digits to follow (around corgi body)
const pathPoints = [];
for (let i = 0; i <= 360; i += 2) {
    const angle = (i * Math.PI) / 180;
    const x = 300 + Math.cos(angle) * 200 + Math.sin(angle * 3) * 30;
    const y = 220 + Math.sin(angle) * 120;
    pathPoints.push({x, y});
}

// Create digit elements
for (let i = 0; i < numDigits; i++) {
    const digit = document.createElement('div');
    digit.className = 'pi-digit';
    digit.textContent = piDigits[i % piDigits.length];
    digit.style.animationDelay = `${i * 0.1}s`;
    container.appendChild(digit);
    digits.push({
        element: digit,
        position: i * (pathPoints.length / numDigits),
        speed: 0.5 + Math.random() * 0.5
    });
}

// Animate digits
function animate() {
    digits.forEach((digit, index) => {
        const pathIndex = Math.floor(digit.position) % pathPoints.length;
        const point = pathPoints[pathIndex];
        
        digit.element.style.left = `${point.x}px`;
        digit.element.style.top = `${point.y}px`;
        digit.element.style.transform = `rotate(${index * 7.2}deg)`;
        
        digit.position += digit.speed;
        if (digit.position >= pathPoints.length) {
            digit.position = 0;
        }
    });
    
    requestAnimationFrame(animate);
}

animate();

// Create floating clouds
function createCloud() {
    const cloud = document.createElement('div');
    cloud.className = 'cloud';
    cloud.style.width = `${100 + Math.random() * 100}px`;
    cloud.style.height = `${40 + Math.random() * 30}px`;
    cloud.style.top = `${50 + Math.random() * 150}px`;
    cloud.style.left = '-200px';
    cloud.style.animationDuration = `${15 + Math.random() * 10}s`;
    document.body.appendChild(cloud);
    
    setTimeout(() => cloud.remove(), 25000);
}

setInterval(createCloud, 3000);

// Animate pi number display
let piIndex = 0;
const piDisplay = document.getElementById('piDisplay');
setInterval(() => {
    piIndex = (piIndex + 1) % (piDigits.length - 20);
    piDisplay.textContent = '3.' + piDigits.substring(1, piIndex + 25);
}, 500);
