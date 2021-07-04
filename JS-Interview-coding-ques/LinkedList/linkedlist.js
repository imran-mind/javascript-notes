
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

    getFirst(){
        return this.head.data;
    }

    getLast(){
        return this.tail.data;
    }

    getAtIndex(index){
        if(this.size === 0)
            return 'LinkedList is empty';
        else if(index < 0 || index >= this.size){
            console.log('Invalid args=>',this.size,index);
            return -1;
        }
        else if(index === 0){
            // console.log(`Node at Index ${index} ${this.head.data}`);
            return this.head;
        }else{
            let temp = this.head;
            for(let i=1; i<=index; i++){
                temp = temp.next;
            }
            // console.log(`Node at Index ${index} ${temp.data}`);
            return temp;
        }
    }

    addAt(index,data){
        if(index < 0 || index >= this.size){
            console.log('Invalid args=>',this.size,index);
            return -1;
        }else if(index === 0){
            this.addFirst(data);
        }else{
            const node = new Node(data);
            let temp = this.head;
            for(let i=0; i<index-1; i++){
                temp = temp.next;
            }
            node.next = temp.next;
            temp.next = node;
            this.size++;
        }
    }

    removeAt(index){
        if(index < 0 || index >= this.size){
            console.log('Invalid args=>',this.size,index);
            return -1;
        }else if(index === 0){
            this.removeFirst();
        }else{
            let temp = this.head;
            for(let i=0; i<index-1; i++){
                temp = temp.next;
            }
            temp.next = temp.next.next;
            // console.log(temp)
            this.size--;
        }
    }

    reverseLinkedList(){
        if(this.size === 0){
            console.log('LinkedList is empty')
        } else if(this.size === 1){
            return this.head;
        }else{
            const list = new LinkedList();
            const len = this.size;
            for(let i=0; i<len; i++){
                const val = this.getFirst();
                this.removeFirst();
                list.addFirst(val);
            }
            list.display();
        }
    }

    
    reverseLinkedListRecursivly(node){
        if(node == null){
            return;
        }
        this.reverseLinkedListRecursivly(node.next);
        console.log(node.data)
    }

    reverseLinkedListIterativly(){
        if(this.size === 0){
            console.log("Linked list is empty");
        }else if(this.size === 1){
            return this.head;
        }else{
            let li = 0;
            let ri = this.size - 1;
            while(li < ri){
                let left = this.getAtIndex(li);
                let right = this.getAtIndex(ri);
                console.log('left',left)
                let temp = left.data;
                left.data = right.data;
                right.data = temp;
                li++;
                ri--;
            }
        }
    }

    middleOfLinkedList(){
        if(this.size === 0){
            console.log("Linked list is empty");
        }else if(this.size === 1){
            return this.head;
        }else{
            let slow = this.head;
            let fast = this.head;
            while(fast.next != null && fast.next.next != null){
                slow = slow.next;
                fast = fast.next.next;
            }
            return slow.data;
        }
    }

    mergeTwoSortedList(one, two){
        const list = new LinkedList();
        while(one != null && two != null){
            if(one.data < two.data){
                list.addLast(one.data);
                one = one.next;
            }else{
                list.addLast(two.data);
                two = two.next;
            }
        }

        while(one != null){
            list.addLast(one.data);
            one = one.next;
        }
        while(two != null){
            list.addLast(two.data);
            two = two.next;
        }
        list.display()
    }

    removeDuplicates(){
        var ptr1 = null, ptr2 = null;
        ptr1 = this.head;
 
        /* Pick elements one by one */
        while (ptr1 != null && ptr1.next != null) {
            ptr2 = ptr1;
 
            /*
             * Compare the picked element with rest of the elements
             */
            while (ptr2.next != null) {
                 /* If duplicate then delete it */
                if (ptr1.data == ptr2.next.data) {
                     /* sequence of steps is important here */
                    ptr2.next = ptr2.next.next;
                    this.size--;
                } else /* This is tricky */ {
                    ptr2 = ptr2.next;
                }
            }
            ptr1 = ptr1.next;
        }
        console.log(this.display())
    }

    removeDuplicatesBySet(){
        let current= this.head;
        let prev = null;
        let set = new Set();
        while(current != null){
            const val = current.data;
            if(set.has(val)){
                prev.next = current.next;
                this.size--;
            }else{
                set.add(val);
                prev = current;
            }
            current = current.next;
        }
        this.display()
    }
}

const newList = new LinkedList();
// newList.addLast(10);
// newList.addLast(20);
// newList.addLast(30);
newList.addFirst(10);
newList.addFirst(40);
newList.addFirst(20);
newList.addFirst(30);
newList.addFirst(40);
newList.addFirst(30);
newList.removeDuplicatesBySet()
// newList.removeDuplicates()
const newList1 = new LinkedList();
// newList.addLast(10);
// newList.addLast(20);
// newList.addLast(30);
// newList1.addFirst(60);
// newList1.addFirst(70);
// newList1.addFirst(80);
// newList1.addFirst(90);

// newList.mergeTwoSortedList(newList.head, newList1.head)
// console.log(newList.middleOfLinkedList());
// newList.reverseLinkedListRecursivly(newList.head);
// newList.reverseLinkedListIterativly()
// newList.reverseLinkedList()
// newList.removeAt(1)
// newList.addAt(3,50)
// newList.getAtIndex(5)
// console.log(newList.getFirst());
// console.log(newList.getLast());
// newList.removeFirst();
// newList.removeLast();
// newList.removeLast();
// newList.display();