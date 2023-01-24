function generatorToAsync(genFunc) {
  return function () {
    return new Promise((resolve, reject) => {
      const gen = genFunc()
      let { value, done } = gen.next()
      // let param
      while (!done) {
        console.log(1);
        value.then(res => {
          console.log(res)
          const genObj = gen.next()
          value = genObj.value
          done = genObj.done
        })
        if (done) {
          break
        }
      }
    })
  }
}

function request(num) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(num*2)
    }, 1000)
  })
}

function* genFunc1() {
  yield request(1)
  yield request(2)
  yield request(3)
  // const num1 = yield request(1)
  // const num2 = yield request(num1)
  // const num3 = yield request(num2)
  // return num3
}

const asyncFunc1 = generatorToAsync(genFunc1)

asyncFunc1()