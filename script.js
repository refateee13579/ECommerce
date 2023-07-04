

  var removeCartButtons=document.getElementsByClassName('normal')
  console.log(removeCartButtons)
  for(var i=0;i<removeCartButtons.length;i++){
  var button =removeCartButtons[i]
  button.addEventListener('click',function(event){
   buttonClicked=event.target
    buttonClicked.parentElement.parentElement.remove()
  updateTotal();
  })

}


function  updateProductNumber(isIncrease){
  const caseField=document.getElementById('cart-quantity')
  const caseFieldValueString=caseField.value
  const previousCaseValue=parseInt(caseFieldValueString)
  
let  newProductNumber;
if(isIncrease===true){
  newProductNumber=previousCaseValue+1;
}
else{
  newProductNumber=previousCaseValue-1
}
 
  caseField.value=newProductNumber;
  return newProductNumber;
}

function updateProductTotalPrice(newProductNumber){
  const productTotalPrice=newProductNumber*118
  const productTotalElement=document.getElementById('product-total')
  productTotalElement.innerText=productTotalPrice;
}

function getTextElementValueId(elementId){
  const productTotalElement=document.getElementById(elementId)
  const currentProductTotalString=productTotalElement.innerText;
  const currentProductTotal=parseInt(currentProductTotalString)
 return currentProductTotal  
}
function calculateSubTotal(){
  const currentProductTotal=getTextElementValueId('product-total')
const currentProductTotal1=getTextElementValueId('product-total1')
const currentProductTotal2=getTextElementValueId('product-total2')
const currentSubTotal=currentProductTotal+currentProductTotal1+currentProductTotal2
const subTotalElement=document.getElementById('sub-total')
subTotalElement.innerText=currentSubTotal
}

document.getElementById('case-plus').addEventListener('click',function(){
const newProductNumber=updateProductNumber(true)
updateProductTotalPrice(newProductNumber);
calculateSubTotal()
})

 

 document.getElementById('case-minus').addEventListener('click',function(){
  const newProductNumber=updateProductNumber(false)
updateProductTotalPrice(newProductNumber)
calculateSubTotal()
 })


  