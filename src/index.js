const array = ["javi", "dani", "pollo"];
array.push("ana");

console.log(array[3]);

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

    pop() { 
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length -1];
        this.length--;
        return lastItem;
    }
    delete() {
        
    }
}

const yArray = new MyArray();

console.log(yArray.get(0));
console.log(yArray.length);



console.log(yArray.length);
