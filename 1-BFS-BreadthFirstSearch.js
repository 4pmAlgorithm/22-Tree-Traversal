//Tree Traversal

//BREADTH FIRST SEARCH
//-> 
//->
//searching everything on the same level First
//working horizontally



//BREADTH FIRST SEARCH
//      10 //root
//    6     15
//  3   8       20

//1. while there's something in the queue, take it out and put it in the visitedNode.
//2. then check the tree if there's anything left. 
//3. yes, there is 6. Add the 6 in the queue now. 


//queue:[10]
//visitedNode: []

//queue:[]
//visitedNode: [10]


//queue:[6]
//visitedNode: [10]


//queue:[6, 15]
//visitedNode: [10]


//now to the next level
//queue:[15]
//visitedNode: [10, 6]


//queue:[15, 3]
//visitedNode: [10, 6]


//queue:[15, 3, 8]
//visitedNode: [10, 6]
//done with 6

//queue:[3, 8]
//visitedNode: [10, 6, 15]


//queue:[3, 8, 20]
//visitedNode: [10, 6, 15]


//queue:[8, 20]
//visitedNode: [10, 6, 15, 3]

//queue:[20]
//visitedNode: [10, 6, 15, 3, 8]

//queue:[]
//visitedNode: [10, 6, 15, 3, 8, 20]


// 1. Create a queueArr and a var to store the value of node visited. 
// 2. place that root node in the queue 
// 3. loop as long as there is anything in the queue
//   3-1 dequeue a node from the queue and push the value of the node into the var that stores the nodes. 
//   3-2 if there is a left property on the node dequeued - add it to the queue 
//   3-3 if there is a right property on the node dequeued - add it to the queue 
// 4. return the variable that stores the value

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){//if there isn't root
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return "value exists";
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    BFS(){
        let node = this.root,
        let data = [],
        let queue = [];
        queue.push(node);

        while(queue.length){
            node = queue.shift();
            data.push(node.value)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        return data;
    }
}


//      10
//   5     13
// 2  7  11  16

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)

