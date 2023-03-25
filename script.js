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

//============================================================= 
//=============================================================
                    // list randomizer
//============================================================= 
//============================================================= 
// function for List randomization section (buttons listeners)
function randomList(){
    let addButton = document.querySelector('.input-button');
    // adding elements to added div
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


//============================================================= 
//=============================================================
                    // circle randomizer
//============================================================= 
//============================================================= 
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
                "clipPath": "polygon(0 100%, 0 58%, 0 24.5%, 50% 50%)"
            },
            "element5":{
                "clipPath": "polygon(58% 0, 0 0, 0 24.5%, 50% 50%)"
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
    // main randomize button
    let randomizeButton = document.querySelector('#circle-button');
    randomizeButton.addEventListener('click',()=>{
        let inputSection = document.querySelector('#circle .text');
        let resultSection = document.querySelector('#circle .circle-wrapper');
        let number = document.querySelectorAll('#circle .added span')
        let addedElements =[];
        number.forEach(number=>{
            addedElements.push(number.innerHTML)
        })
        inputSection.style.display = 'none';
        resultSection.style.display = 'block';
        createCircle(number.length, addedElements, circleType)
    })    

}
//number of elements in the circle and add them to circle div
function createCircle(number, array, circleType){
    
    let circle = document.querySelector('.circle');
// object with polygon shapes of each element depending on how many elements are there

//random degree of spin
    let degreeBase = 3600;
    let degree = Math.floor(Math.random()*360);
    root.style.setProperty('--spin', `${degreeBase + degree}deg`);
    circle.style.setProperty('transform', `rotate(${degreeBase + degree}deg)`)
    // creating legend of colors
    let circleLegend = document.querySelector('#circle-legend ul')
    array.forEach(colorElement=>{
        let newElement = document.createElement('li')
        newElement.innerHTML = colorElement;
        circleLegend.appendChild(newElement);
    })
    //adding elements
    circle.innerHTML = '';
    for(let i=0; i<number;i++){
        let element = document.createElement('span');
        let className = `element${i+1}`;
        element.classList.add(className);    
        circle.appendChild(element); 
        console.log(circle);      
    }   
//creating circle depending on how many elements there are  
    if(number === 2){
        let element1 = document.querySelector('.element1');
        // console.log('element1', element1);
        let clipPathRoute1 = circleType[0].element1.clipPath;
        // console.log('clipPathRoute1', clipPathRoute1);
        let element2 = document.querySelector('.element2');
        let clipPathRoute2 = circleType[0].element2.clipPath;
        element1.style.setProperty('clip-path',clipPathRoute1);        
        element2.style.setProperty('clip-path',clipPathRoute2);
        // who is the winner
        let winner = '';
        if(degree>90 && degree<270){
            winner = array[1];
        }else{
            winner = array[0]
        }
        setTimeout( ()=>{
            let result = document.querySelector('.result-div')
            result.style.display = 'flex';
            circleLegend.style.display = 'none';
            result.innerHTML = `<i class="fas fa-arrow-left"></i>
                                <h3>Oto wynik losowania:</h3>
                                <p id="circle-result">${winner}</p>`;            
            circleBack();
        },10000);
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
            winner = array[0]
        }else if(degree>120 && degree<240){
            winner = array[1]
        }else{
            winner = array[2]
        }
        setTimeout( ()=>{
            let result = document.querySelector('.result-div')
            result.style.display = 'flex';
            circleLegend.style.display = 'none';
            result.innerHTML = `<i class="fas fa-arrow-left"></i>
                                <h3>Oto wynik losowania:</h3>
                                <p id="circle-result">${winner}</p>`
            circleBack();
        },10000);
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
            winner = array[3]
        }else if(degree>136 && degree<226){
            winner = array[2]
        }else if(degree>227 && degree<317){
            winner = array[1]
        }else{
            winner = array[0]
        }
        setTimeout( ()=>{
            let result = document.querySelector('.result-div')
            result.style.display = 'flex';
            circleLegend.style.display = 'none';
            result.innerHTML = `<i class="fas fa-arrow-left"></i>
                                <h3>Oto wynik losowania:</h3>
                                <p id="circle-result">${winner}</p>`
            circleBack();
        },10000);
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
        
        let winner = '';
        if(degree>62 && degree<136){
            winner = array[3]
        }else if(degree>=136 && degree<208){
            winner = array[2]
        }else if(degree>=208 && degree<280){
            winner = array[1]
        }else if(degree>=280 && degree<351){
            winner = array[0]
        }else{
            winner = array[4]
        }
        setTimeout( ()=>{
            let result = document.querySelector('.result-div')
            result.style.display = 'flex';
            circleLegend.style.display = 'none';
            result.innerHTML = `<i class="fas fa-arrow-left"></i>
                                <h3>Oto wynik losowania:</h3>
                                <p id="circle-result">${winner}</p>`
            circleBack();
        },10000);
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
        
        let winner ='';
        if(degree>=30 && degree<90){
            winner = array[4]
        }else if(degree>=90 && degree<150){
            winner = array[3]
        }else if(degree>=150 && degree<210){
            winner = array[2]
        }else if(degree>=210 && degree<270){
            winner = array[1]
        }else if(degree>=270 && degree<330){
            winner = array[0]
        }else{
            winner = array[5]
        }
        setTimeout( ()=>{
            let result = document.querySelector('.result-div')
            result.style.display = 'flex';
            circleLegend.style.display = 'none';
            result.innerHTML = `<i class="fas fa-arrow-left"></i>
                                <h3>Oto wynik losowania:</h3>
                                <p id="circle-result">${winner}</p>`
            circleBack();
        },10000);
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

        let winner ='';
        if(degree>=14 && degree<62){
            winner = array[5]
        }else if(degree>=62 && degree<116){
            winner = array[4]
        }else if(degree>=116 && degree<169){
            winner = array[3]
        }else if(degree>=169 && degree<220){
            winner = array[2]
        }else if(degree>=220 && degree<271){
            winner = array[1]
        }else if(degree>=271 && degree<322){
            winner = array[0]
        }else{
            winner = array[6]
        }
        setTimeout( ()=>{
            let result = document.querySelector('.result-div')
            result.style.display = 'flex';
            circleLegend.style.display = 'none';
            result.innerHTML = `<i class="fas fa-arrow-left"></i>
                                <h3>Oto wynik losowania:</h3>
                                <p id="circle-result">${winner}</p>`
            circleBack();
        },10000);
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

        let winner = '';
        if(degree>=1 && degree<46){
            winner = array[7]
        }else if(degree>=46 && degree<91){
            winner = array[6]
        }else if(degree>=91 && degree<136){
            winner = array[5]
        }else if(degree>=136 && degree<181){
            winner = array[4]
        }else if(degree>=181 && degree<226){
            winner = array[3]
        }else if(degree>=226 && degree<271){
            winner = array[2]
        }else if(degree>=271 && degree<316){
            winner = array[1]
        }else{
            winner = array[0]
        }
        setTimeout( ()=>{
            let result = document.querySelector('.result-div')
            result.style.display = 'flex';
            circleLegend.style.display = 'none';
            result.innerHTML = `<i class="fas fa-arrow-left"></i>
                                <h3>Oto wynik losowania:</h3>
                                <p id="circle-result">${winner}</p>`
            circleBack();
        },10000);
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
        
        let winner = '';
        if(degree>=1 && degree<40){
            winner = array[8]
        }else if(degree>=40 && degree<81){
            winner = array[7]
        }else if(degree>=81 && degree<120){
            winner = array[6]
        }else if(degree>=120 && degree<159){
            winner = array[5]
        }else if(degree>=159 && degree<200){
            winner = array[4]
        }else if(degree>=200 && degree<240){
            winner = array[3]
        }else if(degree>=240 && degree<281){
            winner = array[2]
        }else if(degree>=281 && degree<320){
            winner = array[1]
        }else{
            winner = array[0]
        }
        setTimeout( ()=>{
            let result = document.querySelector('.result-div')
            result.style.display = 'flex';
            circleLegend.style.display = 'none';
            result.innerHTML = `<i class="fas fa-arrow-left"></i>
                                <h3>Oto wynik losowania:</h3>
                                <p id="circle-result">${winner}</p>`
            circleBack();
        },10000);
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

        let winner = '';
        if(degree>=1 && degree<37){
            winner = array[9]
        }else if(degree>=37 && degree<73){
            winner = array[8]
        }else if(degree>=73 && degree<109){
            winner = array[7]
        }else if(degree>=109 && degree<145){
            winner = array[6]
        }else if(degree>=145 && degree<181){
            winner = array[5]
        }else if(degree>=181 && degree<217){
            winner = array[4]
        }else if(degree>=217 && degree<252){
            winner = array[3]
        }else if(degree>=252 && degree<288){
            winner = array[2]
        }else if(degree>=288 && degree<324){
            winner = array[1]
        }else{
            winner = array[0]
        }
        setTimeout( ()=>{
            let result = document.querySelector('.result-div')
            result.style.display = 'flex';
            circleLegend.style.display = 'none';
            result.innerHTML = `<i class="fas fa-arrow-left"></i>
                                <h3>Oto wynik losowania:</h3>
                                <p id="circle-result">${winner}</p>`
            circleBack();
        },10000);
    }

    
}
// function for use randomizer multiple times
function circleBack(){
    let circleRandom = document.querySelector('#circle');

    let circleBack = document.querySelector('#circle .result-div i')
    circleBack.addEventListener('click',()=>{
        circleRandom.innerHTML = 
        `<div class="text" >
                    <h2>Wpisz pojedynczo słowa, które chcesz umieścić na kole</h2>
                    <div class="input">
                        <input type="text" id="circle-input" placeholder="Co chcesz wylosować ...">
                        <button class="input-button">Dodaj</button>
                    </div>
                    <div class="added"></div>
                    <button id="circle-button">Losuj</button>
                </div>
                <div class="circle-wrapper" style="display:none">
                    <div id="circle-legend">
                        <ul>
                            
                        </ul>
                    </div>
                    <i class="fas fa-down-long"></i>
                    <div class="circle"></div>
                </div>
                <div class="result-div" style="display: none"></div>
        `;
        randomCircle();
    }) 
}

