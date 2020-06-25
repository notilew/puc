window.addEventListener('load', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const code = document.querySelector('#search').value;
        const h3 = document.querySelector('h3');
        const quote = {};

        h3.textContent = 'Searching...';
        quote.symbol = document.querySelector('#symbol');
        quote.description = document.querySelector('#description');
        quote.price = document.querySelector('#price');
        quote.priceOpen = document.querySelector('#price-open');
        quote.dayHigh = document.querySelector('#day-high');
        quote.dayLow = document.querySelector('#day-low');

        fetch(`/quote?symbol=${code}`).then(response => {
            response.json().then(data => {
                h3.textContent = '';
                quote.symbol.textContent = `Symbol: ${data.symbol}`;
                quote.description.textContent = `Description: ${data.description}`;
                quote.price.textContent = `Price: ${data.price}`;
                quote.priceOpen.textContent = `Price Open: ${data.priceOpen}`;
                quote.dayHigh.textContent = `Day High: ${data.dayHigh}`;
                quote.dayLow.textContent = `Day Low: ${data.dayLow}`;
            });
        });
    });
});