import random
import time
from knapsack_problem import Item, solve, fast_solve, greedy, value, weightInverse, density


def buildItems():
    names = ['clock', 'painting', 'radio', 'vase', 'book', 'computer']
    vals = [175, 90, 20, 50, 10, 200]
    weights = [10, 9, 4, 2, 1, 20]
    items = [Item(names[i], vals[i], weights[i]) for i in range(len(names))]
    return items


def buildLargeSetOfItems(num_items, max_value, max_weight):
    items = []
    for i in range(num_items):
        items.append(
            Item(
                "item{}".format(i),
                random.randrange(1, max_value),
                float(random.randrange(1, max_weight))
            )
        )
    return items


def testGreedy(Items, constraint, getKey):
    taken, val = greedy(Items, constraint, getKey)
    print('Total value of items taken = ' + str(val))
    for item in taken:
        print('  ', item)


def testGreedys(maxWeight=20):
    Items = buildItems()
    print('Items to choose from:')
    for item in Items:
        print('  ', item)
    print('Use greedy by value to fill a knapsack of size', maxWeight)
    testGreedy(Items, maxWeight, value)
    print('Use greedy by weight to fill a knapsack of size', maxWeight)
    testGreedy(Items, maxWeight, weightInverse)
    print('Use greedy by density to fill a knapsack of size', maxWeight)
    testGreedy(Items, maxWeight, density)


def test_decision_tree():
    large_items = buildLargeSetOfItems(50, 50, 10)
    
    solve_start = time.time()
    value_slow, choosed_slow = solve(large_items, 50)
    print("solve complete in {}".format(time.time() - solve_start))
    print(value_slow)
    print("Choosed items")
    for item in choosed_slow:
        print(item)

    fast_solve_start = time.time()
    value, choosed = fast_solve(large_items, 100)
    print("fast solve complete in {}".format(time.time() - fast_solve_start))
    print(value)
    print("Choosed items")
    for item in choosed:
        print(item)


test_decision_tree()
