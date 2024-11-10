/**
 * @param {string} startXY 
 * @param {string} endXY 
 * @param {Map<string, string[]>} graph 
 * @returns {false|number[]}
 */
export function bfs(startNode, endNode, graph) {
	const queue = [startNode];
	const came_from = new Map();
	came_from.set(startNode, null);

	while (queue.length > 0) {
		const currentNode = queue.shift();
		if (currentNode == endNode) break;

		// Search side paths
		graph.get(currentNode).forEach(e => {
			if (!came_from.has(e)) {
				queue.push(e);
				came_from.set(e, currentNode);
			}
		});
	}

	let currentNode = endNode;
	const path = [];
	while (currentNode != startNode) {
		path.push(currentNode);
		currentNode = came_from.get(currentNode);
		if (!currentNode) return false;
	}
	return path;

}

/**
 * Dijkstra's Algorithm
 * @param {string} startNode
 * @param {string} endNode 
 * @param {Map<string, {node: string, cost: number}[]} graph 
 * @returns {false|number[]}
 */
export function ucs(startNode, endNode, graph) {
	const queue = [[startNode, 0]]; // Needs to be PriorityQueue
	// add start with a value of 0
	const came_from = new Map();
	const cost_so_far = new Map();

	came_from.set(startNode, null);
	cost_so_far.set(startNode, 0);

	console.log(queue);
	/**/
	while (queue.length > 0) {
		const currentNode = queue.shift(); //Depend son PQ
		if (currentNode == endNode) break;

		// Search side paths
		graph.get(currentNode).forEach(e => {
			const node = e.node;
			const cost = e.cost;
			const new_cost = cost_so_far.get(currentNode) + cost; // How to handle the cost bit?
			if (!cost_so_far.has(node) || new_cost < cost_so_far.get(node)) {
				cost_so_far.set(node, new_cost);
				queue.push([node, new_cost]);
				queue.sort((a, b) => b[1] - a[1]);
				came_from.set(node, currentNode);
			}
		});
	}
	/*
	*/
}

/**
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
export function gcd(a, b) {
	var t = 0;
	a < b && (t = b, b = a, a = t); // swap them if a < b
	t = a % b;
	return t ? gcd(b, t) : b;
}

/**
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
export function lcm(a, b) {
	return a / gcd(a, b) * b;
}