const allSections = document.querySelectorAll('section');
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
// navigation buttons
const mainPageButton = document.querySelector('#mainPageNav');
const howToUse = document.querySelector('#howToUse');
const contactButton = document.querySelector('#contact');

// randomization sections start
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
                    // working
//============================================================= 
//============================================================= 
// const dogRandom = document.querySelector('#dog')
// const apiKey = 'QFN4g+jpk38etypKU3z46A==QapTBXHbitWz4QVV'
// const dogBreeds =[
//     'Affenpinscher',
//     'Afghan Hound',
//     'Airedale Terrier',
//     'Akita',
//     'Alaskan Klee Kai',
//     'Alaskan Malamute',
//     'American English Coonhound',
//     'American Eskimo Dog',
//     'American Foxhound',
//     'American Hairless Terrier',
//     'American Leopard Hound',
//     'American Staffordshire Terrier',
//     'American Water Spaniel',
//     'Anatolian Shepherd Dog',
//     'Appenzeller Sennenhund',
//     'Australian Cattle Dog',
//     'Australian Kelpie',
//     'Australian Shepherd',
//     'Australian Stumpy Tail Cattle Dog',
//     'Australian Terrier',
//     'Azawakh',
//     'Barbado da Terceira',
//     'Barbet',
//     'Basenji',
//     'Basset Fauve de Bretagne',
//     'Basset Hound',
//     'Bavarian Mountain Scent Hound',
//     'Beagle',
//     'Bearded Collie',
//     'Beauceron',
//     'Bedlington Terrier',
//     'Belgian Laekenois',
//     'Belgian Malinois',
//     'Belgian Sheepdog',
//     'Belgian Tervuren',
//     'Bergamasco Sheepdog',
//     'Berger Picard',
//     'Bernese Mountain Dog',
//     'Bichon Frise',
//     'Biewer Terrier',
//     'Black and Tan Coonhound',
//     'Black Russian Terrier',
//     'Bloodhound',
//     'Bluetick Coonhound',
//     'Boerboel',
//     'Bohemian Shepherd',
//     'Bolognese',
//     'Border Collie',
//     'Border Terrier',
//     'Borzoi',
//     'Boston Terrier',
//     'Bouvier des Flandres',
//     'Boxer',
//     'Boykin Spaniel',
//     'Bracco Italiano',
//     'Braque du Bourbonnais',
//     'Braque Francais Pyrenean',
//     'Briard',
//     'Brittany',
//     'Broholmer',
//     'Brussels Griffon',
//     'Bulldog',
//     'Bull Terrier',
//     'Bullmastiff',
//     'Cairn Terrier',
//     'Canaan Dog',
//     'Cane Corso',
//     'Cardigan Welsh Corgi',
//     'Carolina Dog',
//     'Catahoula Leopard Dog',
//     'Caucasian Shepherd Dog',
//     'Cavalier King Charles Spaniel',
//     'Central Asian Shepherd Dog',
//     'Cesky Terrier',
//     'Chesapeake Bay Retriever',
//     'Chihuahua',
//     'Chinese Crested',
//     'Chinese Shar-Pei',
//     'Chinook',
//     'Chow Chow',
//     "Cirneco dell'Etna",
//     'Clumber Spaniel',
//     'Cocker Spaniel',
//     'Collie',
//     'Coton de Tulear',
//     'Croatian Sheepdog',
//     'Curly-Coated Retriever',
//     'Czechoslovakian Vlcak',
//     'Dachshund',
//     'Dalmatian',
//     'Dandie Dinmont Terrier',
//     'Danish-Swedish Farmdog',
//     'Deutscher Wachtelhund',
//     'Doberman Pinscher',
//     'Dogo Argentino',
//     'Dogue de Bordeaux',
//     'Drentsche Patrijshond',
//     'Drever',
//     'Dutch Shepherd',
//     'English Cocker Spaniel',
//     'English Foxhound',
//     'English Setter',
//     'English Springer Spaniel',
//     'English Toy Spaniel',
//     'Entlebucher Mountain Dog',
//     'Estrela Mountain Dog',
//     'Eurasier',
//     'Field Spaniel',
//     'Finnish Lapphund',
//     'Finnish Spitz',
//     'Flat-Coated Retriever',
//     'French Bulldog',
//     'French Spaniel',
//     'German Longhaired Pointer',
//     'German Pinscher',
//     'German Shepherd Dog',
//     'German Shorthaired Pointer',
//     'German Spitz',
//     'German Wirehaired Pointer',
//     'Giant Schnauzer',
//     'Glen of Imaal Terrier',
//     'Golden Retriever',
//     'Gordon Setter',
//     'Grand Basset Griffon Vendéen',
//     'Great Dane',
//     'Great Pyrenees',
//     'Greater Swiss Mountain Dog',
//     'Greyhound',
//     'Hamiltonstovare',
//     'Hanoverian Scenthound',
//     'Harrier',
//     'Havanese',
//     'Hokkaido',
//     'Hovawart',
//     'Ibizan Hound',
//     'Icelandic Sheepdog',
//     'Irish Red and White Setter',
//     'Irish Setter',
//     'Irish Terrier',
//     'Irish Water Spaniel',
//     'Irish Wolfhound',
//     'Italian Greyhound',
//     'Jagdterrier',
//     'Japanese Akitainu',
//     'Japanese Chin',
//     'Japanese Spitz',
//     'Japanese Terrier',
//     'Jindo',
//     'Kai Ken',
//     'Karelian Bear Dog',
//     'Keeshond',
//     'Kerry Blue Terrier',
//     'Kishu Ken',
//     'Komondor',
//     'Kromfohrlander',
//     'Kuvasz',
//     'Labrador Retriever',
//     'Lagotto Romagnolo',
//     'Lakeland Terrier',
//     'Lancashire Heeler',
//     'Lapponian Herder',
//     'Leonberger',
//     'Lhasa Apso',
//     'Löwchen',
//     'Maltese',
//     'Manchester Terrier (Standard)',
//     'Manchester Terrier (Toy)',
//     'Mastiff',
//     'Miniature American Shepherd',
//     'Miniature Bull Terrier',
//     'Miniature Pinscher',
//     'Miniature Schnauzer',
//     'Mountain Cur',
//     'Mudi',
//     'Neapolitan Mastiff',
//     'Nederlandse Kooikerhondje',
//     'Newfoundland',
//     'Norfolk Terrier',
//     'Norrbottenspets',
//     'Norwegian Buhund',
//     'Norwegian Elkhound',
//     'Norwegian Lundehund',
//     'Norwich Terrier',
//     'Nova Scotia Duck Tolling Retriever',
//     'Old English Sheepdog',
//     'Otterhound',
//     'Papillon',
//     'Parson Russell Terrier',
//     'Pekingese',
//     'Pembroke Welsh Corgi',
//     'Perro de Presa Canario',
//     'Peruvian Inca Orchid',
//     'Petit Basset Griffon Vendéen',
//     'Pharaoh Hound',
//     'Pointer',
//     'Polish Lowland Sheepdog',
//     'Pomeranian',
//     'Poodle (Miniature)',
//     'Poodle (Standard)',
//     'Poodle (Toy)',
//     'Porcelaine',
//     'Portuguese Podengo',
//     'Portuguese Podengo Pequeno',
//     'Portuguese Pointer',
//     'Portuguese Sheepdog',
//     'Portuguese Water Dog',
//     'Pudelpointer',
//     'Pug',
//     'Puli',
//     'Pumi',
//     'Pyrenean Mastiff',
//     'Pyrenean Shepherd',
//     'Rafeiro do Alentejo',
//     'Rat Terrier',
//     'Redbone Coonhound',
//     'Rhodesian Ridgeback',
//     'Romanian Mioritic Shepherd Dog',
//     'Rottweiler',
//     'Russell Terrier',
//     'Russian Toy',
//     'Russian Tsvetnaya Bolonka',
//     'Saint Bernard',
//     'Saluki',
//     'Samoyed',
//     'Schapendoes',
//     'Schipperke',
//     'Scottish Deerhound',
//     'Scottish Terrier',
//     'Sealyham Terrier',
//     'Segugio Italiano',
//     'Shetland Sheepdog',
//     'Shiba Inu',
//     'Shih Tzu',
//     'Shikoku',
//     'Siberian Husky',
//     'Silky Terrier',
//     'Skye Terrier',
//     'Sloughi',
//     'Slovakian Wirehaired Pointer',
//     'Slovensky Cuvac',
//     'Slovensky Kopov',
//     'Small Munsterlander',
//     'Smooth Fox Terrier',
//     'Soft Coated Wheaten Terrier',
//     'Spanish Mastiff',
//     'Spanish Water Dog',
//     'Spinone Italiano',
//     'Stabyhoun',
//     'Staffordshire Bull Terrier',
//     'Standard Schnauzer',
//     'Sussex Spaniel',
//     'Swedish Lapphund',
//     'Swedish Vallhund',
//     'Taiwan Dog',
//     'Teddy Roosevelt Terrier',
//     'Thai Ridgeback',
//     'Tibetan Mastiff',
//     'Tibetan Spaniel',
//     'Tibetan Terrier',
//     'Tornjak',
//     'Tosa',
//     'Transylvanian Hound',
//     'Treeing Tennessee Brindle',
//     'Treeing Walker Coonhound',
//     'Vizsla',
//     'Volpino Italiano',
//     'Weimaraner',
//     'Welsh Springer Spaniel',
//     'Welsh Terrier',
//     'West Highland White Terrier',
//     'Whippet',
//     'Wire Fox Terrier',
//     'Wirehaired Pointing Griffon',
//     'Wirehaired Vizsla',
//     'Working Kelpie',
//     'Xoloitzcuintli',
//     'Yakutian Laika',
//     'Yorkshire Terrier',
// ]

