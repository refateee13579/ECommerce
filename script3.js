function  updateProductNumber2(isIncrease2){
    const productField1=document.getElementById('cart-quantity3')
    const productFieldValueString1=productField1.value
    const previousProductValue1=parseInt(productFieldValueString1)
    
  let  newProductNumber2;
  if(isIncrease2===true){
    newProductNumber2=previousProductValue1+1;
  }
  else{
    newProductNumber2=previousProductValue1-1
  }
   
   productField1.value=newProductNumber2;
    return newProductNumber2;
  }
  
  function updateProductTotalPrice2(newProductNumber2){
    const productTotalPrice2=newProductNumber2*118
    const productTotalElement2=document.getElementById('product-total2')
    productTotalElement2.innerText=productTotalPrice2;
  }
  document.getElementById('case-plus2').addEventListener('click',function(){
  const newProductNumber2=updateProductNumber2(true)
  updateProductTotalPrice2(newProductNumber2);
  calculateSubTotal()
   })
   document.getElementById('case-minus2').addEventListener('click',function(){
    const newProductNumber2=updateProductNumber2(false)
  updateProductTotalPrice2(newProductNumber2)
  calculateSubTotal()
   })
  