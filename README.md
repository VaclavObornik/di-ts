

# Dependency Injection for Typescript
Lightweight wrap and extension of [angular/di.js](https://github.com/angular/di.js) for TypeScript.


##Usage
###car.ts
```typescript
import {Inject} from 'di.ts'
import {Engine} from './engine'

@Inject
export class Car {
  constructor(public engine: Engine) {}
}
```

###engine.ts
```typescript
import {Injector} from 'di.ts'

export class Engine {

}

@Provide(Engine)
export class MockEngine {

}
```

###main.ts
```typescript
import {Injector} from 'di.ts'
import {Car} from './car'

//instantiate car
var injector = new Injector();
var car: Car = injector.get(Car);
```



