    const pantallaNumAnterior = document.querySelector('[data-num-anterior]');
    const pantallaNumActual = document.querySelector('[data-num-actual]');
    const numeroB = document.querySelectorAll('[data-numero]')
    const signoB = document.querySelectorAll('[data-signo]')
    const resultadoB = document.querySelector('[data-resultado]')
    const borrarTodoB = document.querySelector('[data-borrar-todo]')
    const borrarB = document.querySelector('[data-borrar]')

        let numAnterior = '';
        let numActual = '';
        let operacion = null;

        function actualizarPantalla() {
            pantallaNumActual.textContent = numActual;
            pantallaNumAnterior.textContent = numAnterior + (operacion ? operacion : ''); 
            
        }

        numeroB.forEach(button => {
            button.addEventListener('click', () => {
                if (numActual === '0' && numActual.length === 1) {
                    numActual = button.textContent;
                } else {
                    numActual += button.textContent;
                }
                actualizarPantalla();
            });
        });

        signoB.forEach(button => {
            button.addEventListener('click', () => {
                if (numActual !== '') {
                    calcular();
                }
                operacion = button.textContent;
                numAnterior = numActual;
                numActual = '';
                actualizarPantalla();
            });
        });

        resultadoB.addEventListener('click', calcular);

        borrarTodoB.addEventListener('click', () => {
            numAnterior = '';
            numActual = '';
            operacion = null;
            actualizarPantalla();
        });

        borrarB.addEventListener('click', () => {
            numActual = numActual.slice(0, -1);
            actualizarPantalla();
        });

        function calcular() {
            const anterior = parseFloat(numAnterior);
            const actual = parseFloat(numActual);

            if (isNaN(anterior) || isNaN(actual)) return;

            switch (operacion) {
                case '+':
                    numActual = (anterior + actual).toString();
                    break;
                case '-':
                    numActual = (anterior - actual).toString();
                    break;
                case '*':
                    numActual = (anterior * actual).toString();
                    break;
                case '/':
                    numActual = (anterior / actual).toString();
                    break;
                default:
                    return;
            }

            operacion = null;
            numAnterior = '';
            actualizarPantalla();
        }

