const panels = document.querySelectorAll('.panel');
//below listens for click and centers panel selected
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})
//below removes the previous active panel so new one can display
function removeActiveClasses(){
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}