// function randomDogId(min,max){
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     let result = Math.floor(Math.random() * (max - min + 1)) + min;
//     return result;
// }
// let dog = dogBreeds[randomDogId(0,dogBreeds.length)];
// fetch(`https://api.api-ninjas.com/v1/dogs?name=${dog}`,{
//     headers: {'X-Api-Key': `${apiKey}`,
// })
//     .then(response => response.json())
//     .then(data=>randomDog(data))

    
// function randomDog(data) {
//     let dogImage = document.querySelector('#dog-image');
//     dogImage.setAttribute('src', `${data[0].image_link}`)
//     let dogName = document.querySelector('#dog-name');
//     dogName.innerHTML = data[0].name; 
//     let dogLifetime = document.querySelector('#life-expectancy');
//     dogLifetime.innerHTML = `${data[0].min_life_expectancy} lat  - ${data[0].max_life_expectancy} lat`
//     let maleHeight = document.querySelector('#male-height');
//     maleHeight.innerHTML = `${((data[0].min_height_male)*2.54).toFixed(0)}cm - ${((data[0].max_height_male)*2.54).toFixed(0)}cm`
//     let femaleHeight = document.querySelector('#female-height');
//     femaleHeight.innerHTML = `${((data[0].min_height_female)*2.54).toFixed(0)}cm - ${((data[0].max_height_female)*2.54).toFixed(0)}cm`
//     let maleWeight = document.querySelector('#male-weight');
//     maleWeight.innerHTML = `${((data[0].min_weight_male)*0.453592).toFixed(1)}kg - ${((data[0].max_weight_male)*0.453592).toFixed(1)}kg`
//     let femaleWeight = document.querySelector('#female-weight');
//     femaleWeight.innerHTML = `${((data[0].min_weight_female)*0.453592).toFixed(1)}kg - ${((data[0].max_weight_female)*0.453592).toFixed(1)}kg`

