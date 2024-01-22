function cakes(recipe, available) {
    let result = Infinity;
    for(let x in recipe){
      result =  Math.floor(Math.min((available[x] / recipe[x] || 0), result))
    }
    return result;
  }