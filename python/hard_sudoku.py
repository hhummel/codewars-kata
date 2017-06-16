#Solution for "Hard Sudoku Solver" 3 kyu
#https://www.codewars.com/kata/55171d87236c880cea0004c6

def solve(puzzle):
    """return the solved puzzle as a 2d array of 9 x 9"""
    #Find candidate solutions for each 3x3 subgrid that satisfy the initial puzzle constraints
    all_solutions = make_all_solutions(puzzle)
    #Combine the 3x3 subgrids into 3x9 rows, allowing those candidates that satisfy the additional row constraints
    all_rows = [make_all_rows(all_solutions, i) for i in range(3)]
    #Combine the 3x9 rows to make the complete grid.  Return the first solution encountered. 
    grid = find_first_grid(all_rows)
    return grid

#Make a dictionary of 3x3 subpuzzles keyed by (i,j) from a 9x9 puzzle.  I use the same function to find the excluded values
#from the 9x9 exclusions array I make in make_exclusions. 
def make_subpuzzles(puzzle):
    subgrids = {}
    for i in range(3):
        for j in range(3):
            subgrids[(i,j)] = [puzzle[3*i+k][3*j:3*j+3] for k in range(3)]
    return subgrids

#Make an array of excluded values for 9x9 puzzle.  For each square, keep track of the values already used in the corresponding row & col 
def make_exclusions(puzzle):
    exclusions = []
    for i in range(9):
        arr = []
        for j in range(9):
            row = set(puzzle[i])
            row.remove(puzzle[i][j])
            if 0 in row:
                row.remove(0)
            col = set([puzzle[k][j] for k in range(9)])
            col.remove(puzzle[i][j])
            if 0 in col:
                col.remove(0)
            arr.append(row.union(col))
        exclusions.append(arr)
    return exclusions

#Return an array of allowed solutions for a 3x3 subpuzzle. First permute the missing values among the locations with 0's
#Then kick out candidates the violate the row and column constraints of the original puzzle
def subgrid(subpuzzle, subexclusion):
    #Holds all legal solutions to this subpuzzle
    subgrid_solutions = []
    
    values = []
    #Holds missing locations from subpuzzle
    locations = []
    #Holds given values and locations
    given = {}

    #Fill in components of the subpuzzle
    for i in range(3):
        for j in range(3):
            val =  subpuzzle[i][j]
            loc = (i, j)
            if val == 0:
                locations.append(loc)
            else:
                given[loc] = val
    #Holds missing values from subpuzzle
    values = [i for i in range(1, 10) if i not in given.values()]

    #Loop over allowed solution permutations 
    from itertools import permutations
    for perm in permutations(values):
        include = True
        #Fill in the missing locations with the permuted values
        solution = given
        for (p, l) in zip(perm, locations):
            solution[l] = p 
        #Convert dictionary into a 3x3 array
        arr = []
        for i in range(3):
            arr.append([solution[(i, j)] for j in range(3)])
        #Check for excluded values
        for i in range(3):
            for j in range(3):
                if arr[i][j] in subexclusion[i][j]:
                    include = False
                    continue
        if include:
            subgrid_solutions.append(arr)

    return subgrid_solutions
    
#Return a dictionary of all allowed subpuzzle solutions for a 9x9 puzzle keyed by (i,j) of the subgrid 3x3 subgrids
def make_all_solutions(puzzle):
    subgrids = make_subpuzzles(puzzle)
    exclusions = make_exclusions(puzzle)
    subexclusions = make_subpuzzles(exclusions)
    all_solutions = {(i, j): subgrid(subgrids[(i,j)], subexclusions[(i,j)]) for i in range (3) for j in range(3)}
    return all_solutions

#Combine  3x3 or 3x6 subgrids if they don't have forbidden overlap
def append_subgrids(grid1, grid2):
    grid = []
    for i in range(3):
        row_set = set(grid1[i])
        for j in grid2[i]:
            if j in row_set:
                return False
        grid.append(grid1[i] + grid2[i])
    return grid

#Make all the allowed 3x9 rows from the 3x3 candidates for subgrid row i.
def make_all_rows(subgrids, i):
    arr0 = subgrids[(i, 0)]
    arr1 = subgrids[(i, 1)]
    arr2 = subgrids[(i, 2)]

    first_pair = [append_subgrids(arr0[j], arr1[k]) 
                     for j in range(len(arr0)) 
                         for k in range(len(arr1)) 
                             if append_subgrids(arr0[j], arr1[k])]

    all_rows = [append_subgrids(first_pair[j], arr2[k])
                   for j in range(len(first_pair)) 
                       for k in range(len(arr2)) 
                           if append_subgrids(first_pair[j], arr2[k])]
    return all_rows

#Combine 3x9 or 6x9 rows if no forbidden overlap 
def add_rows(row1, row2):
    for col in range(len(row1[0])):
        col_set = set()
        for row in range(len(row1)):
            col_set.add(row1[row][col])
        for row in range(len(row2)):
            if row2[row][col] in col_set:
                return False
    return row1 + row2

#Combine 3x9 rows to find all Sudoku solutions
def make_all_grids(rows):
    first_pair = [add_rows(rows[0][j], rows[1][k]) 
                     for j in range(len(rows[0])) 
                         for k in range(len(rows[1]))
                             if add_rows(rows[0][j], rows[1][k])]
    print("Done with first pair")
    all_grids  = [add_rows(first_pair[j], rows[2][k]) 
                     for j in range(len(first_pair)) 
                         for k in range(len(rows[2]))
                             if add_rows(first_pair[j], rows[2][k])]
    return all_grids

#Combine 3x9 rows to find one Sudoku solutions
def find_first_grid(rows):
    first_pair = [add_rows(rows[0][j], rows[1][k]) 
                     for j in range(len(rows[0])) 
                         for k in range(len(rows[1]))
                             if add_rows(rows[0][j], rows[1][k])]

    for j in range(len(first_pair)): 
        for k in range(len(rows[2])):
            if add_rows(first_pair[j], rows[2][k]):
                return add_rows(first_pair[j], rows[2][k]) 
                     
