const input = document.querySelector('#color-field')
const brush = document.querySelector('.brush')
const button = document.querySelector('#set-color')
const body = document.querySelector('body')
const trigger = input.addEventListener('blur', changeSwatch)

let color = ''

function changeOnClick(){
    button.addEventListener('click', function(e){
        e.preventDefault()
        color += input.value
        brush.style.background = color
    })
}
changeOnClick()

function changeOnEnter(){
    input.addEventListener('keydown', function(e){
        if (e.keyCode == 13){
            e.preventDefault()
            color += input.value
            brush.style.background = color
        }
    })
}
changeOnEnter()

function boxMaker(){
    for(let i = 0; i < 8000; i++){
        let box = document.createElement('div')
        box.classList.add('square')
        body.appendChild(box)
    }
}
boxMaker()

function mouseoverEvent(){
    const boxes = document.querySelectorAll('.square')
    for(let i = 0; i < boxes.length; i++){
        boxes[i].addEventListener('mouseover', function(){
            this.style.background = color
        })
    }
}
mouseoverEvent()

function makeSwatches(){
    for(let i = 0; i < 3; i++){
        let swatch = document.createElement('div')
        let uniqueId = i + 1
        swatch.setAttribute('class', 'swatch')
        swatch.setAttribute('color', '')
        body.appendChild(swatch)
    }
}
makeSwatches()


const swatchOne = document.querySelectorAll('.swatch')[0]
const swatchTwo = document.querySelectorAll('.swatch')[1]
const swatchThree = document.querySelectorAll('.swatch')[2]

function changeSwatch(){
     let recent = document.querySelector('#color-field').value;
     let middle = swatchTwo.getAttribute('color');
     let oldest = swatchOne.getAttribute('color');

     swatchThree.style.backgroundColor = middle;
     swatchThree.setAttribute('color', middle);
     swatchTwo.style.backgroundColor = oldest;
     swatchTwo.setAttribute('color',oldest);
     swatchOne.style.backgroundColor = recent;
     swatchOne.setAttribute('color', recent);

}
