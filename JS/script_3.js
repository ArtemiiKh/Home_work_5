let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

  let sum = +"";
  for(let key in salaries){
      sum += salaries[key]
  }
  console.log(sum)