const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

// Disable / Enable button
function toggleButton() {
    button.disabled = !button.disabled;
}

// Passing Joke to VoiceRSS API
function tellMe(joke) {
    VoiceRSS.speech({
        key: '035a0e3a447446d2bcb30dd60beae0fa',
        src: joke,
        hl: 'fr-FR',
        v: 'Linda',
        r: 0,
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}

// Get Jokes from Jokes API
async function getJokes() {
    // API URL
    const apiUrl = 'https://v2.jokeapi.dev/joke/Any?lang=fr';

    let joke = '';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.setup) {
            joke = `${data.setup} ... ${data.delivery}`;
        } else {
            joke = data.joke;
        }
        // Text-to-speech
        tellMe(joke);
        // Disable Button
        toggleButton();
    } catch (error) {
        console.log('Error with API', error);
    }
}

// Event Listeners
button.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleButton);