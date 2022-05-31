let courses = [
    {name: "Courses in England", prices: [0, 100]},
    {name: "Courses in Germany", prices: [500, null]},
    {name: "Courses in Italy", prices: [100, 200]},
    {name: "Courses in Russia", prices: [null, 400]},
    {name: "Courses in China", prices: [50, 250]},
    {name: "Courses in USA", prices: [200, null]},
    {name: "Courses in Kazakhstan", prices: [56, 324]},
    {name: "Courses in France", prices: [null, null]},
];

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

let sortCourses = (range) => {

    //cloning array, so we could work with it without changing it
    let guineaPig = [...courses];

    //sorting array and deleting elements, that didn't make the cut
    guineaPig.forEach(function (element, index, object) {
        if (element.prices[0] == null && element.prices[1] == null) {
        } else if (element.prices[0] == null) {
            if (range[1] == null) {
                if (range[0] >= element.prices[1]) {
                    delete object[index]
                }
            } else if (element.prices[1] > range[1]) {
                delete object[index]
            }
        } else if (element.prices[1] == null) {
            if (range[0] == null) {
                if (range[1] <= element.prices[0]) {
                    delete object[index]
                }
            } else if (element.prices[0] > range[0]) {
                delete object[index]
            }
        } else if (element.prices[0] < range[0]) {
            delete object[index]
        } else if (element.prices[1] > range[1]) {
            delete object[index]
        }
    })

    //using the spread method to make a clean array without empty spaces
    let result = {...guineaPig}
    return result;
}

console.log(sortCourses(requiredRange1))
console.log(sortCourses(requiredRange2))
console.log(sortCourses(requiredRange3))


