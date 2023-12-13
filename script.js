
var isAnimated = false;

function OpenCard()
{
    console.log('Clicked')
    var card = document.querySelector('.card');

    if (isAnimated) {
        return;
    }

    card.classList.toggle('open');

    if (card.classList.contains('open')) {
        isAnimated = true;
     }

    if(card.classList.contains('open')) {
        var content = "Content of Christmas card  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

        typingEffect(content, function() {
            isAnimated = false;
        });
    }
}

function typingEffect(content, callback) {
    var typingText = document.getElementById('typing-text');
    typingText.textContent = "";

    for (let i = 0; i <content.length; i++) {
        setTimeout(function () {
            typingText.textContent += content[i];

            if(i === content.length - 1) {
                callback();
            }
        }, i * 70);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var floatImages = document.querySelectorAll('.floating-image');
    floatImages.forEach(function (image) {
        var randomX = Math.random() * (window.innerWidth - image.width);
        var randomY = Math.random() * (window.innerHeight - image.height);

        image.style.left = randomX + 'px';
        image.style.top = randomY + 'px';

        var randomDuration = Math.random() * 5 + 2;
        var randomDelay = Math.random() * 5;
        var randomDirection = Math.random() < 0.5 ? 'normal' : 'reverse';

        image.style.animationDuration = randomDuration + 's';
        image.style.animationDelay = '-' + randomDelay + 's';
        image.style.animationDirection = randomDirection;
    });
})

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        var preloader = document.querySelector('.preloader');
        var content = document.querySelector('.content');

        preloader.classList.add('hidden');

        //remove preloader after it hidden
        preloader.addEventListener('transitionend', function () {
            preloader.remove();
        })
    }, 3000);
})


const songs = [
   './music/BGMusic/1.mp3',
   './music/BGMusic/2.mp3',
   './music/BGMusic/3.mp3',
];

function getRandomSong() {
    const randomIndex = Math.floor(Math.random() * songs.length);
    return songs[randomIndex];
}
document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('bgMusic');

    audio.src = getRandomSong();
});