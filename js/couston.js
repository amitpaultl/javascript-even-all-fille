const rede = document.getElementById('reb');
rede.onclick = function makeRed (){
    document.body.style.background = 'red';
}

document.getElementById('orangr').addEventListener('click', function(){
    document.body.style.background = 'pink'
})  

function handal(){

    const hander = document.getElementById('click');
    hander.innerText = 'Handal text toi on my'
}

document.getElementById('clivkr').addEventListener('click' , function(){
    const newni = document.getElementById('all');
    newni.innerText = '1100000222222003333' 
})

document.getElementById('cloiv').addEventListener('click', function(){
    const textArea = document.getElementById('tetx');
    const textValu = textArea.value;


    const inputVaul = document.getElementById('kuler');
    const addTag = document.createElement('p');
    addTag.innerText = textValu;
    inputVaul.appendChild(addTag);
    textArea.value = ''
    
    // textTag = textValu

})