//     let energyRate = document.querySelector('#energy-rate');
//     let energy = data[0].energy;
//     for(let i = 0; i < energy; i++){
//         showPaw(energyRate)
//     }
//     let barkingRate = document.querySelector('#barking-rate');
//     let barking = data[0].barking;
//     for(let i = 0; i < barking; i++){
//         showPaw(barkingRate)
//     }
//     let trainabilityRate = document.querySelector('#trainability-rate');
//     let trainability = data[0].barking;
//     for(let i = 0; i < trainability; i++){
//         showPaw(trainabilityRate)
//     }
//     let childrenRate = document.querySelector('#children-rate');
//     let children = data[0].good_with_children;
//     for(let i = 0; i < children; i++){
//         showPaw(childrenRate)
//     }
//     let otherRate = document.querySelector('#other-rate');
//     let other = data[0].good_with_other_dogs;
//     for(let i = 0; i < other; i++){
//         showPaw(otherRate)
//     }
//     let strangersRate = document.querySelector('#strangers-rate');
//     let strangers = data[0].good_with_strangers;
//     for(let i = 0; i < strangers; i++){
//         showPaw(strangersRate)
//     }

//     const dogButton = document.querySelector('#other-dog');
//         dogButton.addEventListener('click', ()=>{
//             let dog = dogBreeds[randomDogId(0,dogBreeds.length)];
//             fetch(`https://api.api-ninjas.com/v1/dogs?name=${dog}`,{
//                 method : 'GET',
//                 mode: 'cors',
//                 headers: { 'X-Api-Key': `${apiKey}`}
//             })
//             .then(response => response.json())
//             .then(data=>newDog(data))
//             preloader(dogRandom);
//             dogRandom.innerHTML =`
//                 <div class="result">
//                     <div class="dog-info">
//                         <img src=" " alt="dog" id="dog-image">
//                         <p id="dog-name"></p>
//                         <p id="life-expectancy"></p>
//                         <table>
//                             <th>
//                                 <td>Samiec</td>
//                                 <td>Samica</td>
//                             </th>
//                             <tr>
//                                 <td><strong>Wysokość</strong></td>
//                                 <td id="male-height"></td>
//                                 <td id="female-height"></td>
//                             </tr>
//                             <tr>
//                                 <td><strong>Waga</strong></td>
//                                 <td id="male-weight"></td> 
//                                 <td id="female-weight"></td> 
//                             </tr>
//                         </table>
//                     </div>
//                     <div class="dog-ratings">
//                         <ul class="ratings">
//                             <li id="energy-rate">
//                                 <strong>Energia: </strong> 
//                             </li>
//                             <li id="barking-rate">
//                                 <strong>Szczekliwość: </strong> 
                                
