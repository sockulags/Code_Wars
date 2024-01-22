function towerBuilder(nFloors) {
    if(nFloors === 1){
      return ["*"];
    }
      let width = nFloors * 2 - 1;
      let tower = [];
      for(let x = nFloors-1; x >= 0; x--){
        let floor = [];
        for(let char = 0; char < width; char++){
     if(x > char || char + x > width - 1){
       floor.push(' ');
     }
          else{
            floor.push('*');
          }
        }
        tower.push(floor.join(''));
      }
      return tower;
    }