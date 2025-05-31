let question = [
    {
        
        questions : 'What is your name!',
        button : [],
        input : true
        
    },
    {
        questions : "What best match you occupation",
        button :[
        { id:1,  text: "web develper"},
        { id: 2, text: "Banker" },
        { id :3, text : "Solder" }      
        ],
        input : false
    },
    {
        
        questions : "What is your age",
        button : [],
        input : true
    }
]

const questionUser = document.querySelector('.question')
const btnContainer = document.querySelector('.btn-container');
let btnNext = document.getElementById('next');
let outList = []

let index = 0;

function start() {
    let index = 0;
    continueFun()
}
start()

function  continueFun() {
    btnContainer.innerHTML =''
    let current = question[index];
        questionUser.textContent = current.questions;
     current.button.forEach(btn => {
         let btnn = document.createElement('button');
         btnn.innerHTML = btn.text;
         btnn.classList = 'option'
         btnn.dataset.id = btn.id
         btnContainer.appendChild(btnn);
     });
    let inputUser = current.input;
     update(inputUser);
     
}

function update(inputUser){
    let inputContainer = document.querySelector('.input-container')
    if(inputUser === true){
        let createInput = document.createElement('input');        
        if(index == 0){
            createInput.setAttribute('placeholder', 'your name');
        }else if(index == 2){
            createInput.setAttribute('placeholder', 'your age')
            createInput.type = 'number'   
        }
        inputContainer.appendChild(createInput);
    }else{
        inputContainer.innerHTML = ''
    }
}



btnContainer.addEventListener('click', (e)=> {
    const eventClick = e.target;
    if (eventClick.classList.contains('option')){
    let getData = eventClick.dataset.id;
     const list = eventClick.innerHTML
        storeId(getData, list)
        return
    }
});

function storeId(dataId, job){
    let wrtingIndex = dataId;
    let findMethod = outList.find((item)=> item.id === wrtingIndex)
    if(findMethod){
        console.log('Exist');
    }else{
    outList.push ({
        id : wrtingIndex,
        occpation: job,

    });
}
console.log(outList);
}

function showOutCome() {
    if (index >= question.length) {
        console.log('Reach');
        let result = outList;

        result.forEach(re => {
            document.querySelector('.box').innerHTML =   `
            <h2>Occupation : ${re.occpation}</h2>
        `
        })
        
       
    }
}


function goNext() {
    index++
    if (index < question.length) {
        update()
        continueFun()
        storeId()
    }
}

btnNext.addEventListener('click', ()=> {
    fixName()
     if (index < question.length) {
        goNext();
    }else{
        showOutCome();
    }
});
function fixName() {
  const inputFelid = document.querySelector('input').value
    if(index === 0) {
        outList.push({
            name: inputFelid
        })
    // }else if(index >= question.length){
    //         outList.push({
    //             Age: inputFelid
    //     });
    }
}
console.log(outList);