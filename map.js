let ar = [2,3,4,5];
let newAr =  ar.map( (item,index,ars) => {
  // console.log('index',index)
  // console.log('item',item)
  // console.log('th',ars)
  if(item == 2) return item * 2
  if(item == 3) return item * 3
  return { 'keys':item*10}

//  return item*6
} )

console.log(newAr)