const allSections = document.querySelectorAll('section');
const mainPageButton = document.querySelector('header nav ul li:first-child');
const contactButton = document.querySelector('header nav ul li:last-child');
const mainPage = document.querySelector('#main-page');
const startButton = document.querySelector('#start');
const root = document.querySelector(':root')
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

// where equal to div element of results 
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

// LIST RANDOMIZER
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


const circleRandom = document.querySelector('#circle');
const circle = document.querySelector('.circle');

function randomCircle(){
    let addButton = document.querySelector('#circle .input-button');
    // adding elements
    addButton.addEventListener('click',()=>{
        let input = document.querySelector('#circle-input');
        let value = document.querySelector('#circle-input').value;
        let addedContainer = document.querySelector('#circle .added');
        let added = document.createElement('span');
        added.classList.add('item');
        added.innerHTML = value;
        addedContainer.appendChild(added);
        input.value ='';
    })
    // main randomize button
    let randomizeButton = document.querySelector('#circle-button');
    randomizeButton.addEventListener('click',()=>{
        let inputSection = document.querySelector('#circle .text');
        let resultSection = document.querySelector('#circle .circle-wrapper');
        let number = document.querySelectorAll('#circle .added span')
        inputSection.style.display = 'none';
        resultSection.style.display = 'block';
        createCircle(number.length)
    })
}
//number of elements in the circle and add them to circle div
function createCircle(number){
// object with polygon shapes of each element depending on how many elements are there
    let circleType = {
        "0":{
            "element1":{
                "clipPath": "polygon(0 0, 100% 0, 100% 50%, 0 50%)"
            },
            "element2":{
                "clipPath": "polygon(0 100%, 100% 100%, 100% 50%, 0 50%)"
            }
        } ,
        "1":{
            "element1":{
                "clipPath": "polygon(50% 0, 0 0, 0 79%, 50% 50%)"
            },
            "element2":{
                "clipPath": "polygon(0 79%, 50% 130%, 100% 79%, 50% 50%)"
            },
            "element3":{
                "clipPath": "polygon(50% 0, 100% 0, 100% 79%, 50% 50%)"
            }
        },
        "2":{
            "element1":{
                "clipPath": "polygon(0 0, 50% 0, 100% 0, 50% 50%)"
            },
            "element2":{
                "clipPath": "polygon(100% 100%, 100% 50%, 100% 0, 50% 50%)"
            },
            "element3":{
                "clipPath": "polygon(100% 100%, 50% 100%, 0 100%, 50% 50%)"
            },
            "element4":{
                "clipPath": "polygon(0 0, 0 50%, 0 100%, 50% 50%)"
            }
        }, 
        "3":{
            "element1":{
                "clipPath": "polygon(57.75% 0, 100% 0, 100% 42%, 50% 50%)"
            },
            "element2":{
                "clipPath": "polygon(75.5% 100%, 100% 100%, 100% 42%, 50% 50%)"
            },
            "element3":{
                "clipPath": "polygon(75.5% 100%, 50% 100%, 0 100%, 50% 50%)"
            },
            "element4":{
                "clipPath": "polygon(58% 0, 0 0, 0 24.5%, 50% 50%)"
            },
            "element5":{
                "clipPath": "polygon(0 100%, 0 58%, 0 24.5%, 50% 50%)"
            }
        } ,
        "4":{
            "element1":{
                "clipPath": "polygon(100% 50%, 100% 0, 79% 0, 50% 50%)"
            },
            "element2":{
                "clipPath": "polygon(100% 50%, 100% 100%, 79% 100%, 50% 50%)"
            },
            "element3":{
                "clipPath": "polygon(21% 100%, 50% 100%, 79% 100%, 50% 50%)"
            },
            "element4":{
                "clipPath": "polygon(21% 100%, 0 100%, 0 50%, 50% 50%)"
            },
            "element5":{
                "clipPath": "polygon(21% 0, 0 0, 0 50%, 50% 50%)"
            },
            "element6":{
                "clipPath": "polygon(21% 0, 50% 0, 79% 0, 50% 50%)"
            }
        },
        "5":{
            "element1":{
                "clipPath": "polygon(90% 0, 100% 0, 100% 50%, 50% 50%)"
            },
            "element2":{
                "clipPath": "polygon(90% 100%, 100% 100%, 100% 50%, 50% 50%)"
            },
            "element3":{
                "clipPath": "polygon(90% 100%, 50% 100%, 39% 100%, 50% 50%)"
            },
            "element4":{
                "clipPath": "polygon(0 75%, 0 100%, 39% 100%, 50% 50%)"
            },
            "element5":{
                "clipPath": "polygon(0 75%, 0 50%, 0 25%, 50% 50%)"
            },
            "element6":{
                "clipPath": "polygon(38% 0, 0 0, 0 25%, 50% 50%)"
            },
            "element7":{
                "clipPath": "polygon(38% 0, 50% 0, 90% 0, 50% 50%)"
            }
        },
        "6":{
            "element1":{
                "clipPath": "polygon(50% 0, 50% 0, 100% 0, 50% 50%)"
            },
            "element2":{
                "clipPath": "polygon(100% 50%, 100% 50%, 100% 0, 50% 50%)"
            },
            "element3":{
                "clipPath": "polygon(100% 50%, 100% 50%, 100% 100%, 50% 50%)"
            },
            "element4":{
                "clipPath": "polygon(50% 100%, 100% 100%, 100% 100%, 50% 50%)"
            },
            "element5":{
                "clipPath": "polygon(50% 100%, 50% 100%, 0 100%, 50% 50%)"
            },
            "element6":{
                "clipPath": "polygon(0 50%, 0 50%, 0 100%, 50% 50%)"
            },
            "element7":{
                "clipPath": "polygon(0 50%, 0 50%, 0 0, 50% 50%)"
            },
            "element8":{
                "clipPath": "polygon(50% 0, 50% 0, 0 0, 50% 50%)"
            }
        },
        "7":{
            "element1":{
                "clipPath": "polygon(50% 0, 93% 0, 93% 0, 50% 50%)"
            },
            "element2":{
                "clipPath": "polygon(100% 41%, 93% 0, 93% 0, 50% 50%)"
            },
            "element3":{
                "clipPath": "polygon(100% 41%, 100% 79%, 100% 79%, 50% 50%)"
            },
            "element4":{
                "clipPath": "polygon(67% 100%, 100% 79%, 100% 79%, 50% 50%)"
            },
            "element5":{
                "clipPath": "polygon(67% 100%, 30% 100%, 30% 100%, 50% 50%)"
            },
            "element6":{
                "clipPath": "polygon(0 77%, 30% 100%, 30% 100%, 50% 50%)"
            },
            "element7":{
                "clipPath": "polygon(0 77%, 0 41%, 0 41%, 50% 50%)"
            },
            "element8":{
                "clipPath": "polygon(10% 0, 0 41%, 0 41%, 50% 50%)"
            },
            "element9":{
                "clipPath": "polygon(10% 0, 50% 0, 50% 0, 50% 50%)"
            }
        },
        "8":{
            "element1":{
                "clipPath": "polygon(86% 0, 50% 0, 50% 0, 50% 50%)"
            },
            "element2":{
                "clipPath": "polygon(86% 0, 100% 34%, 100% 34%, 50% 50%)"
            },
            "element3":{
                "clipPath": "polygon(100% 67%, 100% 34%, 100% 34%, 50% 50%)"
            },
            "element4":{
                "clipPath": "polygon(100% 67%, 86% 100%, 86% 100%, 50% 50%)"
            },
            "element5":{
                "clipPath": "polygon(50% 100%, 50% 100%, 86% 100%, 50% 50%)"
            },
            "element6":{
                "clipPath": "polygon(50% 100%, 50% 100%, 14% 100%, 50% 50%)"
            },
            "element7":{
                "clipPath": "polygon(0 66%, 0 66%, 14% 100%, 50% 50%)"
            },            
            "element8":{
                "clipPath": "polygon(0 66%, 0 66%, 0 34%, 50% 50%)"
            },            
            "element9":{
                "clipPath": "polygon(14% 0, 14% 0, 0 34%, 50% 50%)"
            },            
            "element10":{
                "clipPath": "polygon(14% 0, 14% 0, 50% 0, 50% 50%)"
            },
        },
    }
//random degree of spin
    let degreeBase = 3600;
    let degree = Math.floor(Math.random()*360);
    root.style.setProperty('--spin', `${degree}deg`);
    console.log(degree + degreeBase)
    // circle.style.setProperty('transform', `rotate(${degree}deg)`)
//adding elements
    for(let i=0; i<number;i++){
        let element = document.createElement('span');
        let className = `element${i+1}`;
        element.classList.add(className);    
        circle.appendChild(element);
    }   
//creating circle depending on how many elements there are  
    if(number === 2){
        let element1 = document.querySelector('.element1');
        let clipPathRoute1 = circleType[0].element1.clipPath;
        let element2 = document.querySelector('.element2');
        let clipPathRoute2 = circleType[0].element2.clipPath;
        element1.style.setProperty('clip-path',clipPathRoute1);        
        element2.style.setProperty('clip-path',clipPathRoute2);
        // who is the winner
        let winner = '';
        if(degree>90 && degree<180){
            winner = 'element2'
        }else{
            winner = 'element1'
        }
    }else if(number === 3){
        let element1 = document.querySelector('.element1');
        let clipPathRoute1 = circleType[1].element1.clipPath;
        let element2 = document.querySelector('.element2');
        let clipPathRoute2 = circleType[1].element2.clipPath;
        let element3 = document.querySelector('.element3');
        let clipPathRoute3 = circleType[1].element3.clipPath;
        element1.style.setProperty('clip-path',clipPathRoute1);        
        element2.style.setProperty('clip-path',clipPathRoute2);  
        element3.style.setProperty('clip-path',clipPathRoute3);  
        
        let winner = '';
        if(degree>0 && degree<120){
            winner = 'zielony'
        }else if(degree>120 && degree<240){
            winner = 'niebieski'
        }else{
            winner = 'czerowny'
        }
    }else if(number === 4){
        let element1 = document.querySelector('.element1');
        let clipPathRoute1 = circleType[2].element1.clipPath;
        let element2 = document.querySelector('.element2');
        let clipPathRoute2 = circleType[2].element2.clipPath;
        let element3 = document.querySelector('.element3');
        let clipPathRoute3 = circleType[2].element3.clipPath;
        let element4 = document.querySelector('.element4');
        let clipPathRoute4 = circleType[2].element4.clipPath;
        element1.style.setProperty('clip-path',clipPathRoute1);        
        element2.style.setProperty('clip-path',clipPathRoute2);  
        element3.style.setProperty('clip-path',clipPathRoute3);  
        element4.style.setProperty('clip-path',clipPathRoute4);  
        
        let winner = '';
        if(degree>45 && degree<135){
            winner = 'fioletowy'
        }else if(degree>90 && degree<180){
            winner = 'niebieski'
        }else if(degree>180 && degree<270){
            winner = 'czerowny'
        }else{
            winner = 'zielony'
        }
        console.log(winner)
    }else if(number === 5){
        let element1 = document.querySelector('.element1');
        let clipPathRoute1 = circleType[3].element1.clipPath;
        let element2 = document.querySelector('.element2');
        let clipPathRoute2 = circleType[3].element2.clipPath;
        let element3 = document.querySelector('.element3');
        let clipPathRoute3 = circleType[3].element3.clipPath;
        let element4 = document.querySelector('.element4');
        let clipPathRoute4 = circleType[3].element4.clipPath;
        let element5 = document.querySelector('.element5');
        let clipPathRoute5 = circleType[3].element5.clipPath;
        element1.style.setProperty('clip-path',clipPathRoute1);        
        element2.style.setProperty('clip-path',clipPathRoute2);  
        element3.style.setProperty('clip-path',clipPathRoute3);  
        element4.style.setProperty('clip-path',clipPathRoute4);  
        element5.style.setProperty('clip-path',clipPathRoute5);  
    }else if(number === 6){
        let element1 = document.querySelector('.element1');
        let clipPathRoute1 = circleType[4].element1.clipPath;
        let element2 = document.querySelector('.element2');
        let clipPathRoute2 = circleType[4].element2.clipPath;
        let element3 = document.querySelector('.element3');
        let clipPathRoute3 = circleType[4].element3.clipPath;
        let element4 = document.querySelector('.element4');
        let clipPathRoute4 = circleType[4].element4.clipPath;
        let element5 = document.querySelector('.element5');
        let clipPathRoute5 = circleType[4].element5.clipPath;
        let element6 = document.querySelector('.element6');
        let clipPathRoute6 = circleType[4].element6.clipPath;
        element1.style.setProperty('clip-path',clipPathRoute1);        
        element2.style.setProperty('clip-path',clipPathRoute2);  
        element3.style.setProperty('clip-path',clipPathRoute3);  
        element4.style.setProperty('clip-path',clipPathRoute4);  
        element5.style.setProperty('clip-path',clipPathRoute5);  
        element6.style.setProperty('clip-path',clipPathRoute6);  
    }else if(number === 7){
        let element1 = document.querySelector('.element1');
        let clipPathRoute1 = circleType[5].element1.clipPath;
        let element2 = document.querySelector('.element2');
        let clipPathRoute2 = circleType[5].element2.clipPath;
        let element3 = document.querySelector('.element3');
        let clipPathRoute3 = circleType[5].element3.clipPath;
        let element4 = document.querySelector('.element4');
        let clipPathRoute4 = circleType[5].element4.clipPath;
        let element5 = document.querySelector('.element5');
        let clipPathRoute5 = circleType[5].element5.clipPath;
        let element6 = document.querySelector('.element6');
        let clipPathRoute6 = circleType[5].element6.clipPath;
        let element7 = document.querySelector('.element7');
        let clipPathRoute7 = circleType[5].element7.clipPath;
        element1.style.setProperty('clip-path',clipPathRoute1);        
        element2.style.setProperty('clip-path',clipPathRoute2);  
        element3.style.setProperty('clip-path',clipPathRoute3);  
        element4.style.setProperty('clip-path',clipPathRoute4);  
        element5.style.setProperty('clip-path',clipPathRoute5);  
        element6.style.setProperty('clip-path',clipPathRoute6);  
        element7.style.setProperty('clip-path',clipPathRoute7);  
    }else if(number === 8){
        let element1 = document.querySelector('.element1');
        let clipPathRoute1 = circleType[6].element1.clipPath;
        let element2 = document.querySelector('.element2');
        let clipPathRoute2 = circleType[6].element2.clipPath;
        let element3 = document.querySelector('.element3');
        let clipPathRoute3 = circleType[6].element3.clipPath;
        let element4 = document.querySelector('.element4');
        let clipPathRoute4 = circleType[6].element4.clipPath;
        let element5 = document.querySelector('.element5');
        let clipPathRoute5 = circleType[6].element5.clipPath;
        let element6 = document.querySelector('.element6');
        let clipPathRoute6 = circleType[6].element6.clipPath;
        let element7 = document.querySelector('.element7');
        let clipPathRoute7 = circleType[6].element7.clipPath;
        let element8 = document.querySelector('.element8');
        let clipPathRoute8 = circleType[6].element8.clipPath;
        element1.style.setProperty('clip-path',clipPathRoute1);        
        element2.style.setProperty('clip-path',clipPathRoute2);  
        element3.style.setProperty('clip-path',clipPathRoute3);  
        element4.style.setProperty('clip-path',clipPathRoute4);  
        element5.style.setProperty('clip-path',clipPathRoute5);  
        element6.style.setProperty('clip-path',clipPathRoute6);  
        element7.style.setProperty('clip-path',clipPathRoute7);  
        element8.style.setProperty('clip-path',clipPathRoute8);  
    }else if(number === 9){
        let element1 = document.querySelector('.element1');
        let clipPathRoute1 = circleType[7].element1.clipPath;
        let element2 = document.querySelector('.element2');
        let clipPathRoute2 = circleType[7].element2.clipPath;
        let element3 = document.querySelector('.element3');
        let clipPathRoute3 = circleType[7].element3.clipPath;
        let element4 = document.querySelector('.element4');
        let clipPathRoute4 = circleType[7].element4.clipPath;
        let element5 = document.querySelector('.element5');
        let clipPathRoute5 = circleType[7].element5.clipPath;
        let element6 = document.querySelector('.element6');
        let clipPathRoute6 = circleType[7].element6.clipPath;
        let element7 = document.querySelector('.element7');
        let clipPathRoute7 = circleType[7].element7.clipPath;
        let element8 = document.querySelector('.element8');
        let clipPathRoute8 = circleType[7].element8.clipPath;
        let element9 = document.querySelector('.element9');
        let clipPathRoute9 = circleType[7].element9.clipPath;
        element1.style.setProperty('clip-path',clipPathRoute1);        
        element2.style.setProperty('clip-path',clipPathRoute2);  
        element3.style.setProperty('clip-path',clipPathRoute3);  
        element4.style.setProperty('clip-path',clipPathRoute4);  
        element5.style.setProperty('clip-path',clipPathRoute5);  
        element6.style.setProperty('clip-path',clipPathRoute6);  
        element7.style.setProperty('clip-path',clipPathRoute7);  
        element8.style.setProperty('clip-path',clipPathRoute8);  
        element9.style.setProperty('clip-path',clipPathRoute9);  
    }else if(number === 10){
        let element1 = document.querySelector('.element1');
        let clipPathRoute1 = circleType[8].element1.clipPath;
        let element2 = document.querySelector('.element2');
        let clipPathRoute2 = circleType[8].element2.clipPath;
        let element3 = document.querySelector('.element3');
        let clipPathRoute3 = circleType[8].element3.clipPath;
        let element4 = document.querySelector('.element4');
        let clipPathRoute4 = circleType[8].element4.clipPath;
        let element5 = document.querySelector('.element5');
        let clipPathRoute5 = circleType[8].element5.clipPath;
        let element6 = document.querySelector('.element6');
        let clipPathRoute6 = circleType[8].element6.clipPath;
        let element7 = document.querySelector('.element7');
        let clipPathRoute7 = circleType[8].element7.clipPath;
        let element8 = document.querySelector('.element8');
        let clipPathRoute8 = circleType[8].element8.clipPath;
        let element9 = document.querySelector('.element9');
        let clipPathRoute9 = circleType[8].element9.clipPath;
        let element10 = document.querySelector('.element10');
        let clipPathRoute10 = circleType[8].element10.clipPath;
        element1.style.setProperty('clip-path',clipPathRoute1);        
        element2.style.setProperty('clip-path',clipPathRoute2);  
        element3.style.setProperty('clip-path',clipPathRoute3);  
        element4.style.setProperty('clip-path',clipPathRoute4);  
        element5.style.setProperty('clip-path',clipPathRoute5);  
        element6.style.setProperty('clip-path',clipPathRoute6);  
        element7.style.setProperty('clip-path',clipPathRoute7);  
        element8.style.setProperty('clip-path',clipPathRoute8);  
        element9.style.setProperty('clip-path',clipPathRoute9);  
        element10.style.setProperty('clip-path',clipPathRoute10);  
    } 
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
    randomCircle()
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