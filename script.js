function myMove() {
    console.log(document.getElementById('lift'));
    return;
    const elem = this.document.getElementById("lift");
    console.log(elem);
    return;
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}
myMove();