new Vue({
    el: "#appCep",
        //elemento raiz deste componente
        data: {
            endereco: {
                cep: null, //não tem nenhum valor inicial
                logradouro: null,
                estado: null, 
                cidade: null,
                bairro: null,
                siafi: null,
                ibge: null,
                ddd: null,
                gia: null
            }
        },
        methods: {
            alterouCep() {
                axios({
                    method: 'get',
                    url: `https://viacep.com.br/ws/${this.endereco.cep}/json`,
                    responseType: 'json'
                })
                
                .then(response => {
                //esse objeto vai retornar uma estrutura que tem uma variável data e vamos atribuir ao nosso campo
                var bean = response.data;
                this.endereco.logradouro = bean.logradouro;
                this.endereco.bairro = bean.bairro;
                this.endereco.estado = bean.uf;
                this.endereco.cidade = bean.localidade;
                this.endereco.siafi = bean.siafi;
                this.endereco.ddd = bean.ddd;
                this.endereco.ibge = bean.ibge;
                this.endereco.gia = bean.gia;

                });
            },
        }
        //parâmetro para trabalhar com variáveis
});