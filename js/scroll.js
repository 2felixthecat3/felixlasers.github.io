const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show');
        }
    });
});



const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const showElements = document.querySelectorAll('.show');
showElements.forEach((element, index) => {
    const delay = index * 200; // Adjust the delay as needed
    element.style.transitionDelay = `${delay}ms`;
});
