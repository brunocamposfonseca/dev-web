let delNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 16, 17, 18, 19, 23, 24, 25, 26, 27, 28, 29, 34, 35, 36, 37, 38, 39, 45, 46, 47, 48, 49, 56, 57, 58, 59];
let selectNum = [];

class Piece {
    num1;
    num2;
    constructor(draw) {
        this.draw = String(draw);
    }

    get num(){
        return this.draw
    }

    get piece() {
        this.num1 = this.draw[0];
        this.num2 = this.draw[1];
        return `<svg width="50" height="100" viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="5" width="90" height="190" rx="10" ry="10" fill="white" stroke="black" stroke-width="5"/>
                    <line x1="5" y1="100" x2="95" y2="100" stroke="black" stroke-width="5"/>
                    
                </svg>`
    }
}

function randomNum() {
    let draw;
    do {
        draw = Math.floor(Math.random() * 67);
    } while (delNum.includes(draw) || selectNum.includes(draw));

    return draw;
}

for (let i = 0; i < 7; i++) {
    let draw = randomNum();
    selectNum.push(draw);
    let piece = new Piece(draw);
    document.body.innerHTML += `<p>${piece.piece}</p>`;
    console.log(piece.num)
}