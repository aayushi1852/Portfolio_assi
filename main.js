//use of the querySelectorAll();
const showModal = document.querySelectorAll(`.show-modal`);

//use of the forEach();

showModal.forEach((el) => {

    //use of the addEventListener();
    
    el.addEventListener(`click`, () => {
        const getModal = document.querySelector(`.modal`);
        const addOpen = document.createAttribute(`open`);
        getModal.setAttributeNode(addOpen);

        const projName = el.dataset.name;
        const projHead = el.dataset.head;
        const projDescription = el.dataset.description;
        const projImg = el.dataset.img;

        const addTheInfo = document.querySelector(`.addInfo`);

        addTheInfo.innerHTML = `<h1>${projName}</h1>
        <img src="${projImg}">
        <h3> ${projHead} </h3>
        <p>${projDescription}</p>`

    }) // END el. addEventlistener

}) // END forEach()