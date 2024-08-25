# Simple Notes Every Chapter

## Chapter - 1
### Variables and constant
THere are three types of variable types: var, let, const. var was deprecated in ES 2015 update, and is not used anymore but still available. let is used to declare a variable, and once the variable is declared and initialized we can access the variable or perform operation on it. But referencing it before the declaration will cause an error. There are various naming conventions, and these are the ones that are commonly used: camelcase, snakecase, pascalcase, and lowercase. Let can be declared and can be initialized later, but const since it is a constant needs to be declared and initialized. But we can change the value of a const, but this applies to reference type data (Objects) which have their own methods of manipulating data.

### Data Types
There are two main data types, primitive data type and reference data type: -
Primitive Datatype: String, Number, Boolean, Null, Undefined, Symbol, and BigInt
Reference Datatype (Objects): Object Literals, Arrays, and Functions

### Difference between Primitive and Reference Types
Primitive Types are stored directly in the memory which is 'stack', and it is accessed from there. But on the other hand Reference are stored in the heap. The variable of the refernce type will be saved in the stack but when accessing values it will reference to heap.

### Type Conversion