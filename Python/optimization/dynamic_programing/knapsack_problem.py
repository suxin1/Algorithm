"""
Problem: 在各种名贵物品中选择一定数量放进包裹中，使包裹中物品的价值最大化，前提是包裹所能携带的重量有限。
"""
from typing import List, Callable


class Item(object):
    def __init__(self, n, v, w):
        self.name = n
        self.value = v
        self.weight = w

    def getName(self):
        return self.name

    def getValue(self):
        return self.value

    def getWeight(self):
        return self.weight

    def __str__(self):
        result = "<{},{},{}>".format(self.name, self.value, self.weight)
        return result


def greedy(items: List[Item], max_weight: int, key_fun: Callable):
    assert type(items) == list and max_weight > 0
    itemsCopy = sorted(items, key=key_fun, reverse=True)

    result = []
    total_value = 0.0
    total_weight = 0.0
    i = 0
    while total_weight < max_weight and i < len(itemsCopy):
        if (total_weight + itemsCopy[i].getWeight()) <= max_weight:
            total_value += itemsCopy[i].getValue()
            total_weight += itemsCopy[i].getWeight()
            result.append(itemsCopy[i])
        i += 1
    return result, total_value


def value(item):
    return item.getValue()


def weightInverse(item):
    return 1.0 / item.getWeight()


def density(item):
    return item.getValue() / item.getWeight()


"""
Brute force 
"""


def d2b(n: int, numDigits: int):
    """requires: n is a natural number less than 2**numDigits
    returns a binary string of length numDigits representing the
    the decimal number n."""
    assert n >= 0 and n < 2 ** numDigits
    bStr = ''
    while n > 0:
        bStr = str(n % 2) + bStr
        n = n // 2
    while numDigits - len(bStr) > 0:
        bStr = '0' + bStr
    return bStr


def genPset(items):
    numSubsets = 2 ** len(items)
    templates = []

    for i in range(numSubsets):
        templates.append(d2b(i, len(items)))

    pset = []
    for t in templates:
        elem = []
        for i in range(len(t)):
            if t[i] == '1':
                elem.append(items[i])
        pset.append(elem)

    return pset


"""
Decision Tree
"""


def solve(items, avail):
    if len(items) == 0 or avail == 0:
        result = (0, ())
    elif items[0].getWeight() > avail:
        result = solve(items[1:], avail)
    else:
        current_item = items[0]

        # Explore left branch
        with_value, with_items = solve(items[1:], avail - current_item.getWeight())

        with_value += current_item.getValue()
        with_items += (current_item,)

        # Explore right branch
        without_value, without_items = solve(items[1:], avail)

        if with_value > without_value:
            result = (with_value, with_items)
        else:
            result = (without_value, without_items)

    return result


def fast_solve(items, avail, memo=None):
    if memo == None:
        memo = {}
    if "{},{}".format(len(items), avail) in memo:
        result = memo["{},{}".format(len(items), avail)]
        return result
    if len(items) == 0 or avail == 0:
        result = (0, ())
    elif items[0].getWeight() > avail:
        result = fast_solve(items[1:], avail, memo)
    else:
        current_item = items[0]

        # Explore left branch
        with_value, with_items = fast_solve(items[1:], avail - current_item.getWeight(), memo)

        with_value += current_item.getValue()
        with_items += (current_item,)

        # Explore right branch
        without_value, without_items = fast_solve(items[1:], avail, memo)

        if with_value > without_value:
            result = (with_value, with_items)
        else:
            result = (without_value, without_items)

    memo["{},{}".format(len(items), avail)] = result

    return result
