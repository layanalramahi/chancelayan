const resultsEl = document.querySelector('#results');
const buttonEl = document.querySelector('#trigger');

const generateArrayAndRandomize = () => {
    const someArray = [1, 2, 3, 4, 5];
    someArray.sort(() => Math.random() - 0.5);
    return someArray;
};

const renderResultsToDom = (results, el) => {
    el.innerHTML = results.join(' ');
};

buttonEl.addEventListener('click', () => renderResultsToDom(generateArrayAndRandomize(), resultsEl));