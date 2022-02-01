
const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value// use console.dir(form) for you to see the properties
    const config = { params: { q: searchTerm } }
    const response = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    // console.log(response)
    makeImmages(response.data)
    form.elements.query.value = "";
})


const makeImmages = (shows) => {
    for (let result of shows) {
        //console.log(result)
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}