//                             </li>
//                             <li id="trainability-rate">
//                                 <strong>Łatwość tresury: </strong> 

//                             </li>
//                             <li id="children-rate">
//                                 <strong>Stosunek do dzieci: </strong> 
//                             </li>
//                             <li id="other-rate">
//                                 <strong>Stosunek do innych psów: </strong> 
//                             </li>
//                             <li id="strangers-rate">
//                                 <strong>Stosunek do obcych: </strong> 
//                             </li>
//                         </ul>
//                     </div>
//                     <button id="other-dog">Losuj nowego psa</button>
//                 </div>
//     `
//         })

// }   
// function showPaw(rate){
//     let paw = document.createElement('i');
//     paw.classList.add('fa-solid');
//     paw.classList.add('fa-paw');
//     rate.appendChild(paw)
// }
// function newDog(data){
//     randomDog(data);
// }

//============================================================= 
//=============================================================
                    // quote randomizer
//============================================================= 
//============================================================= 
const quoteRandom = document.querySelector('#quote')
function randomQuoteId(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    let result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
}
fetch('quote.json')
.then(response => response.json())
.then(data =>randomQuote(data))

function randomQuote(data){
    let quoteButton = document.querySelector('#quote-button')
    let quoteStart = document.querySelector('#quote .text')
    let quoteResult = document.querySelector('#quote .result')   
    let quoteNext = document.querySelector('#new-quote')

    quoteButton.addEventListener('click',()=>{
        let quoteID = randomQuoteId(0,14);
        let quote = document.querySelector('#quote blockquote');
        let author = document.querySelector('#quote span');
        preloader(quoteRandom)
        quoteStart.style.display = 'none';
        quoteResult.style.display = 'flex';
        quote.innerHTML = data[quoteID].quote;
        quote.cite = data[quoteID].author;
        author.innerHTML = data[quoteID].author;
        quoteNext.addEventListener('click',()=>{
            preloader(quoteRandom)
            let newQuoteID = randomQuoteId(0,14);
            quote.innerHTML = data[newQuoteID].quote;
            quote.cite = data[newQuoteID].author;
            author.innerHTML = data[newQuoteID].author;
        })
    })
}
function newQuote(data) { 
    console.log(data)
}

