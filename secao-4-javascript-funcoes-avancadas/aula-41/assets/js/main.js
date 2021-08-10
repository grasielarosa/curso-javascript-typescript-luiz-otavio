/* Seção 4: JavaScript - Funções - Avançado
Vídeo nro. 76 - aula 57 no git
Prática com Factory Function
 */
/*
* importante!
nesse exercício usamos eval porque o objetivo é estudar funções construtoras, porém ele pode gerar falhas de segurança e devemos evitar. 
*/

const criaCalculadora = () => {
    return {
        //atributos
        display: document.querySelector('.display'),

        //metodos
        inicia() {
            this.cliqueBotoes();
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta){
                    alert('conta inválida');
                    return;
                }
                this.display.value = String(conta)
            } catch(e) {
                alert('conta inválida');
                return;
            }
        },

        clearDisplay() {
            this.display.value = "";
        },
        apagaUm() {
            this.display.value = this.display.value.slice(0,-1); // esse slice deleta u último número digitado.
        },

        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText); // com esse innerText, pegamos o número que está no botão.
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }
            });
        },
        btnParaDisplay(valor){
            this.display.value += valor; //aqui é para que cada botão que clicamos vá concatenando no display
        }
        
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();









/*
o this com arrow function sempre se referenciará à calculadora. Se fizéssemos outro tipo de função, ela tomaria, a partir do momento do document.add... outro dono para o this, que seroa document. Nesse caso corrigiríamos com .bind(this)); 

cliqueBotoes() {
            até aqui o this é a calculadora
            document.addEventListener('click', 
            aqui é quando mudaria
            function(e) {
                const el = e.target;
                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText); // com esse innerText, pegamos o número que está no botão.
                }
            }.bind(this));
*/