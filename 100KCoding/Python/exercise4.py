print('Finding BMI = weight/height²')
weight = input("What is your weight?\t")
height = input('What is your height in metres?\t')

height = int(height)
weight = int(weight)
h = height * height
BMI = weight/h

print(int(BMI))
