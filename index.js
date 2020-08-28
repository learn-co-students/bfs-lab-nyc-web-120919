function bfs(node, vertices, edges) {
    node.distance = 0
    let discovered = [node]
    let discoverOrder = [node]
    while (discovered.length != 0) {
        let currentNode = discovered.shift()
        let adjacentNodes = findAdjacent(currentNode.name, vertices, edges)
        discoverOrder = discoverOrder.concat(adjacentNodes);
        markDistanceAndPredecessor(currentNode, adjacentNodes)
        discovered = discovered.concat(adjacentNodes)
    }
    return discoverOrder
}

// need to write a test for non-discovered nodes
function findAdjacent(name, vertices, edges) {
    let adjacent = edges.filter((edge) => {
        return edge.includes(name)
    })
    adjacent = adjacent.map((edge) => {
        return edge.find((node) => {
            return node !== name
        })
    })
    adjacent = adjacent.map((nodeName) => {
        return vertices.find((vertex) => {
            return vertex.name === nodeName
        })
    })
    return adjacent.filter((node) => {
        return node.distance == null;
    })
}

function markDistanceAndPredecessor(node, adjacentNodes) {
    adjacentNodes.map((adjNode) => {
        adjNode.distance = node.distance + 1;
        adjNode.predecessor = node;
    })
}