let selected = document.getElementById('mercury');
let selectedInfo = document.getElementById('mercuryinfo');

const hideElement = (allChildren) => {
    allChildren.forEach((element, index) => {
        if (index > 0) {
            element.classList.add('hidden');
        }
    })
};

const onClick = (planet, info) => {
    selected.classList.add('hidden');
    selectedInfo.classList.add('hidden');

    element = document.getElementById(planet);
    elementInfo = document.getElementById(info);

    element.classList.remove('hidden');
    elementInfo.classList.remove('hidden');

    selected = element;
    selectedInfo = elementInfo;
};

window.onload = () => {
    let parent = document.querySelector('#bigimages');
    let allChildren = parent.querySelectorAll(":scope > img");
    hideElement(allChildren);
    parent = document.querySelector('#planetinfo')
    allChildren = parent.querySelectorAll(":scope > div");
    hideElement(allChildren);
};