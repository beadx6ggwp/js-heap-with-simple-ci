class Heap {
  constructor(compare = (a, b) => a < b) {
    this.data = [];
    this.cmp = compare; // 預設為 Max-Heap (a < b)
  }

  push(value) {
    console.log(`Pushing value: ${value}`);
    if (this.data.length >= 1000) throw new Error("Heap is full");
    this.data.push(value);
    this.heapifyUp(this.data.length - 1);
  }

  pop() {
    if (this.isEmpty()) throw new Error("Heap is empty");
    const result = this.data[0];
    this.data[0] = this.data.pop();
    if (!this.isEmpty()) this.heapifyDown(0);
    return result;
  }

  top() {
    if (this.isEmpty()) throw new Error("Heap is empty");
    return this.data[0];
  }

  isEmpty() {
    return this.data.length === 0;
  }

  size() {
    return this.data.length;
  }

  heapifyUp(index) {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this.cmp(this.data[parent], this.data[index])) {
        [this.data[parent], this.data[index]] = [
          this.data[index],
          this.data[parent],
        ];
        index = parent;
      } else {
        break;
      }
    }
  }

  heapifyDown(index) {
    let minIndex = index;
    while (true) {
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      if (
        left < this.data.length &&
        this.cmp(this.data[minIndex], this.data[left])
      ) {
        minIndex = left;
      }
      if (
        right < this.data.length &&
        this.cmp(this.data[minIndex], this.data[right])
      ) {
        minIndex = right;
      }
      if (minIndex === index) break;
      [this.data[index], this.data[minIndex]] = [
        this.data[minIndex],
        this.data[index],
      ];
      index = minIndex;
    }
  }
}

module.exports = Heap;
