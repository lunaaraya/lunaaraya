document.querySelectorAll('.product-btn').forEach(btn=>{
  btn.addEventListener('click',e=>{
    if(btn.getAttribute('href')==='#'){
      e.preventDefault();
      alert('Tambahkan URL Shopee Affiliate pada tombol ini sebelum dipublikasikan.');
    }
  });
});
