#Solution to "Esolang Interpreters #2 - Custom Smallfuck Interpreter" 4 kyu
#https://www.codewars.com/kata/58678d29dbca9a68d80000d7

def interpreter(code, tape):
    inst_pointer = 0
    pointer = 0
    instructions = list(code)
    result = list(tape)
    sym = {'forward': {'incr': 1, 'close': ']', 'open': '['}, 'back': {'incr': -1, 'close': '[', 'open': ']'}} 

    def find_matching(inst_pointer, dir):
        """Find the corresponding bracket, using the stack counter trick. dir can be 'forward' or 'back'"""
        stack = []
        inst_pointer += sym[dir]['incr']
 
        while instructions[inst_pointer] != sym[dir]['close'] or len(stack) > 0:
            if instructions[inst_pointer] == sym[dir]['open']:
                stack.append(inst_pointer)
            if instructions[inst_pointer] == sym[dir]['close']:
                stack.pop()
            inst_pointer += sym[dir]['incr']
        return inst_pointer

    while inst_pointer >= 0 and pointer >= 0 and inst_pointer < len(instructions) and pointer < len(result):
        instruction = instructions[inst_pointer]
        datum = result[pointer]
        if instruction == '>':
            pointer += 1
        if instruction == '<':
            pointer -= 1
        if instruction == '*':
            result[pointer] = '0' if datum == '1' else '1'
        if instruction == '[' and datum == '0':
            inst_pointer = find_matching(inst_pointer, 'forward')
        if instruction == ']' and datum != '0':
            inst_pointer = find_matching(inst_pointer, 'back')
        inst_pointer += 1
    return ''.join(result)
