function foo() { 
  throw new Error('에러가 발생했습니다'); 
}

function bar() { 
  throw new Error("이발"); 
}

function start() { 
  bar(); 
}

start();
