1

document.addEventListener("DOMContentLoaded", function() {
    const images = Array.from(document.getElementsByClassName("image"));
    const speed = 3
  
    images.forEach(function(image) {
      const initialX = Math.random() * (window.innerWidth - image.width);
      const initialY = Math.random() * (window.innerHeight - image.height);
      let dx = (Math.random() - 0.5) * 5;
      let dy = (Math.random() - 0.5) * 5;
  
      image.style.left = initialX + "px";
      image.style.top = initialY + "px";
  
      setInterval(function() {
          const images = Array.from(document.getElementsByClassName("image"));
  
        const currentX = parseFloat(image.style.left);
        const currentY = parseFloat(image.style.top);
  
        if (currentX <= 0 || currentX >= window.innerWidth - image.width) {
          dx = -dx;
        }
  
        if (currentY <= 0 || currentY >= window.innerHeight - image.height) {
          dy = -dy;
        }
  
        image.style.left = currentX + dx * speed / 5 + "px";
        image.style.top = currentY + dy * speed / 5 + "px";
      }, 10);
    });
  
  });
  