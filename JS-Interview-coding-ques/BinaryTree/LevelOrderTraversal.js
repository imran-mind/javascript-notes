function Node(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

const levelOrderTraversal = (root)=>{
    if(!root)
        return;

    const ans = [];
    const Q = [];
    Q.push(root);
    while(Q.length > 0){
        const n = Q.length;
        const list = [];
        for(let i=0; i<n; i++){
            const node = Q.shift();
            list.push(node.value);

            if(node.left){
                Q.push(node.left);
            }
            if(node.right){
                Q.push(node.right);
            }
        }
        ans.push(list);
    }
    return ans;
}

var root = new Node(20);
root.left = new Node(8);
root.right = new Node(22);
root.left.left = new Node(5);
root.left.right = new Node(3);
root.right.left = new Node(4);
root.right.right = new Node(25);
root.left.right.left = new Node(10);
root.left.right.right = new Node(14);
console.log(levelOrderTraversal(root));

    //         20
    //       /   \
    //     8      22
    //   /  \     / \
    // 5     3   4   25
    //      / \
    //     10  14
    //