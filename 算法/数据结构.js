// 链表
class ListNde {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

const arr = [3, 5, 1, 2, 4]

function createLinkList(arr) {
    const len = arr.length;

    if (len === 0) throw new Error()

    let curNode = {
        value: arr[len - 1]
    }

    if (len === 1) return curNode

    for (let i = len - 2; i >= 0; i--) {
        curNode = {
            value: arr[i],
            next: curNode
        }
    }

    return curNode
}

console.log(createLinkList(arr))

// 栈
const stack = []

stack.push(1)
stack.push(2)
stack.push(3)

stack.pop()

// 队列
const quene = []

quene.push(1)
quene.push(2)
quene.push(3)

quene.shift()

// 字典（哈希）
const map = new Map()

map.set('key1', 1)
map.delete('key1')

// 集合 （无序、唯一）
const set = new Set()

// 二叉树

const TreeNode = {
    value: 1,
    children: [
        {
            value: 10
        },
        {
            value: 22
        }
    ]
}
