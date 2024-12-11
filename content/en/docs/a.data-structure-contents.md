---
title: Data Structure Contents
slug: data-structure-contents
---

## **Data Structure Contents**

The data structure module contains the following data structures:

### **[Array & Specialized Arrays](./arrays)**
- **Array<T>**: A fixed-size array that holds elements of type `T`.
- **ByteArray, CharArray, IntArray, etc.**: Specialized arrays for primitive types (e.g., `Int`, `Char`, `Byte`).

### **[List](./lists)**
- **List<T>**: An ordered collection of elements, read-only.
- **MutableList<T>**: A list that supports modification operations.

### **[Set](./sets)**
- **Set<T>**: A collection that does not allow duplicates, read-only.
- **MutableSet<T>**: A mutable version of `Set<T>`, supports modifications.

### **[Map](./maps)**
- **Map<K, V>**: A collection of key-value pairs, read-only.
- **MutableMap<K, V>**: A mutable version of `Map<K, V>`, supports modifications.

### **[Queue & Deque](./queues)**
- **Queue<T>**: A collection that supports FIFO (first-in, first-out) operations.
- **ArrayDeque<T>**: A double-ended queue (Deque) providing fast operations from both ends.
- **LinkedList<T>**: A doubly linked list, also supports `Queue<T>` and `Deque<T>` operations.

### **[Stack](./stacks)**
- **Stack<T>**: A collection that follows LIFO (last-in, first-out) order. You can use `MutableList<T>` or `ArrayDeque<T>` to implement stack-like behavior.

### **[Tree Structures](./trees)**
- **TreeMap<K, V>**: A map that stores keys in sorted order, based on a tree structure.
- **TreeSet<T>**: A set that stores elements in sorted order.

### **[Pair & Triple](./pair-triple)**
- **Pair<A, B>**: A simple structure to store two related objects.
- **Triple<A, B, C>**: A structure to store three related objects.

### **[Set Variants](./set-variants)**
- **HashSet<T>**: An unordered collection of elements that doesn’t allow duplicates.
- **LinkedHashSet<T>**: A `HashSet` that maintains insertion order.
- **SortedSet<T>**: A `Set` that stores elements in a sorted order.

### **[Map Variants](./map-variants)**
- **HashMap<K, V>**: A map implementation based on hashing that provides fast lookups.
- **LinkedHashMap<K, V>**: A `HashMap` that maintains insertion order.
- **SortedMap<K, V>**: A `Map` that stores keys in a sorted order.

### **[Range & Sequence](./range-sequence)**
- **Range<T>**: Represents a range of values (e.g., `1..10`).
- **Sequence<T>**: A lazily evaluated collection for memory-efficient processing.


