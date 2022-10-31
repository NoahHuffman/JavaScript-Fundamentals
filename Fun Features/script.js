//Monkey////////////////////////////////////////////
////////////////////////////////////////////////////
const closedFace = document.querySelector(".closed");
const openFace = document.querySelector(".open");
const mouthFace = document.querySelector(".mouth");

//Event Listener                       
closedFace.addEventListener('click', () => {
//creating function
    if(openFace.classList.contains('open')){
        openFace.classList.add('active');
        closedFace.classList.remove('active'); 
    } 
});

//Event Listener 
openFace.addEventListener('click', () => {
//creating function
    if(mouthFace.classList.contains('mouth')){
        mouthFace.classList.add('active');
        openFace.classList.remove('active'); 
    }
});

//Event Listener 
mouthFace.addEventListener('click', () => {
//creating function
    if(closedFace.classList.contains('closed')){
        closedFace.classList.add('active');
        mouthFace.classList.remove('active'); 
    } 
});

////////////////////////////////////////////////////
///////////////Array////////////////////////////////

let data = [
    {
        name: 'Uri',
        age: '42',
        occupation: 'Trainer',
    },
    {
        name: 'Uria',
        age: '63',
        occupation: 'Front Line Commander',
    },
    {
        name: 'Urimeeto',
        age: '22',
        occupation: 'Chicken Farmer',
    },
    {
        name: 'Uriseed',
        age: '3',
        occupation: 'Chicken',
    },
    {
        name: 'Urifoloma',
        age: '51',
        occupation: 'Cattle Herder',
    },
    {
        name: 'Uri jr.',
        age: '22',
        occupation: 'Trainer in training',
    }
];

const info = document.querySelector('#info');

//Creating Display Map
let details = data.map(function(item) {
    return (
        '<div>' + item.name + ' is a ' + item.age + ' year old ' + item.occupation + '</div>'
    )
});

info.innerHTML = details.join('\n');

////////////////////////////Hover///////////////////
////////////////////////////////////////////////////

const circle = document.querySelector('#circle');

circle.addEventListener('mouseenter', () => {
    if(!circle.classList.contains('hover')){
        circle.classList.add('hover');
    }
});

circle.addEventListener('mouseleave', () => {
    if(circle.classList.contains('hover')){
        circle.classList.remove('hover');
    }
});
