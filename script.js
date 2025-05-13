// Smooth scrolling for dropdown links
document.querySelectorAll('.dropdown-content a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Waste Slide Deck Data
const wasteSlides = {
    types_of_waste: [
        './images/wasteslidecover.JPG',
        './images/testingdogeim.JPG',

    ],
    how_to_find: [
        './images/wasteslidecover.JPG',
        './images/testingdogeim.JPG'
    ]
};

let wasteCurrentTopic = 'types_of_waste';
let wasteCurrentSlide = 0;

function wasteChangeTopic() {
    const select = document.getElementById('waste-topic-select');
    if (!select) return; // Exit if not on waste page
    wasteCurrentTopic = select.value;
    wasteCurrentSlide = 0;
    wasteUpdateSlide();
}

function wasteUpdateSlide() {
    const slideImage = document.getElementById('waste-slide-image');
    if (!slideImage) return; // Exit if not on waste page
    const pdfButton = document.querySelector('.waste-slidepdf-btn');
    
    slideImage.src = wasteSlides[wasteCurrentTopic][wasteCurrentSlide];
    slideImage.alt = `Slide ${wasteCurrentSlide + 1}`;
}

function wastePrevSlide() {
    if (wasteCurrentSlide > 0) {
        wasteCurrentSlide--;
        wasteUpdateSlide();
    }
}

function wasteNextSlide() {
    if (wasteCurrentSlide < wasteSlides[wasteCurrentTopic].length - 1) {
        wasteCurrentSlide++;
        wasteUpdateSlide();
    }
}

// Flashcard Slide Deck Data
const flashcardSlides = {
    wind_energy: [
        './images/rantsflashcards.JPG', './wasteim/wasteimpicone.JPG'],
    locals_only: [
        './images/localsonlyone.JPG', './images/localsonlytwo.JPG',  './images/localsonlythree.JPG',
     './images/localsonlyfour.JPG',
     './images/localsonlyfive.JPG',
     './images/localsonlysix.JPG',
     './images/localsonlyseven.JPG'
    ],
    rants_highlights: [
        './wasteim/wasteimpic11.JPG', './wasteim/wasteimpicone.JPG'],
    ngo_shuffle: [
        './wasteim/wasteimpic11.JPG', './wasteim/wasteimpicone.JPG'],
    CA_climate: [
        './wasteim/wasteimpic11.JPG', './wasteim/wasteimpicone.JPG'],
    measurement_calibration: [
        './wasteim/wasteimpic11.JPG', './wasteim/wasteimpicone.JPG'],  
    the_screws: [
        './wasteim/wasteimpic11.JPG', './wasteim/wasteimpicone.JPG']      
};

let flashcardCurrentTopic = 'wind_energy';
let flashcardCurrentSlide = 0;

function flashcardChangeTopic() {
    const select = document.getElementById('flashcard-topic-select');
    if (!select) return; // Exit if not on flashcard page
    flashcardCurrentTopic = select.value || 'wind_energy';
    flashcardCurrentSlide = 0;
    console.log('flashcardChangeTopic triggered. Topic:', flashcardCurrentTopic);
    flashcardUpdateSlide();
}

function flashcardUpdateSlide() {
    const slideImage = document.getElementById('flashcard-slide-image');
    if (!slideImage) return; // Exit if not on flashcard page
    const pdfButton = document.querySelector('.flashcard-slidepdf-btn');

    if (flashcardSlides[flashcardCurrentTopic] && flashcardSlides[flashcardCurrentTopic].length > 0) {
        slideImage.src = flashcardSlides[flashcardCurrentTopic][flashcardCurrentSlide];
        slideImage.alt = `Flashcard Slide ${flashcardCurrentSlide + 1}`;
        console.log('Image src set to:', slideImage.src);
    } else {
        console.error('No slides for topic:', flashcardCurrentTopic);
        slideImage.src = './images/rantsflashcards.jpg';
        slideImage.alt = 'No slides available';
    }
}

function flashcardPrevSlide() {
    if (flashcardCurrentSlide > 0) {
        flashcardCurrentSlide--;
        console.log('Previous slide:', flashcardCurrentSlide);
        flashcardUpdateSlide();
    }
}

function flashcardNextSlide() {
    if (flashcardCurrentSlide < flashcardSlides[flashcardCurrentTopic].length - 1) {
        flashcardCurrentSlide++;
        console.log('Next slide:', flashcardCurrentSlide);
        flashcardUpdateSlide();
    }
}

// Initialize based on page
if (document.getElementById('waste-slide-image')) {
    wasteUpdateSlide();
}

if (document.getElementById('flashcard-slide-image')) {
    flashcardUpdateSlide();
}