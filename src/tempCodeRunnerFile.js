class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    get(index) {
        return this.data[index];
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data
    }
}

const yArray = new MyArray();

yArray.push("javi");
yArray.push("juli");
console.log(yArray.length);
yArray.push("jose");
yArray.push("mina");

console.log(yArray.get(0));
console.log(yArray.length);


yArray.pop

console.log(yArray.length);