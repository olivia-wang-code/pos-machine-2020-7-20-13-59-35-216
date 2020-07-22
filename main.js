function printReceipt(barcodes) {
  const validItemCodes=Object.keys(getItemCount(barcodes));
  var a=getItemCount(barcodes);
//   console.log(getItemInfo(validItemCodes,a));
  let reciptInfo=getReciptInfo(getItemInfo(validItemCodes,a));
  console.log(reciptInfo);
  
}

function getReciptInfo(itemWithCount){
    var total=0;
    var reciptInfo='\n***<store earning no money>Receipt ***\n';
    // console.log('\n***<store earning no money>Receipt ***');
    Object.keys(itemWithCount).forEach(key=> {
        reciptInfo+=(`Name: ${itemWithCount[key].info.name}, Quantity: ${itemWithCount[key].quantity}, Unit price: ${itemWithCount[key].info.price} (yuan), Subtotal: ${(itemWithCount[key].quantity)*(itemWithCount[key].info.price)} (yuan)\n`);
        total+=(itemWithCount[key].quantity)*(itemWithCount[key].info.price);
      })
      reciptInfo=reciptInfo+'----------------------'+'\n'+`Total: ${total} (yuan)`+'\n'+'**********************';
    return reciptInfo;
}
function getItemCount(inputs){
    var itemWithCount={};
    inputs.forEach(input => {
        if(input in itemWithCount){
            itemWithCount[input].quantity++;
        }else{
            itemWithCount[input]={info:{},quantity:1};
        } 
    });
    return itemWithCount;
}

//todo rename a itemWithCount
function getItemInfo(validItemCodes,itemWithCount){
    let dataSource=[
        {
           barcode: 'ITEM000000',
           name: 'Coca-Cola',
           price: 3
         },
         {
           barcode: 'ITEM000001',
           name: 'Sprite',
           price: 3
         },
         {
           barcode: 'ITEM000002',
           name: 'Apple',
           price: 5
         },
         {
           barcode: 'ITEM000003',
           name: 'Litchi',
           price: 15
         },
         {
           barcode: 'ITEM000004',
           name: 'Battery',
           price: 2
         },
         {
           barcode: 'ITEM000005',
           name: 'Instant Noodles',
           price: 4
         }
     ];
    validItemCodes.forEach(barCode=>{
        dataSource.forEach(item=>{
            if(item.barcode===barCode){
              itemWithCount[barCode].info=item;
            }
        })
    })
    return itemWithCount;
}

const barcodes = [
  'ITEM000000',
  'ITEM000000',
  'ITEM000000',
  'ITEM000000',
  'ITEM000000',
  'ITEM000001',
  'ITEM000001',
  'ITEM000004'
];
printReceipt(barcodes);

module.exports = {
  printReceipt
};

