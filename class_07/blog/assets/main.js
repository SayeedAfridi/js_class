const containerEl = document.getElementById('newsContainer')
// axios
//     .get(
//         'http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-09&sortBy=publishedAt&apiKey=a544ad5325e049c78311f171bd16a8e6'
//     )
//     .then(response => {
//         console.log(response.data.articles)
//     })
//     .catch(err => {
//         console.log(err)
//     })

const getNews = async () => {
    const res = await axios.get(
        'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a544ad5325e049c78311f171bd16a8e6'
    )
    console.log(res.data.articles.slice(0, 3))
    const threeNews = res.data.articles.slice(0, 3)

    threeNews.forEach(news => {
        const doc = document.createElement('div')
        doc.innerHTML = `
        <div class="col-md-4">
        <div class="single-blog-box">
            <div class="blog-box-bg blog-box-bg-1"></div>
            <div class="blog-box-content">
                <p class="blog-meta">
                    <a href=""> <i class="fa fa-user"></i></a>
                    ${news.author}
                    <i class="fa fa-calendar"></i> ${news.publishedAt}
                </p>
                <h3>${news.title}</h3>
                <p>${news.description}</p>
                <a href="${news.url}" target="blank" class="blog-readmore-btn"
                    >read more</a
                >
            </div>
        </div>
        </div>
        `
        containerEl.appendChild(doc)
    })
}

getNews()

console.log('Hello')
