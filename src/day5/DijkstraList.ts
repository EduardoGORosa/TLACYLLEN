function getLowestUnvisited(seen: boolean[], dists: number[]): number {
    let idx = -1;
    let lowestDistance = Infinity;

    for (let i = 0; i < seen.length; i++) {
        if (seen[i]) {
            continue
        }

         if (lowestDistance > i) {
            lowestDistance = dists[i];
            idx = i;
         }
    }

    return idx;
}

function hasUnvisited(seen: boolean[], dists: number[]): boolean {
    //return seen.some((s,i) => !s && dists[i] < Infinity);
    for (let i = 0; i < seen.length; i++) {
        if (!seen[i] && dists[i] < Infinity) {
            //console.log(`Dentro da condição: ${seen[i]}, ${dists[i]}`);
            return true;
        }
    }
    return false;
}

export default function dijkstra_list(source: number, sink: number, arr: WeightedAdjacencyList): number[] {

    const seen: boolean[] = new Array(arr.length).fill(false);
    const prev: number[] = new Array(arr.length).fill(-1);
    const dists: number[] = new Array(arr.length).fill(Infinity);

    dists[source] = 0;

    while(hasUnvisited(seen, dists)) {
        const curr = getLowestUnvisited(seen, dists);
        seen[curr] = true;
        console.log("dists:" + dists);
        console.log("seen:" + seen);
        const adjs = arr[curr];
        for (let i = 0; i < adjs.length; i++) {
            const edge = adjs[i];
            if (seen[edge.to]) {
                continue;
            }

            const dist = dists[curr] + edge.weight;

            if (dist < dists[edge.to]) {
                dists[edge.to] = dist;
                prev[edge.to] = curr;
            }
        }

    }
    
    const out: number[] = [];
    let curr = sink;
    
    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    }

    out.push(source);
    return out.reverse();
}