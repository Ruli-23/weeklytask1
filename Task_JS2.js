function hitungDiskon(totalBelanja) {
    if (totalBelanja >= 1000000) {
      const diskon = totalBelanja * 0.1;
      const totalSetelahDiskon = totalBelanja - diskon;
      console.log(`Anda mendapatkan diskon 10%, total belanja anda menjadi Rp ${totalSetelahDiskon}`);
    } else if (totalBelanja >= 500000 && totalBelanja < 1000000) {
      const diskon = totalBelanja * 0.05;
      const totalSetelahDiskon = totalBelanja - diskon;
      console.log(`Anda mendapatkan diskon 5%, total belanja anda menjadi Rp ${totalSetelahDiskon}`);
    } else {
      console.log(`Anda tidak mendapatkan diskon, total belanja anda Rp ${totalBelanja}`);
    }
  }
  // Contoh 
  hitungDiskon(600000); 
  hitungDiskon(499000); 
  