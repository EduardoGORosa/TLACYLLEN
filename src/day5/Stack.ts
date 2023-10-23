type Node<T> = {
    value: T,
    prev?: Node<T>,
}

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;
    

    constructor() {
        this.head = undefined;
    }

    push(item: T): void {
        const node = {value: item} as Node<T>;
        if (!this.head) {
            this.head = node;
            return;
        }

        node.prev = this.head;
        this.head = node;
        
        return;
    }

    pop(): T | undefined {
        if (this.length === 0) {
            const head = this.head;
            this.head = undefined;
            return head?.value;
        }

        const head = this.head as Node<T>;
        this.head = head.prev;

        //free
        head.prev = undefined;

        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value
    }
}