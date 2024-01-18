let container=document.querySelector(".container");
let button=document.querySelector(".button");
let btn=document.createElement('button');
btn.innerHTML="Load More";
button.append(btn);

const URL="https://fakestoreapi.com/products";
let meesho=async()=>{
let responce=await fetch(URL);
let data=await responce.json();
let i=0;
btn.addEventListener('click',()=>{
    let count=0;
    while(i<data.length&&count<3){
        let images=document.createElement('div');
        images.classList.add('loadimages');
        images.innerHTML=`<img src="` +data[i].image +`" alt=""></img><br>`;
        container.append(images);
        count++;
        i++;
    }
    if(i==data.length){
        btn.style.display="none";
    }

});
};
meesho();

