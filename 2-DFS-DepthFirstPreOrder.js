//12:20 - 
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
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
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


// DFSPreOrder(){
//     var data = [];
//     function traverse(node){
//         data.push(node.value);
//         if(node.left) traverse(node.left);
//         if(node.right) traverse(node.right);
//     }
//     traverse(this.root);
//     return data;
// }

DFSPreOrder(){
    let data = [];
    function traverse(node){
        data.push(node.value);
        if(node.left) traverse(node.left)
        if(node.right) traverse(node.right)
    }
    traverse(this.root)
    return data
}
}







var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.DFSPreOrder()); // [3, 6, 8, 10, 15, 20]



