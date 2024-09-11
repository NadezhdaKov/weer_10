let text = () => {
    console.log ('Я учу JavaScript!')
};
text();

let img_container=document.getElementsByClassName('img_container');
let image=document.getElementById('img_container-elem');

function showPreviousCat() {
    image.src='./assets/img_cat_2.jpg';
}

function showNextCat() {
    image.src='./assets/img_cat_1.jpg';
}

