let totalprice=0;

function add(price){

  let discount=0;
  if(price<20000){
    let temp=0.5*price;
    discount=temp;
  }
  totalprice+=price-discount;
}
add(2000);