/* window.onload = function()
{
    document.querySelector('h1').textContent = "Hello World";
}; */
 // or

/* window.addEventListener('load', () => (document.querySelector('h1').textContent = 'Hello World')); */
 // or

window.addEventListener('DOMContentLoaded',() => (document.querySelector('h1').textContent = 'Hello World'));

window.addEventListener('resize',() => document.querySelector('h1').innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`);

window.addEventListener('scroll', () => console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`));