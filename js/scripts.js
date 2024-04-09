let position=0;
const slidesToShow=3;
const slidesToScroll=1;
const container=document.querySelector('.slider-container');
const track=document.querySelector('.slider-track');
const btnPrev=document.querySelector('.btn-prev');
const btnNext=document.querySelector('.btn-next');
const items=document.querySelectorAll('.slider-item');
const iremsCount=items.length;
const itemWidth=container.clientWidth/slidesToShow;
const movePosition=slidesToScroll*itemWidth;

items.forEach((item)=>{
    item.style.minWidth=`${itemWidth}px`;
});

btnNext.addEventListener('click',()=>{
    const itemsLeft= iremsCount-(Math.abs(position)+slidesToShow*itemWidth)/itemWidth;
    position-=itemsLeft>=slidesToScroll?movePosition:itemsLeft*itemWidth;
    setPosition();
    checkBtns();
})
btnPrev.addEventListener('click',()=>{
    const itemsLeft= Math.abs(position)/itemWidth;
    position+=itemsLeft>=slidesToScroll?movePosition:itemsLeft*itemWidth;
    setPosition();
    checkBtns();
})
const setPosition=()=>{
    track.style.transform=`translateX(${position}px)`;
}
const checkBtns=()=>{
    btnPrev.disabled=position===0;
    btnNext.disabled=position<=-(iremsCount-slidesToShow)*itemWidth;
};
checkBtns();


document.addEventListener('DOMContentLoaded',function(){
    const links=document.querySelectorAll(".smooth-scroll");
    for(let i=0;i<links.length;i++){
        links[i].addEventListener("click",function(event){
            event.preventDefault();
            const blockID=event.target.getAttribute("href").substr(1);
            document.getElementById(blockID).scrollIntoView({
                behavior:"smooth",
                block:"start",
            });
        })
    }
})
var numbers = document.querySelectorAll('.cifr');

numbers.forEach(function(number) {
  var numberTop = number.getBoundingClientRect().top;
  var start = +number.innerHTML;
  var end = +number.dataset.max;
  var reached = false;

  window.addEventListener('scroll', function onScroll() {
    if (!reached && window.pageYOffset > numberTop - window.innerHeight / 2) {
      reached = true;
      var interval = setInterval(function() {
        number.innerHTML = start += (end === 20000 ? 100 : 1); // Используйте шаг 100 только для числа 20000
        if (start >= end) {
          clearInterval(interval);
        }
      }, end === 20000 ? 1 : 50);
    }
  });
});


