export default class MinHeap {
    public length: number;
    public data: number[];
    

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }

    delete(): number {
        console.log(this.data);
        if (this.length === 0) {
            return -1;
        }

        const out = this.data[0];
        if (this.length === 1) {
            this.data = [];
            return out;
        }

        this.length--;
        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return out;
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private left_child(idx: number): number {
        return 2*idx + 1;
    }

    private right_child(idx: number): number {
        return 2*idx + 2;
    }

    private heapifyUp(idx: number): void{
        if (idx === 0) {
            return;
        }

        const parent = this.parent(idx);
        const parent_value = this.data[parent];

        if (parent_value > this.data[idx]) {
            const tmp = this.data[idx];
            this.data[parent] = this.data[idx];
            this.data[idx] = tmp;
            this.heapifyUp(parent);
        }
    }

    private heapifyDown(idx: number): void{
        
        const right_child_idx = this.right_child(idx);
        const left_child_idx = this.left_child(idx);

        if (idx >= this.length || left_child_idx >= this.length) {
            return
        }
        
        if (this.data[left_child_idx] > this.data[right_child_idx] && this.data[right_child_idx] > this.data[idx]) {
            this.swap(this.data[left_child_idx], this.data[idx]);
            this.heapifyDown(left_child_idx);
        } else if (this.data[left_child_idx] < this.data[right_child_idx] && this.data[left_child_idx] > this.data[idx]) {
            this.swap(this.data[right_child_idx], this.data[idx]);
            this.heapifyDown(right_child_idx);
        }
    }

    private swap(a: number, b: number): void {
        const tmp = a;
        a = b;
        b = tmp;
    }

}