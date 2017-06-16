#Solution for "Design a Simple Automaton (Finite State Machine)" 4 kyu
#https://www.codewars.com/kata/5268acac0d3f019add000203

class Automaton(object):

    def __init__(self):
        self.state = 'q1'
        self.transition = {'q1': {'0': 'q1', '1': 'q2'}, 'q2': {'0': 'q3', '1': 'q2'}, 'q3': {'0':'q2', '1': 'q2'}}

    def read_commands(self, commands):
        for command in commands:
            self.state = self.transition[self.state][command]
        return self.state == 'q2'

my_automaton = Automaton()
