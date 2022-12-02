const arr = [5, 5, 5, 5, 5]
const total = []
const sumNumber = () => {

    for (let i = 0; i < arr.length; i++) {

        const filterNum = arr.filter(num => num !== arr[i])

        if (filterNum.length === 0) {
            const filterNum2 = arr.slice(1)
            const sum = filterNum2.reduce((a, b) => a + b, 0);
            console.log(sum)
            return;
        }

        const sum = filterNum.reduce((a, b) => a + b, 0);

        total.push(sum)
    }
    const total1 = Math.min(...total)
    const total2 = Math.max(...total)
    if (total1 === total2) {
        console.log(total1, total2);
    } else {
        console.log(total1, total2);
    }
}
sumNumber()


