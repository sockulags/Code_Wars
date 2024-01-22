function treeByLevels (rootNode) {
    if (!rootNode) {
       return [];
     }
     
   
     const result= [];
     const queue = [rootNode];
     while (queue.length > 0){
       const curr = queue.shift();
       result.push(curr.value)
       if(curr.left){
         queue.push(curr.left)
       }
       if(curr.right){
         queue.push(curr.right)
       }
     }
     return result;
   }