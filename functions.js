// Making the navbar sticky using some javascript.
// All im saying here is to focus on the window then add to Events.
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>0);

});