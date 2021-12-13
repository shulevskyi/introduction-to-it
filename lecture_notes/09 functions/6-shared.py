cache = {}


def addProcedure(a, b):
   key = f'{a}, {b}'
    res = cache.setdefault(key, None)
    if res is not None:
        return res
    res = a + b
    cache[key] = res
    return res


def subProcedure(a, b):
    key = f'{a}, {b}'
    res = cache.setdefault(key, None)
    if res is not None:
        return res
    res = a - b
    cache[key] = res
    return res


print('sub:', subProcedure(5, 2))
print('add:', addProcedure(5, 2))
