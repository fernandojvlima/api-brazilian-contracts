import api from './api';

class App {
    constructor() {
        this.contracts = [];

        this.formEl = document.querySelector('form#contract-form');
        this.inpulEl = document.querySelector('input#contract-input');
        this.listEl = document.querySelector('ul#contract-list');

        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    async addRepository(event){
        event.preventDefault();

        const contractInput = this.inpulEl.value;

        if(contractInput.length === 0) 
            return;

        try {
            const response = await api.get(`/${contractInput}.json`);

            const { identificador, objeto, cnpj_contratada, valor_inicial, fornecedor:{title} } = response.data;

            this.contracts.push({
                identificador,
                objeto,
                cnpj_contratada,
                valor_inicial,
                title,
            });

            this.inpulEl.value = '';

            this.render();

        }   catch(err) {
                alert('Contrato não localizado');
        }
    }

        render() {
            this.listEl.innerHTML = '';

            this.contracts.forEach(contract => {
                let imgEl = document.createElement('img');
                imgEl.setAtribute('src', './icons/icon.png');
                
                let identifyEl = document.createElement('strong');
                identifyEl.appendChild(document.createTextNode(contract.identificador));

                let objetoEl = document.createElement('p');
                objetoEl.appendChild(document.createTextNode(contract.objeto));

                let cnpjEl = document.createElement('p');
                cnpjEl.appendChild(document.createTextNode(contract.cnpj_contratada));

                let valorEl = document.createElement('p');
                valorEl.appendChild(document.createTextNode(contract.valor_inicial));
                
                let fornecedorEl = document.createElement('p');
                fornecedorEl.appendChild(document.createTextNode(contract.title));

                let liListEl = document.createElement('li');
                
                liListEl.appendChild(imgEl);
                liListEl.appendChild(identifyEl);
                liListEl.appendChild(objetoEl);
                liListEl.appendChild(cnpjEl);
                liListEl.appendChild(valorEl);
                liListEl.appendChild(fornecedorEl);

                this.listEl.appendChild(liListEl);
            });
        }
    }

new App();