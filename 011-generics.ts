class BulkData<T>{
    items: Array<T> = [];

    add(item: T){
        this.items.push(item);
    }
    remove(item: T){
        const index = this.items.findIndex(i => i === item);
        this.items.splice(index, 1);
        return this.items;
    }
}

const myData = new BulkData<number>();
myData.add(1);
myData.add(3);
myData.remove(2);

const myData2 = new BulkData<string>();
myData2.add("raz");
myData2.add("jaz");
myData2.remove("jaz");

