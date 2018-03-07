async function foo() {
  return new Promise((resolve, reject) => {
    let inc = 0
    let intvBar = setInterval(() => {
      console.log('FOOinc = ' + inc)
      if (inc++ >= 3) {
        clearInterval(intvBar)
        resolve('Foo')
      }
    }, 1000)
  }) 
}

async function bar() {
  return new Promise((resolve, reject) => {
    let inc = 0
    let intvBar = setInterval(() => {
      console.log('BARinc = ' + inc)
      if (inc++ >= 5) {
        clearInterval(intvBar)
        resolve('Bar')
      }
    }, 1000)
  }) 
}

async function test () {

  console.log('parallel async using await')
  try {
    let x = await Promise.all([foo(),bar()])
    console.log(x)
    await sequence()
    console.log('done')
  }
  catch(err) {
    console.log(err)
  }

  async function sequence () {
    console.log('sequencial async using await')
    try {
      let x = await foo()
      let y = await bar()
    } catch (err) {
      console.log('Error = ' + err)
    }
  }
}

test()

