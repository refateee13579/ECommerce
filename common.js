
function getTextElementValueId(elementId){
    const productTotalElement=document.getElementById(elementId)
    const currentProductTotalString=productTotalElement.innerText;
    const currentProductTotal=parseInt(currentProductTotalString)
   return currentProductTotal  
  }
  function setTextElementValueId(elementId,value){
    const subTotalElement=document.getElementById(elementId)
  subTotalElement.innerText=value;
 
  }

  function calculateSubTotal(){
    const currentProductTotal=getTextElementValueId('product-total')
  const currentProductTotal1=getTextElementValueId('product-total1')
  const currentProductTotal2=getTextElementValueId('product-total2')
  const currentSubTotal=currentProductTotal+currentProductTotal1+currentProductTotal2
  setTextElementValueId('sub-total',currentSubTotal)

  const taxAmountString=(currentSubTotal*0.1).toFixed(2)
  const taxAmount=parseFloat(taxAmountString)

  setTextElementValueId('tax-amount',taxAmount)
  const finalAmount=currentSubTotal+taxAmount;
  setTextElementValueId('total-amount',finalAmount)
}
  