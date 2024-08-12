function findUniq(arr) {
    const res = arr.filter((ele)=>arr.indexOf(ele)===arr.lastIndexOf(ele))
    return res[0]
  }
  console.log(findUniq([ 1, 1, 1, 6, 1, 2 ]));