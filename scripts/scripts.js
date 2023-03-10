const toggleClasses = () => {
    const navigationElement = document.querySelector('.navigation');

    navigationElement.className === "navigation" ? navigationElement.className += " responsive" : navigationElement.className = "navigation";
}

setInterval(() => {
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
    document.querySelector('.footer').innerHTML = `Copyright 2020 &copy; Gabriel Brzoskwinia, IIIF ZSE. Data: ${currentDate} ${currentTime}`;
}, 1000);