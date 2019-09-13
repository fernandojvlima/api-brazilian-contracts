import axios from 'axios';

const api = axios.create({
    baseURL: 'http://compras.dados.gov.br/contratos/doc/contrato/',
});

export default api;