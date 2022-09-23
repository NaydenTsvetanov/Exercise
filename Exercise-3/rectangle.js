function rectangle(wid, hei, col) {

    let rect = {
        width: wid,
        height: hei,
        color: col[0].toUpperCase() + col.slice(1),
        calcArea() {
            return this.width * this.height;
        },
    };

    return rect;

}

let rect = rectangle(4, 5, 'red');

console.log(rect.width);

console.log(rect.height);

console.log(rect.color);

console.log(rect.calcArea());