---
slug: /fp/4
description: 使用Monad（洋葱）解决嵌套functor
---

### pointed functor

container.of 的作用不仅仅是代替 new 关键字进行容器创建，而是用来将值放在*默认最小化上下文*中

> pointer funtor 就是实现了 <div style={{backgroundColor:'lightgrey',display:'inline-block',padding:'0 6px'}}>of</div> 方法的 functor

从而能够进一步进行 map 调用

### join

在很多情况我们对一个 container 进行 map 时会将其包进另一个 container 中，从而导致过多的 container 包裹使其后续难以处理了，利用 join 方法可以将相同类型的容器进行合并从而防止过多的相同容器嵌套，以 Maybe 容器为例

```typescript
Maybe.prototype.join = function () {
  return this.isNothing() ? Maybe.of(null) : this.__value
}
//  join :: Monad m => m (m a) -> m a
var join = function (mma) {
  return mma.join()
}
```

### chain

在拥有 join 后，我们每调用一次 map 若返回的是存在嵌套的容器，都需要跟一个 join 进行解套，而 chain 方法直接结合 map 和 join，将这两个行抽象成为一个 chain 行为

```typescript
//  chain :: Monad m => (a -> m b) -> m a -> m b
var chain = curry(function (f, m) {
  return m.map(f).join() // 或者 compose(join, map(f))(m)
})
```

### 练习

```typescript
require('../../support')
var Task = require('data.task')
var _ = require('ramda')

// Exercise 1
// ==========
// Use safeProp and map/join or chain to safely get the street name when given a user

var safeProp = _.curry(function (x, o) {
  return Maybe.of(o[x])
})
var user = {
  id: 2,
  name: 'albert',
  address: {
    street: {
      number: 22,
      name: 'Walnut St'
    }
  }
}

var ex1 = _.compose(
  _.chain(safeProp('name')),
  _.chain(safeProp('street')),
  safeProp('address')
)
// Exercise 2
// ==========
// Use getFile to get the filename, remove the directory so it's just the file, then purely log it.

var getFile = function () {
  return new IO(function () {
    return require('path').basename(__filename)
  })
}

var pureLog = function (x) {
  return new IO(function () {
    console.log(x)
    return 'logged ' + x // for testing w/o mocks
  })
}

var ex2 = _.compose(_.chain(pureLog), getFile)
// Exercise 3
// ==========
// Use getPost() then pass the post's id to getComments().

var getPost = function (i) {
  return new Task(function (rej, res) {
    setTimeout(function () {
      res({ id: i, title: 'Love them tasks' }) // THE POST
    }, 300)
  })
}
var getComments = function (i) {
  return new Task(function (rej, res) {
    setTimeout(function () {
      res([
        { post_id: i, body: 'This book should be illegal' },
        { post_id: i, body: 'Monads are like smelly shallots' }
      ])
    }, 300)
  })
}

var ex3 = _.compose(
  _.chain(getComments),
  map((post) => post.id),
  getPost
)

// Exercise 4
// ==========
// Use validateEmail, addToMailingList and emailBlast to implement ex4's type signature.
// It should safely add a new subscriber to the list, then email everyone with this happy news.

//  addToMailingList :: Email -> IO [Email]
var addToMailingList = (function (list) {
  return function (email) {
    return new IO(function () {
      list.push(email)
      return list
    })
  }
})([])

//  emailBlast :: [Email] -> IO String
function emailBlast(list) {
  return new IO(function () {
    return 'emailed: ' + list.join(',') // for testing w/o mocks
  })
}

//  validateEmail :: Email -> Either String Email
var validateEmail = function (x) {
  return x.match(/\S+@\S+\.\S+/)
    ? new Right(x)
    : new Left('invalid email')
}

//  ex4 :: Email -> Either String (IO String)
var ex4 = _.compose(
  _.map(_.chain(emailBlast)),
  _.map(addToMailingList),
  validateEmail
)

module.exports = {
  ex1: ex1,
  ex2: ex2,
  ex3: ex3,
  ex4: ex4,
  user: user
}
```
