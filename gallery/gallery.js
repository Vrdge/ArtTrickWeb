function readMore(){
  let btn_read_more = document.getElementById('button')
  let dots = document.getElementById('dots')
  if(dots.style.display === 'none'){
    dots.style.display = 'inline'
    btn_read_more.innerHTML = 'More'
    $(".read-more").css({ display: "none",});

  }else{
    dots.style.display = 'none'
    btn_read_more.innerHTML = 'Hide'
    $(".read-more").css({ display: "block",});
  }

}