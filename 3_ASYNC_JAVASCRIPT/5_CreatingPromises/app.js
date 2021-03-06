const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve('YOUR FAKE DATA HERE');
            } else {
                reject('REQUEST ERROR');
            }
        }, 1000)
    })
}

fakeRequest('/dog/1')
    .then((data) => {
        console.log("DONE WITH REQUEST");
        console.log('DATA IS', data);
    })
    .catch((err) => {
        console.log("OHHH NO!", err);
    });












const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    })
}

delayedColorChange('red', 1000)
    .then(() => {
        return delayedColorChange('orange', 1000);
    })
    .then(() => {
        return delayedColorChange('yellow', 1000);
    })
    .then(() => {
        return delayedColorChange('green', 1000);
    })
    .then(() => {
        return delayedColorChange('blue', 1000);
    })
    .then(() => {
        return delayedColorChange('pink', 1000);
    })



