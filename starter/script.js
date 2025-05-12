'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalbtn = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
//If you use queryselector and there are more than one element with the same class name
//Only the first element will be selected. queryselectorAll should be used for more than one.

//Function that opens the modal
const openModal = function()
{
    console.log('Button Clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

//Function that closes the modal
const closeModal = function()
{
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

//Added an eventlistener that will call the function once the button is clicked
//For loop is used to loop through the buttons and add an eventlistener to each button
for(let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);


//Added an eventlistener that will call the function once the button is clicked
closeModalbtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//Adding keyboard events

//using escape keypress to close the modal
document.addEventListener('keydown', function(event)
{
    if(event.key === 'Escape' && !modal.classList.contains('hidden'))
    {
        closeModal();
    }
});