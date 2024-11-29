function printSquare(input) {
    if (typeof input !== 'number' || input <= 0) {
      console.log("Data yang dimasukkan harus angka");
      return;
    }
    
    for (let i = 1; i <= input; i++) {
      let baris = '';
      for (let j = 1; j <= input; j++) {
        baris += j + ' ';
      }
      console.log(baris.trim());
    }
  }
  
  // Contoh penggunaan
  printSquare(5);
  // Output:
  // 1 2 3 4 5
  // 1 2 3 4 5
  // 1 2 3 4 5
  // 1 2 3 4 5
  // 1 2 3 4 5
  
  printSquare(3);
  // Output:
  // 1 2 3
  // 1 2 3
  // 1 2 3
  