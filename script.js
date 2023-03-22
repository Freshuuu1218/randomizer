const allSections = document.querySelectorAll('section');
const mainPageButton = document.querySelector('header nav ul li:first-child');
const contactButton = document.querySelector('header nav ul li:last-child');
const mainPage = document.querySelector('#main-page');
const startButton = document.querySelector('#start');

const chooseTypePage = document.querySelector('#type-of-randomize');
const listType = document.querySelector('#list-type');
const circleType = document.querySelector('#circle-type');
const colorType = document.querySelector('#color-type');
const dogType = document.querySelector('#dog-type');
const quoteType = document.querySelector('#quote-type');
const numberType = document.querySelector('#number-type');
const coinType = document.querySelector('#coin-type');
const diceType = document.querySelector('#dice-type');

const listRandom = document.querySelector('#standard');
// display none for all sections
function displayNone(){
    allSections.forEach(section =>{
        section.style.display = 'none';
    })
}
function preloader(where){
    let preloader = document.querySelector('.preloader-wrapper');
    let preloaderAnim = document.querySelector('.preloader');
    let resultSection = where;
    preloader.style.display = 'block';
    preloaderAnim.style.display = 'block';
    resultSection.style.display = 'none';
    setTimeout(function(){
    	preloader.style.display = 'none';
    	preloaderAnim.style.display = 'none';
        resultSection.style.display = 'block'
	}, 2000);
}
// function for List randomization section (buttons listeners)
function randomList(){
    let addButton = document.querySelector('.input-button');
    // adding elements
    addButton.addEventListener('click',()=>{
        let input = document.querySelector('#standard-input');
        let value = document.querySelector('#standard-input').value;
        let addedContainer = document.querySelector('.added');
        let added = document.createElement('span');
        added.classList.add('item');
        added.innerHTML = value;
        addedContainer.appendChild(added);
        input.value ='';
    })
    // main randomize button
    let randomizeButton = document.querySelector('#standard-button');
    randomizeButton.addEventListener('click',()=>{
        let inputSection = document.querySelector('#standard .text');
        let resultSection = document.querySelector('#standard .result');
        inputSection.style.display = 'none';
        resultSection.style.display = 'block';
        randomiseList();
    })
    // result randomize again button
    let randomizeAgainButton = document.querySelector('#standard-again');
    randomizeAgainButton.addEventListener('click',()=>{
        randomiseList();
    })
    // result randomize other list button
    let randomizeOtherListButton = document.querySelector('#standard-again-new');
    randomizeOtherListButton.addEventListener('click',()=>{
        let inputSection = document.querySelector('#standard .text');
        let resultSection = document.querySelector('#standard .result');
        inputSection.innerHTML = `
            <h2>Wpisz pojedynczo co chcesz wylosować</h2>
            <div class="input">
                <input type="text" id="standard-input" placeholder="Co chcesz wylosować ...">
                <button class="input-button">Dodaj</button>
            </div>
            <div class="added"></div>
            <button id="standard-button">Losuj</button>`
        randomList();
        inputSection.style.display = 'flex';
        resultSection.style.display = 'none';
    })

}
// function for list randomization (placing items in html)
function randomiseList(){
    preloader(document.querySelector('#standard .result'));
    let items = [];
    let result = document.querySelector('#standard-result');
            result.innerHTML = '';
            // add items to array
            let addedItems = document.querySelectorAll('#standard .item');
            addedItems.forEach(item=>{
                items.push(item.innerHTML);
            })
            // random placing items in array and display them
            items.sort(() => Math.random() - 0.5)
            for(let i=0; i<items.length; i++){
                let item = `<li>${items[i]}</li>`;
                result.innerHTML += item;
            }
            items=[];
}
mainPageButton.addEventListener('click',()=>{
    displayNone();
    mainPage.style.display = 'flex';
})
startButton.addEventListener('click',()=>{
    displayNone();
    chooseTypePage.style.display='grid'
})
listType.addEventListener('click',()=>{
    displayNone();
    listRandom.style.display='flex';
    randomList();
})
circleType.addEventListener('click',()=>{
    displayNone();
    circleRandom.style.display='flex';
})
colorType.addEventListener('click',()=>{
    displayNone();
    colorRandom.style.display='flex';
})
dogType.addEventListener('click',()=>{
    displayNone();
    dogRandom.style.display='flex';
})
quoteType.addEventListener('click',()=>{
    displayNone();
    quoteRandom.style.display='flex';
})
numberType.addEventListener('click',()=>{
    displayNone();
    numberRandom.style.display='flex';
})
coinType.addEventListener('click',()=>{
    displayNone();
    coinRandom.style.display='flex';
})
diceType.addEventListener('click',()=>{
    displayNone();
    diceRandom.style.display='flex';
})