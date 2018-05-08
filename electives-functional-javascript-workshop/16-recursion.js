function getDependencies(tree) {
    if (tree && typeof tree.dependencies == 'object') {
        return Object.keys(tree.dependencies).reduce((acc, x) => 
            [...new Set([x + '@' + tree.dependencies[x].version]
                .concat(acc)
                .concat(getDependencies(tree.dependencies[x])))]
                .sort(), 
        []);
    } else {
        return [];
    }
}

module.exports = getDependencies;
