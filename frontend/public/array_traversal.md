
# Array Traversal in Python

Array traversal refers to the process of accessing each element of the array sequentially. In Python, traversing arrays can be done using loops, list comprehensions, or recursion.

## 1. Traversing Using a `for` Loop

A `for` loop is the simplest way to iterate through an array and access each element.

### Example 1: Traversing Using a `for` Loop

```python
import array as arr

# Creating an array
numbers = arr.array('i', [1, 2, 3, 4, 5])

# Traversing the array
for number in numbers:
    print(number, end=" ")
```

### Output:

```
1 2 3 4 5
```

## 2. Traversing Using an Index-based `for` Loop

You can also traverse an array by accessing each element using its index in a loop.

### Example 2: Traversing with Index

```python
import array as arr

# Creating an array
numbers = arr.array('i', [10, 20, 30, 40, 50])

# Traversing using index
for i in range(len(numbers)):
    print(numbers[i], end=" ")
```

### Output:

```
10 20 30 40 50
```

## 3. Traversing Using List Comprehension

List comprehension provides a concise way to traverse an array and can be used to create a new list by performing operations on each element.

### Example 3: Traversing with List Comprehension

```python
import array as arr

# Creating an array
numbers = arr.array('i', [6, 7, 8, 9, 10])

# Using list comprehension to traverse the array
squared_numbers = [num * num for num in numbers]
print(squared_numbers)
```

### Output:

```
[36, 49, 64, 81, 100]
```

## 4. Traversing Using `while` Loop

A `while` loop can also be used to traverse an array. You need to manually manage the index when using this approach.

### Example 4: Traversing Using `while` Loop

```python
import array as arr

# Creating an array
numbers = arr.array('i', [2, 4, 6, 8, 10])

# Traversing using while loop
i = 0
while i < len(numbers):
    print(numbers[i], end=" ")
    i += 1
```

### Output:

```
2 4 6 8 10
```

## 5. Traversing Multi-dimensional Arrays

When working with multi-dimensional arrays, you need nested loops to traverse all elements.

### Example 5: Traversing a 2D Array

```python
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

# Traversing a 2D array
for row in matrix:
    for element in row:
        print(element, end=" ")
    print()
```

### Output:

```
1 2 3
4 5 6
7 8 9
```

## Conclusion

Array traversal is fundamental for accessing and manipulating array elements. Python offers several ways to traverse arrays, including `for` loops, `while` loops, list comprehensions, and more.
