const Heap = require("../src/heap");

describe("Heap", () => {
  test("should push and get top correctly (Max-Heap)", () => {
    const maxHeap = new Heap();
    maxHeap.push(3);
    maxHeap.push(1);
    maxHeap.push(4);
    expect(maxHeap.top()).toBe(4);
  });

  test("should pop correctly (Max-Heap)", () => {
    const maxHeap = new Heap();
    maxHeap.push(3);
    maxHeap.push(1);
    maxHeap.push(4);
    maxHeap.pop();
    expect(maxHeap.top()).toBe(3);
  });

  test("should work as Min-Heap", () => {
    const minHeap = new Heap((a, b) => a > b);
    minHeap.push(3);
    minHeap.push(1);
    minHeap.push(4);
    expect(minHeap.top()).toBe(1);
  });

  test("should throw error when popping empty heap", () => {
    const maxHeap = new Heap();
    expect(() => maxHeap.pop()).toThrow("Heap is empty");
  });
});
