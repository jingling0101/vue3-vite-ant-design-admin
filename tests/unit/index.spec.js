import Too from '../../src/views/index/index.vue'
import {
    foo,
    cloneArrayBySpreadOperator,
    cloneArrayByArrayFrom,
    cloneArrayByArraySlice,
    cloneArrayByArrayMap,
    cloneArrayByArrayFilter,
    cloneArrayByArrayAssign,
} from './foo'

test("foo", () => {
    console.log(Too)
    console.log(foo())
    expect(1 + 1).toBe(2)
})

test("cloneArrayBySpreadOperator", () => {
    const arr = [1, 2, 3]
    const newArr = cloneArrayBySpreadOperator(arr)
    newArr[0] = 0
    expect(arr).not.toEqual(newArr)
    expect(newArr).toEqual([0, 2, 3])
    expect(arr).toEqual([1, 2, 3])
})

test("cloneArrayByArrayFrom", () => {
    const arr = [1, 2, 3]
    const newArr = cloneArrayByArrayFrom(arr)
    newArr[0] = 0
    expect(arr).not.toEqual(newArr)
    expect(newArr).toEqual([0, 2, 3])
    expect(arr).toEqual([1, 2, 3])
})

test("cloneArrayByArraySlice", () => {
    const arr = [1, 2, 3]
    const newArr = cloneArrayByArrayFilter(arr)
    newArr[0] = 0
    expect(arr).not.toEqual(newArr)
    expect(newArr).toEqual([0, 2, 3])
    expect(arr).toEqual([1, 2, 3])
})

test("cloneArrayByArrayMap", () => {
    const arr = [1, 2, 3]
    const newArr = cloneArrayByArrayMap(arr)
    newArr[0] = 0
    expect(arr).not.toEqual(newArr)
    expect(newArr).toEqual([0, 2, 3])
    expect(arr).toEqual([1, 2, 3])
})

test("cloneArrayByArrayFilter", () => {
    const arr = [1, 2, 3]
    const newArr = cloneArrayByArrayFilter(arr)
    newArr[0] = 0
    expect(arr).not.toEqual(newArr)
    expect(newArr).toEqual([0, 2, 3])
    expect(arr).toEqual([1, 2, 3])
})

test("cloneArrayByArrayAssign", () => {
    const arr = [1, 2, 3]
    const newArr = cloneArrayByArrayAssign(arr)
    newArr[0] = 0
    expect(arr).not.toEqual(newArr)
    expect(newArr).toEqual([0, 2, 3])
    expect(arr).toEqual([1, 2, 3])
})