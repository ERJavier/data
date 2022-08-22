const array = ["javi", "dani", "pollo"];
array.push("ana");

console.log(array[3]);

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}
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

const MyArray = new MyArray();