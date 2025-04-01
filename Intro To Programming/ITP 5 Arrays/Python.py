print('Hello Python.py') # Hello Python.py

# Creating an array
myFruits = ['banana', 'apple', 'orange']
print(myFruits) # ['banana', 'apple', 'orange']

# Read an array value
myFruits = ['banana', 'apple', 'orange']
print(myFruits[0]) # banana

# Updating an array value
myFruits = ['banana', 'apple', 'orange']
myFruits[0] = 'kiwi'
print(myFruits) # ['kiwi', 'apple', 'orange']

# Insert a value into an array
myFruits = ['banana', 'apple', 'orange']
myFruits.append('lemon')
print(myFruits) # ['banana', 'apple', 'orange', 'lemon']

# Add a value to a specific position in an array
myFruits = ['banana', 'apple', 'orange']
myFruits.insert(1, 'coconut')
print(myFruits) # ['banana', 'coconut', 'apple', 'orange']

# Remove value at index 1
myFruits = ['banana', 'apple', 'orange']
myFruits.pop(1)
print(myFruits) # ['banana', 'orange']

# Remove value from the end of an array
myFruits = ['banana', 'apple', 'orange']
myFruits.pop()
print(myFruits) # ['banana', 'apple']

# Length of an array
myFruits = ['banana', 'apple', 'orange']
print(len(myFruits)) # 3

# Loop through an array
myFruits = ['banana', 'apple', 'orange']
for fruit in myFruits:
    print(fruit) # (prints elements of the array vertically)

# Loop through an array with a counting variable
myFruits = ['banana', 'apple', 'orange']
for i in range(len(myFruits)):
    print(myFruits[i]) # (prints elements of the array vertically)

# Looping through an array of names, looking for "Bob"
listOfNames = ['Jones', 'Jill', 'Bob', 'Alice']
for i in range(len(listOfNames)):
    print(listOfNames[i]) # (prints names vertically, "Bob" is the last name printed)
    if listOfNames[i] == 'Bob':
        print('Found Bob!') # Found Bob!
        break

# EOF
