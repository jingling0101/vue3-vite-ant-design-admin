export function foo() {
    return "foo"
}

exports.cloneArrayBySpreadOperator = (arr) => {
    return [...arr]
}

exports.cloneArrayByArrayFrom = (arr) => {
    return Array.from(arr)
}

exports.cloneArrayByArraySlice = (arr) => {
    return arr.slice()
}

exports.cloneArrayByArrayMap = (arr) => {
    return arr.map((i) => i)
}

exports.cloneArrayByArrayFilter = (arr) => {
    return arr.filter(() => true)
}

exports.cloneArrayByArrayAssign = (arr) => {
    return Object.assign([],arr)
}