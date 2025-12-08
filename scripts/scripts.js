const nextBtn= document.getElementById("next");
const prevBtn= document.getElementById("prev");
const sliderLine = document.getElementById("slider__line");



const arr = [
    "https://images.steamusercontent.com/ugc/52453354080448818/543783B601D5A853E3F50907B9722A314DFD92B6/?imw=512&amp;imh=320&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true",
    "https://media.istockphoto.com/id/1419410282/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%82%D0%B8%D1%85%D0%B8%D0%B9-%D0%BB%D0%B5%D1%81-%D0%B2%D0%B5%D1%81%D0%BD%D0%BE%D0%B9-%D1%81-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%BC%D0%B8-%D1%8F%D1%80%D0%BA%D0%B8%D0%BC%D0%B8-%D1%81%D0%BE%D0%BB%D0%BD%D0%B5%D1%87%D0%BD%D1%8B%D0%BC%D0%B8-%D0%BB%D1%83%D1%87%D0%B0%D0%BC%D0%B8.jpg?s=612x612&w=0&k=20&c=JekK-RNumyvN0CDJ1WMyF3-FEFyNH8LUsr5nG8WTwWg=",
    "https://media.istockphoto.com/id/1365094219/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B8%D0%BD%D0%BE%D0%BF%D0%BB%D0%B0%D0%BD%D0%B5%D1%82%D0%BD%D0%BE%D0%B5-%D1%81%D1%83%D1%89%D0%B5%D1%81%D1%82%D0%B2%D0%BE-%D0%B2-%D0%BB%D0%B5%D1%81%D1%83.jpg?s=612x612&w=0&k=20&c=HjDDAqSv7psoENhUn2C0cODacHq4Xsgd-8QJe8NhuNE="

]

const getImageTemplate = (pathToImage) => {
    return `<img 
    class="slider__image"
    src="${pathToImage}"
    alt="slider image"
    />`;
}

const IMAGE_WIDTH = 500;
const IMAGES_TOTAL_COUNT = arr.length;
let currentImageIndex = 0;
sliderLine.style.width = `${IMAGE_WIDTH * IMAGES_TOTAL_COUNT}px`;

sliderLine.innerHTML = "";
sliderLine.innerHTML = arr.map((el) => getImageTemplate(el)).join("");


const next = () => {
    currentImageIndex++;

    if (currentImageIndex == IMAGES_TOTAL_COUNT) {
        currentImageIndex = 0;
    }

    sliderLine.style.left = `-${currentImageIndex * IMAGE_WIDTH}px`;

}


const prev = () => {
    currentImageIndex--;

    //console.log(currentImageIndex) для прверки индекса

    if (currentImageIndex == -1) {
        currentImageIndex = IMAGES_TOTAL_COUNT - 1;
    }

    sliderLine.style.left = `-${currentImageIndex * IMAGE_WIDTH}px`;

}

nextBtn.onclick = next;
prevBtn.onclick = prev;

setInterval(next, 5000);