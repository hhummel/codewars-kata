#Solution for "Sum of lowest two positive integers" 7 kyu
#https://www.codewars.com/kata/558fc85d8fd1938afb000014

def sum_two_smallest_numbers(numbers):
    sorted_list = sorted(numbers)
    return sum(sorted_list[:2])
