function parent(node, n) {
    n = n || 1;
    while(n-- && node) {
        node = node.parentNode;
    }
    return node;
}