window.onload = () => {
    document.querySelector('#excuse').innerHTML = excuseGen();
};

function excuseGen() {
    let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];
    
    let numeroWho = Math.floor(Math.random()*4);
    let numeroAction = Math.floor(Math.random()*4);
    let numeroWhat = Math.floor(Math.random()*3);
    let numeroWhen = Math.floor(Math.random()*5);

    return who[numeroWho] + ' ' + action[numeroAction] + ' ' + what[numeroWhat] + ' ' + when[numeroWhen];
}
