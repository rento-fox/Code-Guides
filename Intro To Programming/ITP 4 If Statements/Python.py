print('Hello Python.py') # Hello Python.py

# if else
import random
dice = random.randint(1,6)
print('You rolled a ' + str(dice)) # You rolled a (number between 1-6)
if dice == 6:
    print('You got 6!🥳') # You got 6!🥳
else:
    print('Try again') # Try again

# else if
age = 15
print('Age: ' + str(age)) # Age: 15
if age < 13:
    print('You are a child')
elif age < 20:
    print('You are a teenager') # You are a teenager
else:
    print('You are an adult')

# Nested if statements
age = 19
print('Age: ' + str(age)) # Age: 19
if age < 13:
    print('You are a child')
elif age < 20:
    print('You are a teenager') # You are a teenager
    if age > 17:
        print('and an adult!')  # and an adult!
else:
    print('You are an adult')

# EOF
