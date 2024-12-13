---
title: Stack V2
slug: stack2
---

## **Stack in Kotlin**

A **Stack** is a collection that follows the **LIFO (Last-In, First-Out)** principle, meaning the element added last is removed first. Stacks are commonly used in scenarios such as expression evaluation, parsing, backtracking, and undo operations.

Kotlin does not have a dedicated `Stack` class but provides flexible options to implement stack-like behavior using **`MutableList`** and **`ArrayDeque`**.

### **Key Implementations for Stack in Kotlin**

#### **1. MutableList**

`MutableList` is a general-purpose collection that can be easily used to implement stack-like behavior. Operations such as push, pop, and peek can be achieved using built-in methods like `add()`, `removeAt()`, and indexing.

##### **Using MutableList as a Stack**

```kotlin
val stack = mutableListOf<Int>()
stack.add(10)  // Push
stack.add(20)
stack.add(30)
println(stack)  // Output: [10, 20, 30]

val top = stack.removeAt(stack.size - 1)  // Pop
println(top)  // Output: 30
println(stack)  // Output: [10, 20]

val peek = stack[stack.size - 1]  // Peek
println(peek)  // Output: 20
```

**Key Methods of `MutableList` for Stacks:**

- **`add(element)`**: Pushes an element onto the stack.
- **`removeAt(index)`**: Removes and returns the element at the given index (used for pop).
- **`size`**: Provides the current size of the stack.
- **Indexing (`[index]`)**: Retrieves the element at the specified index (used for peek).

---

#### **2. ArrayDeque**

An **`ArrayDeque`** is a resizable array-based double-ended queue (Deque) that is well-suited for stack operations. It provides efficient methods for adding and removing elements from the top of the stack.

##### **Using ArrayDeque as a Stack**

```kotlin
val stack = ArrayDeque<String>()
stack.addLast("A")  // Push
stack.addLast("B")
stack.addLast("C")
println(stack)  // Output: [A, B, C]

val top = stack.removeLast()  // Pop
println(top)  // Output: C
println(stack)  // Output: [A, B]

val peek = stack.last()  // Peek
println(peek)  // Output: B
```

**Key Methods of `ArrayDeque` for Stacks:**

- **`addLast(element)`**: Pushes an element onto the stack.
- **`removeLast()`**: Removes and returns the top element of the stack.
- **`last()`**: Retrieves the top element without removing it (peek).
- **`isEmpty()`**: Checks if the stack is empty.

---

### **Choosing Between `MutableList` and `ArrayDeque`**

| **Feature**        | **MutableList**                         | **ArrayDeque**                           |
| ------------------ | -------------------------------------- | ---------------------------------------- |
| **Implementation** | Resizable array                        | Resizable array-based deque              |
| **Performance**    | Slower for pop (shifting may occur)    | Faster push and pop                      |
| **Memory Usage**   | Comparable                            | Comparable                               |
| **Use Case**       | General-purpose, simple stack needs   | Optimized stack operations, thread-safe |

---

### **Common Stack Operations**

Below are examples of common stack operations:

#### **Push (Adding Elements)**

```kotlin
val stack = ArrayDeque<Int>()
stack.addLast(1)
stack.addLast(2)
stack.addLast(3)
println(stack)  // Output: [1, 2, 3]
```

#### **Pop (Removing the Top Element)**

```kotlin
val poppedElement = stack.removeLast()
println(poppedElement)  // Output: 3
println(stack)  // Output: [1, 2]
```

#### **Peek (Inspect the Top Element)**

```kotlin
val topElement = stack.last()
println(topElement)  // Output: 2
```

#### **Check if the Stack is Empty**

```kotlin
println(stack.isEmpty())  // Output: false
```

---

### **Conclusion**

Stacks in Kotlin can be efficiently implemented using `ArrayDeque` or `MutableList`, depending on the performance and simplicity requirements. `ArrayDeque` is generally recommended for stack operations due to its optimized performance for push and pop operations. Both implementations support a wide range of use cases, from algorithmic problems to practical applications in software development.

