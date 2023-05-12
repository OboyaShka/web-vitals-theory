import { onCLS, onFID, onLCP } from 'web-vitals';

onCLS(console.log);
onFID(console.log);
onLCP(console.log);

const url = 'https://habr.com/ru/companies/tinkoff/articles/page';
(async function parse() {
    const result: any = [];
    let promises = Array.from(Array(19).keys()).map(index => {
        return () => fetch(url + (index + 1) + '/', {
            headers: {
                'Content-Type': 'text/html'
            }
        })
            .then(function(response) {
                console.log(response);
                return response.text();
            })
            .then(function(html) {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const articles = doc.getElementsByTagName('article');

                for (let article of Array.from(articles)) {
                    const isAngular = article.getElementsByClassName('tm-article-snippet__hubs-container')[0].textContent?.includes('Angular');
                    if (isAngular) {
                        const title = article.getElementsByClassName('tm-title_h2')[0];
                        const link = title.getElementsByTagName('a')[0];
                        result.push(`[${title.textContent}](${link.href.replace('http://localhost:3000', 'https://habr.com')}) | :white_large_square:`);
                    }
                }
            })
            .catch(function(err) {
                console.log('Failed to fetch page: ', err);
            });
    });

    for (const fn of promises) {
        await fn();
    }

    console.log(result.reverse().join('\n'));
})();
