#Solution to Esolang Interpreters #1 - Introduction to Esolangs and My First Interpreter (MiniStringFuck) 6 kyu
#https://www.codewars.com/kata/586dd26a69b6fd46dd0000c0

def my_first_interpreter(code):
    message = []
    counter = 0
    for i in range(len(code)):
      if code[i] == '+':
        counter += 1
        counter %= 256
      elif code[i] == '.':
        message.append(chr(counter))
    return ''.join(message)
