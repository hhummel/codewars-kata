#Solution for "Valid Braces" 4 kyu
#https://www.codewars.com/kata/5277c8a221e209d3f6000b56

def validBraces(string):
    always_valid = ['[', '{', '(']

    matching_brace = { '[': ']',
                       '{': '}',
                       '(': ')' }
    stack = []

    for brace in string:
        if brace in always_valid:
            stack.append(brace)
        else:
            if len(stack) == 0 or brace != matching_brace[stack[-1]]:
                return False
            stack.pop()
    return len(stack) == 0
