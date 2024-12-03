document.addEventListener("DOMContentLoaded", () => {
    const colors = ["#ffcccb", "#ffefd5", "#ff6f61"];
    let index = 0;

    setInterval(() => {
        document.body.style.background = colors[index];
        index = (index + 1) % colors.length;
    }, 3000);
});
