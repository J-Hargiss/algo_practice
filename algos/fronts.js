class SLLNode {
    constructor(val) {
        this.val = val;
        this.next = null;              
    }
}
class SLL {
    constructor() {
        this.head = null;
    }
    addFront(val) {
        let new_node = new SLLNode(val);
        new_node.next = this.head;
        this.head = new_node;
        return this;
    }
    removeFront() {
        if (this.head == null) {
            return null;
        }
        let deletedNode = this.head;
        this.head = deletedNode.next;
        deletedNode.next = null;
        return this.head;
    }
    front() {
        if (this.head == null) {
            return null;
        } else {
            return this.head.val;
        }    
    }
    display() {
        let str = "";
        if (this.head == null) {
            return str;
        }
        str += this.head.val;
        let runner = this.head.next;
        while (runner != null) {
            str += ", " + runner.val;
            runner = runner.next;
        }
        return str;
    }
}

var theSLL = new SLL();
//console.log(theSLL.front());
theSLL.addFront(23);
theSLL.addFront(15);
//console.log(theSLL);
console.log(theSLL.display());

