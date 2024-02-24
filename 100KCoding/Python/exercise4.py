print('Finding BMI = weight/height²')
weight = int(input("What is your weight?\t"))
height = float(input('What is your height in metres?\t'))

h = height * height
BMI = weight/h

print(int(BMI))
