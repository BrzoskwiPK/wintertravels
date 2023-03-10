const imagesSlider = new Array("../images/murmansk.jpg", "../images/rejs.jpg", "../images/spitsbergen.jpg", "../images/port.jpg", "../images/lodolamacz.jpg", "../images/icecap.jpg", "../images/ciesnina.jpg", "../images/island.jpg");

let currentIndex = 0;

const handlePreviousSlide = () => {
    if (currentIndex === 0) 
        currentIndex = imagesSlider.length;
    currentIndex--;

    let imageSrc = document.querySelector('.offersImage');
    let placeName = document.querySelector('.sliderName');
    let lowerPrice = document.querySelector('.smallCost');
    let higherPrice = document.querySelector('.highCost');
    
    switch(currentIndex) {
        case 0:
            imageSrc.src.src = imagesSlider[currentIndex];
            placeName.innerHTML = "Murmańsk";
            higherPrice.innerHTML = "2500 zł";
            lowerPrice.innerHTML = "2199 zł";
            break;
        case 1:
            imageSrc.src = imagesSlider[currentIndex];
            placeName.innerHTML = "Rejs po Arktyce";
            higherPrice.innerHTML = "6299 zł";
            lowerPrice.innerHTML = "5999 zł";
            break;
        case 2:
            imageSrc.src = imagesSlider[currentIndex];
            placeName.innerHTML = "Spitsbergen";
            higherPrice.innerHTML = "1600 zł";
            lowerPrice.innerHTML = "1400 zł";
            break;
        case 3:
            imageSrc.src = imagesSlider[currentIndex];
            placeName.innerHTML = "Port Lockroy";
            higherPrice.innerHTML = "3399 zł";
            lowerPrice.innerHTML = "3200 zł";
            break;
        case 4:
            imageSrc.src = imagesSlider[currentIndex];
            placeName.innerHTML = "Lodołamaczem po Biegunie";
            higherPrice.innerHTML = "5000 zł";
            lowerPrice.innerHTML = "4000 zł"; 
            break; 
        case 5:
            imageSrc.src = imagesSlider[currentIndex];
            placeName.innerHTML = "IceCap";
            higherPrice.innerHTML = "2145 zł";
            lowerPrice.innerHTML = "2000 zł";
            break;
        case 6:
            imageSrc.src = imagesSlider[currentIndex];
            placeName.innerHTML = "Cieśnina Bransfielda";
            higherPrice.innerHTML = "3000 zł";
            lowerPrice.innerHTML = "2500 zł";
            break;
        case 7:
            imageSrc.src = imagesSlider[currentIndex];
            placeName.innerHTML = "Deception Island";
            higherPrice.innerHTML = "2700 zł";
            lowerPrice.innerHTML = "1500 zł";
            break;
    }
}

const handleNextSlide = () => {
    currentIndex++;

    if (currentIndex === imagesSlider.length)
        currentIndex = 0;

    let imageSrc = document.querySelector('.offersImage');
    let placeName = document.querySelector('.sliderName');
    let lowerPrice = document.querySelector('.smallCost');
    let higherPrice = document.querySelector('.highCost');

    switch(currentIndex) {
        case 0:
            imageSrc.src = imagesSlider[currentIndex];
            placeName.innerHTML = "Murmańsk";
            higherPrice.innerHTML = "2500 zł";
            lowerPrice.innerHTML = "2199 zł";
            break;
        case 1:
            imageSrc.src = imagesSlider[currentIndex];
            placeName.innerHTML = "Rejs po Arktyce";
            higherPrice.innerHTML = "6299 zł";
            lowerPrice.innerHTML = "5999 zł";
            break;
        case 2:
            imageSrc.src = imagesSlider[currentIndex];
            placeName.innerHTML = "Spitsbergen";
            higherPrice.innerHTML = "1600 zł";
            lowerPrice.innerHTML = "1400 zł";
            break;
        case 3:
            imageSrc.src = imagesSlider[currentIndex];
            placeName.innerHTML = "Port Lockroy";
            higherPrice.innerHTML = "3399 zł";
            lowerPrice.innerHTML = "3200 zł";
            break;
        case 4:
            imageSrc.src = imagesSlider[currentIndex];
            placeName.innerHTML = "Lodołamaczem po Biegunie";
            higherPrice.innerHTML = "5000 zł";
            lowerPrice.innerHTML = "4000 zł"; 
            break;
        case 5:
            imageSrc.src = imagesSlider[currentIndex];
            placeName.innerHTML = "IceCap";
            higherPrice.innerHTML = "2145 zł";
            lowerPrice.innerHTML = "2000 zł";
            break;
        case 6:
            imageSrc.src = imagesSlider[currentIndex];
            placeName.innerHTML = "Cieśnina Bransfielda";
            higherPrice.innerHTML = "3000 zł";
            lowerPrice.innerHTML = "2500 zł";
            break;
        case 7:
            imageSrc.src = imagesSlider[currentIndex];
            placeName.innerHTML = "Deception Island";
            higherPrice.innerHTML = "2700 zł";
            lowerPrice.innerHTML = "1500 zł";
            break;
    }
}