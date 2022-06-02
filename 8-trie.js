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