function printReceipt(barcodes) {
//     console.log(`
// ***<store earning no money>Receipt ***
// Name: Coca-Cola, Quantity: 5, Unit price: 3 (yuan), Subtotal: 15 (yuan)
// Name: Sprite, Quantity: 2, Unit price: 3 (yuan), Subtotal: 6 (yuan)
// Name: Battery, Quantity: 1, Unit price: 2 (yuan), Subtotal: 2 (yuan)
// ----------------------
// Total: 23 (yuan)
// **********************`)
// var inputs=[
//     'ITEM000000',
//     'ITEM000000',
//     'ITEM000000',
//     'ITEM000000',
//     'ITEM000000',
//     'ITEM000001',
//     'ITEM000001',
//     'ITEM000004'
//   ];
  var validItemCodes=Object.keys(getItemCount(barcodes));
  var a=getItemCount(barcodes);
//   console.log(getItemInfo(validItemCodes,a));
  getReciptInfo(getItemInfo(validItemCodes,a));
}


module.exports = {
    printReceipt
};



// function Main(){
//     var inputs=[
//         'ITEM000000',
//         'ITEM000000',
//         'ITEM000000',
//         'ITEM000000',
//         'ITEM000000',
//         'ITEM000001',
//         'ITEM000001',
//         'ITEM000004'
//       ];
//       var validItemCodes=Object.keys(getItemCount(inputs));
//       console.log(validItemCodes);
//       var a=getItemCount(inputs);
//     //   console.log(getItemInfo(validItemCodes,a));
//       getReciptInfo(getItemInfo(validItemCodes,a));
// }
function getReciptInfo(itemWithCount){
    var total=0;
    console.log('\n***<store earning no money>Receipt***');
    Object.keys(itemWithCount).forEach(key=> {
        console.log(`Name: ${itemWithCount[key].info.name}, Quantity: ${itemWithCount[key].quantity}, Unit price: ${itemWithCount[key].info.price}(yuan), Subtotal: ${(itemWithCount[key].quantity)*(itemWithCount[key].info.price)} (yuan)`);
        total+=(itemWithCount[key].quantity)*(itemWithCount[key].info.price);
      })
    console.log('----------------------')
    console.log(`Total: ${total} (yuan)`);
    console.log('**********************');
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


function getItemInfo(validItemCodes,a){
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
                a[barCode].info=item;
            }
        })
    })
    return a;
}