//============================================================= 
//=============================================================
                    // coin randomizer
//============================================================= 
//============================================================= 
const coinRandom = document.querySelector('#coin')
function coinFlip(){
    let flip = document.querySelector('#coin-button');
    let heads = document.querySelector('#heads')
    let tails = document.querySelector('#tails')
    let resultElement = document.querySelector('#coin-result');
    let coin = document.querySelector('#coin-random');
    setTimeout(()=>{
        if(Math.random()< .5){
        coin.classList.add('animate-heads')
        setTimeout(()=>{
            resultElement.innerHTML = 'ORZEŁ'
        },3000)
        coin.classList.remove('animate-tails')   
    }else{
        coin.classList.add('animate-tails')
        setTimeout(()=>{
            resultElement.innerHTML = 'RESZKA'
        },3000)
        coin.classList.remove('animate-heads')
    }
    },0)
    flip.addEventListener('click', ()=>{
        coinFlip();
        resultElement.innerHTML= ''
        coin.classList.remove('animate-heads')
        coin.classList.remove('animate-tails')
    })
}

//============================================================= 
//=============================================================
                    // dice randomizer
//============================================================= 
//============================================================= 
const diceRandom = document.querySelector('#dice')
function rollDice(){
    let dicesValue = 0;
    let roll = document.querySelector('#dice-button')
    roll.addEventListener('click', ()=>{
        let cup = document.querySelector('.cup')
        cup.classList.add('animation-cup')
        let id = 0;
        let result = document.querySelector('#dice-result');
        // create dices with dots
        let howMany = document.querySelector('#dices-count').value;
        let container = document.querySelector('#dices-container .dices')
        container.classList.add('animation-dices')
        container.innerHTML = '';
        for(let i=0; i<howMany; i++){
            let dice = document.createElement('div');
            dice.classList.add('dice');
            let dot1 = document.createElement('span');
            let dot2 = document.createElement('span');
            let dot3 = document.createElement('span');
            let dot4 = document.createElement('span');
            let dot5 = document.createElement('span');
            let dot6 = document.createElement('span');
            dot1.classList.add('dot');
            dot1.classList.add('dot1');
            dot2.classList.add('dot');
            dot2.classList.add('dot2');
            dot3.classList.add('dot');
            dot3.classList.add('dot3');
            dot4.classList.add('dot');
            dot4.classList.add('dot4');
            dot5.classList.add('dot');
            dot5.classList.add('dot5');
            dot6.classList.add('dot');
            dot6.classList.add('dot6');
            dice.appendChild(dot1);
            dice.appendChild(dot2);
            dice.appendChild(dot3);
            dice.appendChild(dot4);
            dice.appendChild(dot5);
            dice.appendChild(dot6);
            // change dots position
            setTimeout(()=>{
                let value = randomDots(1,6);
                
                dicesValue += value;

                if(id < howMany){
                    id++;
                }
                if(id == howMany){
                    result.innerHTML = dicesValue;
                }
        
 
                switch(value){
                    case 1: 
                        dot1.style.setProperty('top','50%');
                        dot1.style.setProperty('left','50%');
                        dot2.style.display='none';
                        dot3.style.display='none';
                        dot4.style.display='none';
                        dot5.style.display='none';
                        dot6.style.display='none';
                break;
                    case 2: 
                        dot1.style.setProperty('top','70%');
                        dot1.style.setProperty('left','33%');
                        dot2.style.setProperty('top','30%');
                        dot2.style.setProperty('left','66%');
                        dot3.style.display='none';
                        dot4.style.display='none';
                        dot5.style.display='none';
                        dot6.style.display='none';
                break;
                    case 3: 
                        dot1.style.setProperty('top','75%');
                        dot1.style.setProperty('left','25%');
                        dot2.style.setProperty('top','50%');
                        dot2.style.setProperty('left','50%');
                        dot3.style.setProperty('top','25%');
                        dot3.style.setProperty('left','75%');
                        dot4.style.display='none';
                        dot5.style.display='none';
                        dot6.style.display='none';
                break;
                    case 4: 
                        dot1.style.setProperty('top','25%');
                        dot1.style.setProperty('left','25%');
                        dot2.style.setProperty('top','25%');
                        dot2.style.setProperty('left','75%');
                        dot3.style.setProperty('top','75%');
                        dot3.style.setProperty('left','25%');
                        dot4.style.setProperty('top','75%');
                        dot4.style.setProperty('left','75%');
                        dot5.style.display='none';
                        dot6.style.display='none';
                break;
                    case 5:
                        dot1.style.setProperty('top','25%');
                        dot1.style.setProperty('left','25%');
                        dot2.style.setProperty('top','25%');
                        dot2.style.setProperty('left','75%');
                        dot3.style.setProperty('top','75%');
                        dot3.style.setProperty('left','25%');
                        dot4.style.setProperty('top','75%');
                        dot4.style.setProperty('left','75%');
                        dot5.style.setProperty('top','50%');
                        dot5.style.setProperty('left','50%');
                        dot6.style.display='none';
                break;
                    case 6: 
                        dot1.style.setProperty('top','25%');
                        dot1.style.setProperty('left','25%');
                        dot2.style.setProperty('top','25%');
                        dot2.style.setProperty('left','75%');
                        dot3.style.setProperty('top','50%');
                        dot3.style.setProperty('left','25%');
                        dot4.style.setProperty('top','50%');
                        dot4.style.setProperty('left','75%');
                        dot5.style.setProperty('top','75%');
                        dot5.style.setProperty('left','25%');
                        dot6.style.setProperty('top','75%');
                        dot6.style.setProperty('left','75%');
                break;
                }
            },2000)
            container.appendChild(dice);
            setTimeout(()=>{
                result.style.display = 'block';
                cup.classList.remove('animation-cup')
                container.classList.remove('animation-dices')
            },12000)

        }
    })
}
function randomDots(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    let result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
}
// section displayers
const listAside = document.querySelector('#aside-navigation li:first-child');
const circleAside = document.querySelector('#aside-navigation li:nth-child(2)');
const numberAside = document.querySelector('#aside-navigation li:nth-child(3)');
const colorAside = document.querySelector('#aside-navigation li:nth-child(4)');
// const dogAside = document.querySelector('#aside-navigation li:nth-child(5)');
const quoteAside = document.querySelector('#aside-navigation li:nth-child(6)');
const coinAside = document.querySelector('#aside-navigation li:nth-child(7)');
const diceAside = document.querySelector('#aside-navigation li:last-child');
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
listAside.addEventListener('click',()=>{
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
circleAside.addEventListener('click',()=>{
    displayNone();
    let circleRandom = document.querySelector('#circle');
    circleRandom.style.display='flex';
    randomCircle()
})
numberType.addEventListener('click',()=>{
    displayNone();
    numberRandom.style.display='flex';
})
numberAside.addEventListener('click',()=>{
    displayNone();
    numberRandom.style.display='flex';

})
colorType.addEventListener('click',()=>{
    displayNone();
    colorRandom.style.display='flex';
    randomColor();
})
colorAside.addEventListener('click',()=>{
    displayNone();
    colorRandom.style.display='flex';
    randomColor();
})
// dogType.addEventListener('click',()=>{
//     displayNone();
//     dogRandom.style.display='block';
//     randomDog();
// })
// dogAside.addEventListener('click',()=>{
//     displayNone();
//     dogRandom.style.display='block';
//     randomDog();
// })
quoteType.addEventListener('click',()=>{
    displayNone();
    quoteRandom.style.display='flex';
    randomQuote();
})
quoteAside.addEventListener('click',()=>{
    displayNone();
    quoteRandom.style.display='flex';
    randomQuote();
})
coinType.addEventListener('click',()=>{
    displayNone();
    coinRandom.style.display='flex';
    coinFlip();
})
coinAside.addEventListener('click',()=>{
    displayNone();
    coinRandom.style.display='flex';
    coinFlip();
})
diceType.addEventListener('click',()=>{
    displayNone();
    diceRandom.style.display='flex';
    rollDice();
})
diceAside.addEventListener('click',()=>{
    displayNone();
    diceRandom.style.display='flex';
    rollDice();
})