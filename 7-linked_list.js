/*Linked List */ 
function LinkedList(){
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  }

  this.head = function() {
    return head;
  }

  this.add = function(element) {
    var node = new Node(element);
    if(head === null) {
      head = node;
    } else {
      var currentNode = head;
      while(currentNode.next){
        currentNode = currentNode.next;
      }
      length++;
    };

    this.remove = function(element){
      var currentNode = head;
      var previousNode;
      if(currentNode.element === element){
        head  = currenNode.next;
      } else {
        while(currentNode.element !== element) {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
        previousNode.next = currentNode.next;
      }
      length--;
    }

    this.isEmpty = function() {
      return length === 0;
    }
  }
}