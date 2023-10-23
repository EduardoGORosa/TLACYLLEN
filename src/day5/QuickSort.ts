function qs(arr: number[], hi: number, lo: number): void {

    if (lo >= hi) {
        return
    }

    const pivotIdx = partition(arr, hi, lo);

    qs(arr, pivotIdx - 1, lo);
    qs(arr, hi, pivotIdx + 1);

}

function partition(arr: number[], hi: number, lo: number): number {
    
    const pivot = arr[hi];
    
    let idx = lo - 1;

    for (let i = lo; i < hi; i++) {
        if (arr[i] <= pivot) {
            idx++;
            const tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }

    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;

    return idx;
}

export default function quick_sort(arr: number[]): void {
    qs(arr, arr.length - 1, 0);
}