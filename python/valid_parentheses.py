#Solution for "Valid Parentheses" 5kyu
#https://www.codewars.com/kata/52774a314c2333f0a7000688

def valid_parentheses(string):
    string_list = list(string)
    if len(string_list) == 0:
        return True
    counter = 0
    for char in string_list:
        if char == '(':
            counter = counter + 1
        if char == ')':
            counter = counter - 1
        if counter < 0:
            return False
            
    if counter == 0:
        return True
    else:
        return False
