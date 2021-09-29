const aob =
    [
        { framework: 'React.JS', website: 'Paypal' },
        { framework: 'React.JS', website: 'Tesla' },
        { framework: 'Angular', website: 'Google' },
        { framework: 'Next.js', website: 'holabhavin' },
        { framework: 'Vue.JS', website: 'Vue' },
        { framework: 'JavaScript', website: 'heynikhil' },
    ]

// legacy js
let getUniqueDetailWithCount = new Map;
aob.forEach(element => {
    if (getUniqueDetailWithCount.has(element.framework)) {
        getUniqueDetailWithCount.set(element.framework, getUniqueDetailWithCount.get(element.framework) + 1)
    } else {
        getUniqueDetailWithCount.set(element.framework, 1)
    }
});

let getUniqueDetailWithCountArr = [];
for (let key of getUniqueDetailWithCount.keys()) {
    getUniqueDetailWithCountArr.push({
        victim: key,
        count: getUniqueDetailWithCount.get(key)
    })
}
console.log(getUniqueDetailWithCountArr);


// Modern js 
const uniqueWithCount = [...new Map(aob.map(item =>
    [
        item['framework'],
        {
            victim: item['framework'],
            count: aob.filter(b => item['framework'] == b.framework).length
        }
    ])).values()];

console.log(uniqueWithCount);