const openEl = document.getElementById(`open`);
const closeEl = document.getElementById(`close`);
const containerEl = document.getElementById(`container`);

openEl.addEventListener(`click`, () => {
    container.classList.add(`active`);
});

closeEl.addEventListener(`click`, () => {
    container.classList.remove(`active`);
});
