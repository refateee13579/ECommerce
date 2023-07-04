function  updateProductNumber1(isIncrease1){
    const productField=document.getElementById('cart-quantity2')
    const productFieldValueString=productField.value
    const previousProductValue=parseInt(productFieldValueString)
    
  let  newProductNumber1;
  if(isIncrease1===true){
    newProductNumber1=previousProductValue+1;
  }
  else{
    newProductNumber1=previousProductValue-1
  }
   
   productField.value=newProductNumber1;
    return newProductNumber1;
  }
  
  function updateProductTotalPrice1(newProductNumber1){
    const productTotalPrice1=newProductNumber1*118
    const productTotalElement1=document.getElementById('product-total1')
    productTotalElement1.innerText=productTotalPrice1;
  }
  document.getElementById('case-plus1').addEventListener('click',function(){
  const newProductNumber1=updateProductNumber1(true)
  updateProductTotalPrice1(newProductNumber1);
  calculateSubTotal()
   })
   document.getElementById('case-minus1').addEventListener('click',function(){
    const newProductNumber1=updateProductNumber1(false)
  updateProductTotalPrice1(newProductNumber1)
  calculateSubTotal()
   })
  