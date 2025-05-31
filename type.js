let question = [
    {
        
        questions : 'Best Social media platform',
        button : [
        { id:1,  text: "Facebook"},
        { id: 2, text: "WhatsApp" },
        { id :3, text : "Instagram" }      
        ],
        input : false
        
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
    // let inputUser = current.input;
     
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
     outList = []
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
        btnNext.innerHTML ='Reach'
        let result = outList[0]
        let result2 = outList[2]
      let box =  document.querySelector('.box')
        const re1 = document.createElement('p')
        re1.textContent = "You Favourite Social " + result.occpation
        const re2 = document.createElement('p')
        re2.textContent = "Yoor Job is " + result2.occpation
        console.log(re1, re2);

        
       
    }
}


function goNext() {
    index++
    if (index < question.length) {
        continueFun()
        storeId()
    }
}

btnNext.addEventListener('click', ()=> {
     if (index < question.length) {
        goNext();
    }else{
        showOutCome();
    }
});


console.log(outList);