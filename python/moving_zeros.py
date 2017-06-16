#Solution to "Moving Zeros to the End" 5 kyu
#https://www.codewars.com/kata/52597aa56021e91c93000cb0

def move_zeros(array):
    #Have to be careful with False
    new_array = [element for element in array if element != 0 or element is False]
    zero_array = [element for element in array if element == 0 and element is not False]
    return new_array + zero_array
