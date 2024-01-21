class Ship {
    constructor(length, amount) {
      this.length = length;
      this.amount = amount;
    }
  }
  
  const ships = [
    new Ship(4, 1),
    new Ship(3, 2),
    new Ship(2, 3),
    new Ship(1, 4),
  ];
  
  function validateBattlefield(field) {
    for (const ship of ships) {
      if (
        shipsXAxis(field, ship.length, ship.amount) +
        shipsYAxis(field, ship.length, ship.amount) !==
        ship.amount
      )
        return false;
    }
  
    return true; 
  }
  
  function shipsXAxis(field, number, occurrences) {
    let sum = 0;
    for (let row in field) {
      for (let i = 0; i <= field[row].length - number; i++) {
        if (field[row][i] === 1) {
          let consecutive = true;
          for (let k = 1; k < number; k++) {
            if (field[row][i + k] !== 1) {
              consecutive = false;
            }
          }
          if (consecutive && !checkSurrondingsX(field, parseInt(row), i, number)) {
            sum++;
            for (let k = 0; k < number; k++) {
              field[row][i + k] = 0;
            }
          }
        }
      }
    }
    return occurrences - sum;
  }
  
  function checkSurrondingsX(field, row, col, number) {
    let spaceTaken = 0;
    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = col - 1; j <= col + number; j++) {
        if (i >= 0 && i < field.length && j >= 0 && j < field[i].length) {
          if (field[i][j] === 1) {
           spaceTaken++;
          }
        }
      }
    }
    return spaceTaken > number;
  }
  
  
  function shipsYAxis(field, number, occurrences) {
    let sum = 0;
    for (let i = 0; i <= field.length - number; i++) {
      for (let j = 0; j < field[i].length; j++) {
        if (field[i][j] === 1) {
          let consecutive = true;
          for (let k = 1; k < number; k++) {
            if (field[i + k][j] !== 1) {
              consecutive = false;
            }
          }
          if (consecutive && !checkSurrondingsY(field, i, j, number)) {
            sum++;
            for (let k = 0; k < number; k++) {
              field[i + k][j] = 0;
            }
          }
        }
      }
    }
    return occurrences - sum;
  }
  
  function checkSurrondingsY(field, row, col, number) {
    let spaceTaken = 0;
    for (let i = row - 1; i <= row + number; i++) {
      for (let j = col - 1; j <= col + 1; j++) {
        if (i >= 0 && i < field.length && j >= 0 && j < field[i].length) {
          if (field[i][j] === 1) {
           spaceTaken++;
          }
        }
      }
    }
    return spaceTaken > number;
  }
  