//============================================================= 
//=============================================================
                    // number randomizer
//============================================================= 
//============================================================= 
const min = document.querySelector('#min').value;
const max = document.querySelector('#max').value;
const decimal = document.querySelector('#decimal').value;
const decimalInput = document.querySelector('#decimal');
const numberRandom = document.querySelector('#number')
const numberButton = document.querySelector('#number-button');
const checkbox = document.querySelector('#numberSwitch');
const numberResult = document.querySelector('#number-result');
checkbox.addEventListener('input',()=>{
        if(checkbox.checked){
        decimalInput.disabled = false;
    }else{
        decimalInput.disabled = true;
    }
})
numberButton.addEventListener('click',()=>{
    const min = document.querySelector('#min').value;
    const max = document.querySelector('#max').value;
    const decimal = document.querySelector('#decimal').value;
    if(checkbox.checked){
        randomRealNumber(min,max,decimal);
    }else{
        randomInteger(min,max)
    }
})

function randomInteger(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    let result = Math.floor(Math.random() * (max - min + 1)) + min;
    numberResult.innerHTML = result;
}
function randomRealNumber(min,max,decimal){
    let random = Math.random() * (max - min + 1) + min;
    random*=1;
    let result = random.toFixed(decimal);
    numberResult.innerHTML = result;

}
//============================================================= 
//=============================================================
                    // color randomizer
