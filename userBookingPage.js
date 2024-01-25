// js slider
const ResponsiveSlider = () => {
     const fustalImage = document.querySelector('.fustal-box');
     const slideButtons = document.querySelectorAll('.slide-button');
     const maxScrollLeft = fustalImage.scrollWidth - fustalImage.clientWidth;
 
     let currentIndex = 0; // Keep track of the current slide index
 
     const handleSlideButtons = () => {
         slideButtons[0].style.display = currentIndex === 0 ? 'none' : 'block';
         slideButtons[1].style.display = currentIndex === maxScrollLeft ? 'none' : 'block';
     };
 
     const moveSlide = (direction) => {
         currentIndex += direction;
         const scrollAmt = fustalImage.clientWidth * currentIndex;
         fustalImage.scrollLeft = scrollAmt;
         handleSlideButtons();
     };
 
     slideButtons.forEach(button => {
         button.addEventListener('click', () => {
             const direction = button.id === 'prev-slide' ? -1 : 1;
             moveSlide(direction);
         });
     });
 
     const handleResize = () => {
         maxScrollLeft = fustalImage.scrollWidth - fustalImage.clientWidth;
         currentIndex = Math.min(currentIndex, maxScrollLeft);
         fustalImage.scrollLeft = currentIndex * fustalImage.clientWidth;
         handleSlideButtons();
     };
 
     // Event listeners
     fustalImage.addEventListener('scroll', () => {
         currentIndex = Math.round(fustalImage.scrollLeft / fustalImage.clientWidth);
         handleSlideButtons();
     });
 
     window.addEventListener('resize', handleResize);
     handleSlideButtons(); // Initial setup
 };
 window.addEventListener('load', ResponsiveSlider);



const lists = document.querySelector('.list');
function welcome(){
     lists.classList.toggle('listshow');
}
function menubar(){
     lists.classList.toggle('listshow');
}
function fustImag(){
     document.querySelector('.container').style.display = 'none';
     document.querySelector('.fdes1').style.display = 'block';
}
function fustImag1(){
     document.querySelector('.container').style.display = 'none';
     document.querySelector('.fdes2').style.display = 'block';
}
function fustImag2(){
     document.querySelector('.container').style.display = 'none';
     document.querySelector('.fdes3').style.display = 'block';
}
function fustImag3(){
     document.querySelector('.container').style.display = 'none';
     document.querySelector('.fdes4').style.display = 'block';
}
function fustImag4(){
     document.querySelector('.container').style.display = 'none';
     document.querySelector('.fdes5').style.display = 'block';
}


function Book1(){
     document.querySelector('.booking1').style.display = 'block';
}
function Book2(){
     document.querySelector('.booking2').style.display = 'block';
}
function Book3(){
     document.querySelector('.booking3').style.display = 'block';
}
function Book4(){
     document.querySelector('.booking4').style.display = 'block';
}
function Book5(){
     document.querySelector('.booking5').style.display = 'block';
}

// Js for date
const after3days = document.querySelectorAll('.after3days');
const d = new Date();

d.setDate(d.getDate()+2);
after3days.forEach(item =>{
    item .innerHTML = d.toLocaleString('default',{day: 'numeric', month: 'short'})
})

// Booking-Time
const bookingTime1 = document.querySelector('.booking-time1');
const bookingTime2 = document.querySelector('.booking-time2');
const bookingTime3 = document.querySelector('.booking-time3');
const bookingTime4 = document.querySelector('.booking-time4');
const bookingTime5 = document.querySelector('.booking-time5');
const Today = document.querySelectorAll('.today');
 
Today.forEach((item,index) =>{
     if(index === 0){
          item.addEventListener('click',(e)=>{
               e.preventDefault();
               bookingTime1.style.display = 'block';
               tomorrowBooking1.style.display = 'none';
          })
     }
     if(index === 1){
          item.addEventListener('click',(e)=>{
               e.preventDefault();
               bookingTime2.style.display = 'block';
               tomorrowBooking2.style.display = 'none';
          })
     }
     if(index === 2){
          item.addEventListener('click',(e)=>{
               e.preventDefault();
               bookingTime3.style.display = 'block';
          })
     }
     if(index === 3){
          item.addEventListener('click',(e)=>{
               e.preventDefault();
               bookingTime4.style.display = 'block';
              
          })
     }
     if(index === 4){
          item.addEventListener('click',(e)=>{
               e.preventDefault();
               bookingTime5.style.display = 'block';
           
          })
     }
});


function cancel(){
     document.querySelector('.fdes1').style.display = 'none';
     document.querySelector('.fdes2').style.display = 'none';
     document.querySelector('.fdes3').style.display = 'none';
     document.querySelector('.fdes4').style.display = 'none';
     document.querySelector('.fdes5').style.display = 'none';
     document.querySelector('.booking1').style.display = 'none';
     document.querySelector('.booking2').style.display = 'none';
     document.querySelector('.booking3').style.display = 'none';
     document.querySelector('.booking4').style.display = 'none';
     document.querySelector('.booking5').style.display = 'none';
     document.querySelector('.booking-time1').style.display = 'none';
     document.querySelector('.booking-time2').style.display = 'none';
     document.querySelector('.booking-time3').style.display = 'none';
     document.querySelector('.booking-time4').style.display = 'none';
     document.querySelector('.booking-time5').style.display = 'none';       
     document.querySelector('.container').style.display = 'block';
};


 



