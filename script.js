
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
        var content = "Hellu Zyzy!<br>Vậy là đã đến Giáng Sinh rùi, không biết ngày này cậu có mong sẽ được đi chơi cùng với anh ni đẹp trai hay không mà từ sáng đến giờ ông già Noel cứ cố bắt tớ đi nè!";

        typingEffect(content, function() {
            isAnimated = false;
        });
    }
}

function typingEffect(content, callback) {
    var typingText = document.getElementById('typing-text');
    typingText.innerHTML = "";

    var words = content.split(' ');
    var wordIndex = 0;

    function typeNextWord() {
        if(wordIndex < words.length) {
            typingText.innerHTML += words[wordIndex] + ' ';
            wordIndex++;
            setTimeout(typeNextWord, 90);
        } else {
            callback();
        }
    }
    typeNextWord();

    // for (let i = 0; i <content.length; i++) {
    //     setTimeout(function () {
    //         typingText.textContent += content[i];

    //         if(i === content.length - 1) {
    //             callback();
    //         }
    //     }, i * 70);
    // }
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

    var soundPermission = localStorage.getItem('soundPermission');

    function playBGM() {
        audio.src = getRandomSong();
        audio.play();
    }

    if(soundPermission == 'allowed') {
        // sound is allowed
        playBGM();
    } else {
        // sound not allowed => create button
        var allowSoundButton = document.createElement('button');
        allowSoundButton.textContent = "Allow Sound";
        allowSoundButton.addEventListener('click', function () {
            localStorage.setItem('soundPermission', 'allowed');

            playBGM();

            allowSoundButton.remove();
        });
        document.body.appendChild(allowSoundButton);
    }

    document.addEventListener('click', function () {
        if(audio.pause && soundPermission == 'allowed') {
            audio.play();
        }
    });
});