//============================================================= 
//============================================================= 
const colorRandom = document.querySelector('#color');
const colorButton = document.querySelector('#color-button');
const rgbResult = document.querySelector('#rgb small');
const hexResult = document.querySelector('#hex small');
const hslResult = document.querySelector('#hsl small');
const cmykResult = document.querySelector('#cmyk small');
const resultColorCircle = document.querySelector('#show-color');
function randomColor(){
    function random(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    let result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
}
let r = random(1,255);
let g = random(1,255);
let b = random(1,255);

rgbResult.innerHTML = `${r}, ${g}, ${b}`;
resultColorCircle.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
rgbToHex(r,g,b);
rgbToHsl(r,g,b);
rgbToCmyk(r,g,b);
}
colorButton.addEventListener('click',()=>{
randomColor();
})

function rgbToHex(r,g,b) {
    let rResult = r.toString(16);
    if(rResult.length == 1){
        rResult = '0'+rResult;
        +rResult;  
    }
    let gResult = g.toString(16);
    if(gResult.length == 1){
        gResult = '0'+gResult;
        +gResult;  
    }
    let bResult = b.toString(16);
    if(bResult.length == 1){
        bResult = '0'+bResult;
        +bResult;  
    }

    let result = rResult + gResult + bResult
    hexResult.innerHTML = `#${result}`;
}
function rgbToHsl(r,g,b){
r /= 255; g /= 255; b /= 255;
  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);
  let d = max - min;
  let h;
  if (d === 0) h = 0;
  else if (max === r) h = ((((g - b) / d) % 6)+6)%6;
  else if (max === g) h = (b - r) / d + 2;
  else if (max === b) h = (r - g) / d + 4;
  let l = (min + max) / 2;
  let s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));
  let hResult = (h*60).toFixed(0);
  let sResult = (s*100).toFixed(0);
  let lResult = (l*100).toFixed(0);
  
  hslResult.innerHTML= `${hResult}°, ${sResult}%, ${lResult}%`;
};
function rgbToCmyk(r, g, b) {
    var c = 1 - (r / 255);
    var m = 1 - (g / 255);
    var y = 1 - (b / 255);
    var k = Math.min(c, Math.min(m, y));
    
    c = (c - k) / (1 - k);
    m = (m - k) / (1 - k);
    y = (y - k) / (1 - k);
    
    c = isNaN(c) ? 0 : c;
    m = isNaN(m) ? 0 : m;
    y = isNaN(y) ? 0 : y;
    k = isNaN(k) ? 0 : k;
    cmykResult.innerHTML = `${c.toFixed(2)},&nbsp; ${m.toFixed(2)},&nbsp; ${y.toFixed(2)},&nbsp; ${k.toFixed(2)}`
}
//============================================================= 
//=============================================================
                    // dog randomizer
//============================================================= 
//============================================================= 
// section displayers
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
    let circleRandom = document.querySelector('#circle');
    circleRandom.style.display='flex';
    randomCircle()
})
numberType.addEventListener('click',()=>{
    let checkbox = document.querySelector('#numberSwitch');
    displayNone();
    numberRandom.style.display='flex';
    // if(checkbox.checked){
    //     randomRealNumber();
    // }else{
    //     randomInteger();
    // }
})
colorType.addEventListener('click',()=>{
    displayNone();
    colorRandom.style.display='flex';
    randomColor();
})
dogType.addEventListener('click',()=>{
    displayNone();
    dogRandom.style.display='flex';
})
quoteType.addEventListener('click',()=>{
    displayNone();
    quoteRandom.style.display='flex';
})

coinType.addEventListener('click',()=>{
    displayNone();
    coinRandom.style.display='flex';
})
diceType.addEventListener('click',()=>{
    displayNone();
    diceRandom.style.display='flex';
})