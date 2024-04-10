let sentence = '';
    let screen = document.querySelector(".display");
    screen.innerText = JSON.parse(localStorage.getItem('result'));
    function store(res) {
        if (localStorage.getItem('result') !== null) {
            localStorage.setItem('result',JSON.stringify(res));
            screen.innerText = JSON.parse(localStorage.getItem('result'));
        }
        else {
            localStorage.setItem('result',JSON.stringify(res));
    }
}
    function displaySentence (value) {
        sentence += value;
        screen.innerText = sentence;
    }
    function calculation () {
        let result = eval(sentence);
        store(result);
        sentence = '';
        screen.innerText = result;
    }
    function clear () {
        screen.innerText = " ";
        console.log("clear");
        localStorage.removeItem('result')
    }