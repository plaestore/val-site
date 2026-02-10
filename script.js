// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn

noBtn.addEventListener("mouseover", () => {
    const btnRect = noBtn.getBoundingClientRect();

    const viewportWidth = window.visualViewport?.width || window.innerWidth;
    const viewportHeight = window.visualViewport?.height || window.innerHeight;

    const padding = 30; // increase edge safety

    const minX = padding;
    const minY = padding;

    const maxX = viewportWidth - btnRect.width - padding;
    const maxY = viewportHeight - btnRect.height - padding;

    const randomX = Math.random() * (maxX - minX) + minX;
    const randomY = Math.random() * (maxY - minY) + minY;

    noBtn.style.position = "fixed";
    noBtn.style.transition = "left 0.2s ease, top 0.2s ease";
    noBtn.style.left = `${Math.max(minX, Math.min(randomX, maxX))}px`;
    noBtn.style.top  = `${Math.max(minY, Math.min(randomY, maxY))}px`;
});


// Logic to make YES btn to grow

 let yesScale = 1;

 yesBtn.style.position = "relative"
yesBtn.style.transformOrigin = "center center";
yesBtn.style.transition = "transform 0.3s ease";

 noBtn.addEventListener("click", () => {
   yesScale += 1;

    if (yesBtn.style.position !== "fixed") {
        yesBtn.style.position = "fixed";
       yesBtn.style.top = "50%";
       yesBtn.style.left = "50%";
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    }else{
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    }
});

// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee! lots of love from me.";

    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});
