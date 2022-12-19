let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];
let dl = cities.length;

function wyswietl() {

    let wstawOl = document.createElement('ol');
    document.body.appendChild(wstawOl);

    for (let i = 0; i < dl; i++) {
        let wstaw = document.createElement('li');
        wstaw.innerText = (cities[i]);
        wstaw.classList.add('city');
        console.log(wstaw);
        wstawOl.appendChild(wstaw);

    }

}

wyswietl()


