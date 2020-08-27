function bfs(rootNode, vertices, edges){

}

function findAdjacent(name, vertices, edges) {
    let adjEdges = []
    let adjVertices = []
    edges.each((edge) => {
        if(edge.includes(name)) {
            adjEdge = edge.find((adjName) => adjName !== name)
            adjEdges.push(adjEdge)
        }
    })
    adjEdges.each((edge) => {
        let adjVertice = vertices.find((vertice) => vertice.name === name)
        adjVertices.push(adjVertice)
    })
    return adjVertices
}