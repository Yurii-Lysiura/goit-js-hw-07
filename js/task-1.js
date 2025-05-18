const itemEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${itemEl.length}`);

function category() {
    for (let item of itemEl) {
        const titleEl = item.querySelector("h2");
        const elementsEl = item.querySelectorAll("li");
        console.log(`Category: ${titleEl.textContent}`);
        console.log(`Elements: ${elementsEl.length}`);
    };
}

category();