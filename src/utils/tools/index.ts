
// 立即执行防抖函数
function debounceFn(fn: (...arg:any[]) => void, time: number): () => any {
    let flag = true;
    let timerId:NodeJS.Timeout
    return function test<T>(this:T, ...arg: any[]) {
      if(flag) {
        flag = false;
        return fn.apply<T, any[], unknown>(this, arg)
      }
      if(timerId) clearTimeout(timerId)
      timerId = setTimeout(() => {
        flag = true
      }, time)
    }
  }

  export {
    debounceFn
  }