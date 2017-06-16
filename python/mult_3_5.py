#Solution for "Multiples of 3 and 5" 6 kyu
#https://www.codewars.com/kata/514b92a657cdc65150000006

def solution(number):
    number_list = [num for num in range(number) if num % 3 == 0 or num % 5 == 0]
    return sum(number_list)
