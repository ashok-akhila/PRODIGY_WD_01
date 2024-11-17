const loading=document.querySelector('.loading');
const loadingText=document.querySelector('label');

let i=0;
const width =[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const interval=setInterval(()=>{
    loadingText.innerHTML = width[i]+'%';
    loading.style.width =width[i]+'%';
    i++;

    if(i==width.length){
        clearInterval(interval);
        loadingText.innerHTML="Completed";
        window.open("index.html", "_blank");

    }
},1000)