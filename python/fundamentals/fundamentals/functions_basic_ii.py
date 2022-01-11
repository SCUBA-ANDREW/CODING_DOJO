# Countdown - Create a function that accepts a number as an input. Return a new list that counts down by one, from the number (as the 0th element) down to 0 (as the last element).
def Countdown(x):
    cuntdwn=[]
    for i in range(x,-1,-1):
        cuntdwn.append(i)
    return(cuntdwn)
print(Countdown(5))

# Print and Return - Create a function that will receive a list with two numbers. Print the first value and return the second.
def print_and_return(a,b):
    print(a)
    return(b)
y = print_and_return(1,2)
print(y)

# First Plus Length - Create a function that accepts a list and returns the sum of the first value in the list plus the list's length.
def first_plus_length(x):
    sum = x[0]+x[len(x)-1]
    print(sum)
first_plus_length([1,2,3,4,5])

# Values Greater than Second - Write a function that accepts a list and creates a new list containing only the values from the original list that are greater than its 2nd value. Print how many values this is and then return the new list. If the list has less than 2 elements, have the function return False
def values_greater_than_second(x):
    cnt=0
    temp=[]
    for i in range(0, len(x)):
        if x[i]>x[1]:
            cnt=cnt+1
            temp.append(x[i])
    print(cnt)
    return(temp)
values_greater_than_second([5,2,3,1,4])
values_greater_than_second([3])

# This Length, That Value - Write a function that accepts two integers as parameters: size and value. The function should create and return a list whose length is equal to the given size, and whose values are all the given value.
def length_and_value(a,b):
    temp=[]
    for i in range(0,a):
        temp.append(b)
    return(temp)
length_and_value(4,7)
length_and_value(6,2)

