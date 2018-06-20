function l(str: any) {
  console.log(str)
}

/*
l('// interface')
interface IComplexType {
  id: number,
  name: string
}

let complexVar: IComplexType;
complexVar = {
  id: 1,
  name:'char'
}
l(complexVar)

l('// optional interface properties')
interface IComplexTypeOptionalProps {
  id: number,
  name?: string
}

let complexVarOptionalProps: IComplexTypeOptionalProps;
complexVarOptionalProps = {
  id: 1
}
l(complexVarOptionalProps)

l('// class')

class SimpleClass {
  id: number;
  print() : void {
    console.log(`class has id: ${this.id}`);
  };
  getNum(a: number): number {
    return a * a;
  }
}

let class1 = new SimpleClass();
class1.id = 123;
class1.print();

let ans = class1.getNum(3);
l(ans);

l('// class - implementing interface')
interface IPrint {
  print()
}

function printClass(a: IPrint) {
  a.print();
} 

class ClassA implements IPrint {
  print() {
    console.log('ClassA.print()')
  }
}

class ClassB implements IPrint {
  print() {
    console.log('ClassB.print()')
  };
  bark() {
    console.log('bark...')
  }
}

let classA = new ClassA();
let classB = new ClassB();

printClass(classA)
printClass(classB)

l('// class - constructors')
class ClassWithConstructor {
  id: number;
  name: string;
  constructor(_id: number, _name: string) {
    this.id = _id;
    this.name = _name;
  }
}

let classWithConstructor = new ClassWithConstructor(4, 'char');
l(`${classWithConstructor.id}, ${classWithConstructor.name}`)

classWithConstructor.id = 123;
classWithConstructor.name = 'bora';
l(`${classWithConstructor.id}, ${classWithConstructor.name}`)

l('// class - functions')

class CompletTypeClass {
  private id: number;
  name: string;
  
  constructor(param1: string, param2: string);
  constructor(param1: number, param2: string);
  constructor(param1: any, param2: any) {
    if (typeof param1 === 'number') {
      this.id = param1;
    }
    this.name = param2;
  }

  print(): string {
    return `id: ${this.id}, name: ${this.name}`
  }

  usingOptionalParams(param1?: string): void {
    if (param1)
      console.log(`id: ${param1}`) 
  }

  usingDefaultParams(param1: string = 'hey!'): void {
    console.log(`id: ${param1}`)
  }
}

let complexTypeClass1 = new CompletTypeClass('aa', 'bb');
let complexTypeClass2 = new CompletTypeClass(1, 'bb');

l(complexTypeClass1.print());
l(complexTypeClass2.print());
complexTypeClass1.usingDefaultParams();
complexTypeClass1.usingDefaultParams('yey');
complexTypeClass1.usingOptionalParams(); // will not be printed
complexTypeClass1.usingOptionalParams('yo');

l('// class - constructor access modifiers')
class ConstructorModifier {
  constructor(public id: number, private name: string) { }

  print(): void {
    l(`${this.id}, ${this.name}`)
  }
}

let constructorModifier = new ConstructorModifier(123, 'xyz');
constructorModifier.print();

l('// class - property accessors')
class ClassWithPropAccessor {
  private _id: number;

  get id() {
    l('inside GET');

    return this._id;
  }

  set id(value: number) {
    l('inside SET');

    this._id = value;
  }
}

let classWithPropAccessor = new ClassWithPropAccessor();
classWithPropAccessor.id = 123;
l(classWithPropAccessor.id);

l('// class - static functions')
class FuncWithStatic {
  static addNum(a: number): number {
    return a * a;
  }

  sayHi(): void {
    l('say hi')
  }
}

let a = FuncWithStatic.addNum(4);
l(a)

let b = new FuncWithStatic();
b.sayHi();

l('// class - static properties')
class ClassWithStaticProps {
  static id: number;
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  displayId(): string {
    return `${ClassWithStaticProps.id}, ${this._name}`;
  }
}

ClassWithStaticProps.id = 123;
let classWithStaticProps = new ClassWithStaticProps('char')
let a = classWithStaticProps.displayId()
l(a)

let classWithStaticProps2 = new ClassWithStaticProps('bor')
let b = classWithStaticProps2.displayId()
l(b)

// without static props
class ClassWithoutStaticProps {
  id: number;
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  displayId(): string {
    return `${this.id}, ${this._name}`;
  }
}

let classWithoutStaticProps3 = new ClassWithoutStaticProps('fen');
classWithoutStaticProps3.id = 555;
let c = classWithoutStaticProps3.displayId()
l(c)

l('// Interface Inheritance')
interface IBase {
  id: number
}

interface IDerivedFromBase extends IBase{
  name: string
}

class InterfaceInheritance implements IDerivedFromBase {
  id: number;
  name: string;
}

class BaseClass implements IBase {
  id: number;
}

class DerivedFromBaseClass extends BaseClass implements IDerivedFromBase{
  name: string
}

let x = new DerivedFromBaseClass();
x.id = 123;
x.name = 'char';

l(x.id)
l(x.name);

l('// super')
class BaseClassWithConstructor {
  protected id: number;
  public id2: number;

  constructor(_id: number) {
    this.id = _id;
  }
}

let a = new BaseClassWithConstructor(1123);
a.id2 = 123; //only not protected props not visible
l(a.id2);

class DerivedFromBaseClassWithConstructor extends BaseClassWithConstructor {
  private name: string;

  constructor(_id: number, _name: string) {
    super(_id);

    this.name = _name;
  }

  displayName(): void {
    l(`${this.id}, ${this.name}`) //protected props from super (id) is visible
  }
}

let b = new DerivedFromBaseClassWithConstructor(456, 'bora');
b.displayName(); //only not protected inherited props not visible

l('// function overloading')
class BaseClassWithFunction {
  protected id: number;

  constructor(_id: number) {
    this.id = _id;
  }

  getProperties(): string {
    return this.id.toString();
  }
}

// function overloading without contructor - no need to call super
class DerivedFromBaseClassWithFunction extends BaseClassWithFunction {
  name: string;

  getProperties(): string {
    return `${this.name}, ${super.getProperties()}`;
  }
}

let q = new DerivedFromBaseClassWithFunction(234);
q.name = 'borab'

let r = q.getProperties();
l(r)

// function overloading with Constructor - need to call super
class DerivedFromBaseClassWithFunctionWithConstructor extends BaseClassWithFunction {
  name: string;

  constructor(_id: number) {
    super(_id);
  }

  getProperties(): string {
    return `${this.name}, ${super.getProperties()}`;
  }
}

let s = new DerivedFromBaseClassWithFunctionWithConstructor(667);
s.name = 'char'

let t = s.getProperties();
l(t)
*/

l('// abstract class')
