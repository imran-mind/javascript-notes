
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.next = null;
        this.size = 0;
    }

    display(){
        let nodes = '';
        let temp = this.head;
        for(let i=0; i<this.size; i++){
            const link = temp.next == null ? '' : '=>';
            nodes = nodes + temp.data + link;
            temp = temp.next;
        }
        console.log(nodes);
    }
    addLast(data){
        const tempNode = new Node(data);
        tempNode.next = null;
        if(this.size === 0){
            this.head = this.tail = tempNode;
        }else{
            this.tail.next = tempNode;
            this.tail = tempNode;
        }
        this.size++;
    }

    addFirst(data){
        const temp = new Node(data);
        if(this.size === 0){
            this.head = this.tail = temp;
        }else{
            temp.next = this.head;
            this.head = temp;
        }
        this.size++;
    }

    removeFirst(){
        if(this.size === 0){
            return 'Linkedlist is empty';
        }else if(this.size === 1){
            this.head = this.tail = null;
        } else{
            this.head = this.head.next;
        }
        this.size--;
    }

    removeLast(){
        if(this.size === 0){
            return 'Linkedlist is empty';
        }else if(this.size === 1){
            this.head = this.tail = null;
        } else{
            let temp = this.head;
            console.log('temp.next');
            while(temp != null){
                if(temp.next.next == null){
                    console.log(temp.next);
                    temp.next = null;
                    this.tail = temp;
                }
                temp = temp.next
            }
        }
        this.size--;
    }
}

const newList = new LinkedList();
// newList.addLast(10);
// newList.addLast(20);
// newList.addLast(30);
newList.addFirst(10);
newList.addFirst(20);
newList.addFirst(30);
newList.addFirst(40);
// newList.removeFirst();
newList.removeLast();
newList.removeLast();
newList.display();