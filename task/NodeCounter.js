function NodeCounter(node) {
  this.node = node;
}

var nc = new NodeCounter(document.querySelector('.counter'));
console.log(nc);

Object.defineProperty(nc, 'numValue', {
	get: function() {
  	return this.node.textContent;
  },
  
  set: function(num) {
  	return this.node.textContent = num;
  }
});

nc.numValue = 5;
console.log(nc.numValue);

NodeCounter.prototype.plus = function(n) {
  this.node.textContent = Number(this.node.textContent) + n;
};

nc.plus(3);
console.log(nc.numValue);

NodeCounter.prototype.minus = function(n) {
  this.node.textContent = Number(this.node.textContent) - n;
};

nc.minus(2);
console.log(nc.numValue);

NodeCounter.prototype.inc = function() {
  this.node.textContent = Number(this.node.textContent) + 1;
};

nc.inc();
console.log(nc.numValue);

NodeCounter.prototype.dec = function() {
  this.node.textContent = Number(this.node.textContent) - 1;
};

nc.dec();
console.log(nc.numValue);

NodeCounter.prototype.set = function(n) {
  this.node.textContent = Number(n);
};

nc.set(9999);
console.log(nc.numValue);

NodeCounter.prototype.init = function() {
};
