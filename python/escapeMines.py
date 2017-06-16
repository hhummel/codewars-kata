#Solution to "Escape the Mines!" 3 kyu
#https://www.codewars.com/kata/5326ef17b7320ee2e00001df

def solve(map, miner, exit):
    """Depth first tree search"""

    def next_position(position, step):  
        trial = dict(position)
        if step == "up":
            trial['y'] = position['y'] - 1
        if step == "down":
            trial['y'] = position['y'] + 1
        if step == "left":
            trial['x'] = position['x'] - 1
        if step == "right":
            trial['x'] = position['x'] + 1
        if trial['x'] < 0 or trial['y'] < 0 or trial['x'] > len(map)-1 or trial['y'] > len(map[0])-1 or not map[trial['x']][trial['y']]:
            return False
        return trial

    def reverse_step(step):
        if step == "up":
            return "down"
        if step == "down":
            return "up"
        if step  == "left":
            return "right"
        if step == "right":
            return "left"
 
    path = []
    attempt = ["up", "down", "left", "right"]

    def search(location):
        position = dict(location)
        if position['x'] == exit['x'] and position['y'] == exit['y']:
            return path
        for step in attempt:
            if path and step == reverse_step(path[-1]):
                continue
            trial = next_position(position, step)
            if trial:
                path.append(step)
                result = search(trial)
                if result:
                    return result
                path.pop()
        return False
    return search(miner)
