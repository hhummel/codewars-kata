#Solution to "Matrix determinant" 4 kyu
#https://www.codewars.com/kata/52a382ee44408cea2500074c

def determinant(matrix):
    length = len(matrix)
    if length == 1:
        return matrix[0][0]

    if length == 2:
        return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]

    def submatrix(matrix, i):
        return [row[1:] for j, row in enumerate(matrix) if i != j]

    return sum([ (-1)**i * matrix[i][0] * determinant(submatrix(matrix, i)) for i in range(length)])
