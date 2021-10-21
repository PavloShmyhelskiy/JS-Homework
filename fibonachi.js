function* fibonacci() {
    let current = 0;
    let next = 1;
  
    while(true){
      yield current;
      [current, next] = [next, current + next];
    }
  }
  
  const gen = fibonacci();
  for(let i = 0; i < 10; i++){
    console.log(gen.next().value);
  }
  