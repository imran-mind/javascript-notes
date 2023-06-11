
/**
 *  {  
 *    -2: [1]
 *    -1: [2],
 *     0: [5],
 *     1: [12],
 *     2: [21]
 *  }
 */

const topViewOfBT = (root)=>{
    if(root==null){
        return;
    }
    const ans = [];
    const queue = [];
    const map = {};
    let max_val = Number.MIN_VALUE;
    let min_val = Number.MAX_VALUE;
    queue.push({node:root, level:0});
    while(queue.length>0){
        const pair = queue.shift();
        const node = pair.node;
        const ver_level = pair.level;

        if(map[ver_level] && map[ver_level].length){
            map[ver_level].push(node.val);
        }else{
            map[ver_level] = [];
            map[ver_level].push(node.val);
        }
        if(node.left){
            queue.push({node: node.left, level: ver_level-1});
        }
        if(node.right){
            queue.push({node: node.right, level: ver_level+1});
        }
        max_val = Math.max(max_val, ver_level);
        min_val = Math.min(min_val, ver_level);
    }

    for(let i=min_val; i<=max_val; i++){
        if(map[i].length){
            const n = map[i].splice(-1);
            console.log(n);
            ans.push(n[0])
        }
    }
    console.log(map)
    return ans;
}
function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

// const tree = new Node(5);
// tree.left = new Node(2);
// tree.right = new Node(12);
// tree.left.left = new Node(1);
// tree.left.right = new Node(3);
// tree.right.left = new Node(9);
// tree.right.right = new Node(21);
var root = new Node(20);
root.left = new Node(8);
root.right = new Node(22);
root.left.left = new Node(5);
root.left.right = new Node(3);
root.right.left = new Node(4);
root.right.right = new Node(25);
root.left.right.left = new Node(10);
root.left.right.right = new Node(14);
console.log(topViewOfBT(root));

    //         5
    //       /   \
    //     2      12
    //   /  \     / \
    // 1     3   9   21
    // [1,2,5,12,21]