/* Trie Data Sructure*/ 

let Node = function() {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function() {
    return this.end = true;
  };
  this.isEnd = function() {
    return this.end;
  };
};

let Trie = function() {

  this.root = new Node();

  this.add = function(input, node = this.root) {
    if(input.length == 0) {
      node.setEnd();
      return;
    } else if (!node.keys.has(inout[0])){
      node.keys.set(input[0], new Node());
      return this.add(input.substr(1), node.keys.get(input[0]));
    } else {
      return this.add(input.substr(1), node.keys.get(input[0]));
    };
  };

  
}