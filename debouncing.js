let timer;
{/* <input type="text" onkeyup="serach(event)" id="searchData"> */}

// function serachQuery(event){
//     console.log('seaching', event);
// }
// function serach(event) {
//     event.preventDefault();
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//         serachQuery(event.target.value)
//     }, 500)
// }

const prettify = (str) => {
    try {
      if (typeof str == 'string') {
        JSON.parse(str)
        return "prettified"
      }
    } catch (e) {
      return "errored"
    } finally {
      return str
    }
  }
  
  console.log(prettify('BFE.dev'))
  console.log(prettify('123'))
