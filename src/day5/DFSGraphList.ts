function walk(graph: WeightedAdjacencyList, curr: number, needle: number, seen: boolean[], path: number[]): boolean {

    if (needle === curr) {
        path.push(curr);
        return true;
    }

    if (seen[curr]) {
        return false;
    }

    seen[curr] = true;

    //pre
    path.push(curr);
    //recurse
    const adjs = graph[curr];
    for (let i = 0; i < adjs.length; i++) {
        const edge = adjs[i];
        if (walk(graph, edge.to, needle, seen, path)) {
            return true;
        }
    }
    //post
    path.pop();

    return false;
}

export default function dfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | null {
    const seen: boolean[] = new Array(graph.length).fill(false);
    const path: number[] = [];

    walk(graph, source, needle, seen, path);

    if (path.length === 0) {
        return null
    }

    return path;
}