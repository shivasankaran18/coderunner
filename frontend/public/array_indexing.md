
# Array Indexing in Python

Array indexing allows you to access individual elements of an array by referencing their position (index). Python arrays are zero-indexed, meaning the first element is at index `0`.

## Accessing Elements

To access elements of an array, you can use the array name followed by the index in square brackets `[]`.

### Example 1: Accessing Array Elements by Index

```python
import array as arr

# Creating an array
numbers = arr.array('i', [10, 20, 30, 40, 50])

# Accessing elements using their index
first_element = numbers[0]
second_element = numbers[1]
last_element = numbers[-1]

print("First element:", first_element)
print("Second element:", second_element)
print("Last element:", last_element)
```

### Output:

```
First element: 10
Second element: 20
Last element: 50
```

## Negative Indexing

Python allows the use of negative indices to access elements from the end of the array. The index `-1` refers to the last element, `-2` refers to the second last, and so on.

### Example 2: Accessing Elements with Negative Indexing

```python
import array as arr

# Creating an array
numbers = arr.array('i', [5, 10, 15, 20, 25])

# Accessing elements using negative indexing
second_last_element = numbers[-2]
third_last_element = numbers[-3]

print("Second last element:", second_last_element)
print("Third last element:", third_last_element)
```

### Output:

```
Second last element: 20
Third last element: 15
```

## Modifying Array Elements Using Indexing

You can modify an array element by accessing it via its index and assigning it a new value.

### Example 3: Modifying Elements by Index

```python
import array as arr

# Creating an array
numbers = arr.array('i', [1, 2, 3, 4, 5])

# Modifying elements
numbers[0] = 10
numbers[3] = 40

print("Modified array:", numbers)
```

### Output:

```
Modified array: array('i', [10, 2, 3, 40, 5])
```

## Conclusion

Array indexing in Python allows you to easily access and modify elements. Python also supports negative indexing, which simplifies working with arrays by allowing easy access to elements from the end.
