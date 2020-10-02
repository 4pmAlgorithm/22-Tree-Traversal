//1:37 - 1:56 // you have to use value for value. don't use val. 

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }


    insert(value){
    
        var newNode = new Node(value)
    
        if(this.root === null){
            this.root = newNode
            return this
        }

        var current = this.root;

        while(true){
        if(value === current.value) return undefined;

        if( value < current.value){
            if(current.left === null){
                current.left = newNode;
                return this
            }
            current = current.left
        }else{
            if(current.right === null){
                current.right = newNode;
                return this;
            }
            current = current.right
            }
        }
    }


        DFSPostOrder(){
            var data = [];
            function traverse(node){
                if(node.left) traverse(node.left);
                if(node.right) traverse(node.right);
                data.push(node.value)//move this push below the recursive code
            }
            traverse(this.root);
            return data;
        }
}


var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
//console.log(tree)
console.log(tree.DFSPostOrder());
//console.log(tree)
