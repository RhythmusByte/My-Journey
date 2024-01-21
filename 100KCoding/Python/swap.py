a=input("Enter value of a = ")
b=input("Enter value of b = ")

print('Current values of a is ' + a + ' and value of b is ' + b + '.')

temp=a #temperory storing the value of a
a=b #Now the a is free so given the value of b to a
b=temp #Now the b is free so the value of temp is given to b

print('a = ' + a)
print('b = ' + b)
