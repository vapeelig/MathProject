// 本题要求实现一个简单的排序算法：冒泡排序。

function bubbleSort(arr: number[]): void {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        // 处理数组中相邻的两个元素进行比较和交换
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // 如果前一个元素大于后一个元素，则交换它们的位置
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}

// 测试函数
const sortedArray = bubbleSort([64, 34, 25, 12, 22, 11, 90]);
console.log(sortedArray);
