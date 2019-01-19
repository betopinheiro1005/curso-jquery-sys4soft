/* VALIDAÇÕES */

/* Adicionando métodos de validação */

jQuery.validator.addMethod("cpf", function (value, element) {
    value = jQuery.trim(value);

    value = value.replace('.', '');
    value = value.replace('.', '');
    cpf = value.replace('-', '');
    while (cpf.length < 11)
        cpf = "0" + cpf;
    var expReg = /^0+$|^1+$|^2+$|^3+$|^4+$|^5+$|^6+$|^7+$|^8+$|^9+$/;
    var a = [];
    var b = new Number;
    var c = 11;
    for (i = 0; i < 11; i++) {
        a[i] = cpf.charAt(i);
        if (i < 9)
            b += (a[i] * --c);
    }
    if ((x = b % 11) < 2) {
        a[9] = 0;
    } else {
        a[9] = 11 - x;
    }
    b = 0;
    c = 11;
    for (y = 0; y < 10; y++)
        b += (a[y] * c--);
    if ((x = b % 11) < 2) {
        a[10] = 0;
    } else {
        a[10] = 11 - x;
    }

    var retorno = true;
    if ((cpf.charAt(9) != a[9]) || (cpf.charAt(10) != a[10]) || cpf.match(expReg))
        retorno = false;

    return this.optional(element) || retorno;

}, "Informe um CPF válido");

/* -------------------------------------------------------------------------------------------------------------------- */

jQuery.validator.addMethod("cnpj", function (cnpj, element) {
    cnpj = jQuery.trim(cnpj);

    // DEIXA APENAS OS NÚMEROS
    cnpj = cnpj.replace('/', '');
    cnpj = cnpj.replace('.', '');
    cnpj = cnpj.replace('.', '');
    cnpj = cnpj.replace('-', '');

    var numeros, digitos, soma, i, resultado, pos, tamanho, digitos_iguais;
    digitos_iguais = 1;

    if (cnpj.length < 14 && cnpj.length < 15) {
        return this.optional(element) || false;
    }
    for (i = 0; i < cnpj.length - 1; i++) {
        if (cnpj.charAt(i) != cnpj.charAt(i + 1)) {
            digitos_iguais = 0;
            break;
        }
    }

    if (!digitos_iguais) {
        tamanho = cnpj.length - 2;
        numeros = cnpj.substring(0, tamanho);
        digitos = cnpj.substring(tamanho);
        soma = 0;
        pos = tamanho - 7;

        for (i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2) {
                pos = 9;
            }
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0)) {
            return this.optional(element) || false;
        }
        tamanho = tamanho + 1;
        numeros = cnpj.substring(0, tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2) {
                pos = 9;
            }
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1)) {
            return this.optional(element) || false;
        }
        return this.optional(element) || true;
    } else {
        return this.optional(element) || false;
    }
}, "Informe um CNPJ válido."); // Mensagem padrão

/* -------------------------------------------------------------------------------------------------------------------- */

jQuery.validator.addMethod('celular', function (value, element) {
    value = value.replace("(", "");
    value = value.replace(")", "");
    value = value.replace("-", "");
    value = value.replace(" ", "").trim();
    if (value == '0000000000') {
        return (this.optional(element) || false);
    } else if (value == '00000000000') {
        return (this.optional(element) || false);
    }
    if (["00", "01", "02", "03", , "04", , "05", , "06", , "07", , "08", "09", "10"].indexOf(value.substring(0, 2)) != -1) {
        return (this.optional(element) || false);
    }
    if (value.length < 10 || value.length > 11) {
        return (this.optional(element) || false);
    }
    if (["6", "7", "8", "9"].indexOf(value.substring(2, 3)) == -1) {
        return (this.optional(element) || false);
    }
    return (this.optional(element) || true);
}, 'Informe um número de telefone celular válido!');

/* -------------------------------------------------------------------------------------------------------------------- */

$.validator.addMethod("dateBR", function (value, element) {
    if (value.length != 10)
        return false;
    // verificando data
    var data = value;
    var dia = data.substr(0, 2);
    var barra1 = data.substr(2, 1);
    var mes = data.substr(3, 2);
    var barra2 = data.substr(5, 1);
    var ano = data.substr(6, 4);
    if (data.length != 10 || barra1 != "/" || barra2 != "/" || isNaN(dia) || isNaN(mes) || isNaN(ano) || dia > 31 || mes > 12)
        return false;
    if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && dia == 31)
        return false;
    if (mes == 2 && (dia > 29 || (dia == 29 && ano % 4 != 0)))
        return false;
    if (ano < 1900)
        return false;
    return true;
}, "Informe uma data válida");  // Mensagem padrão

/* -------------------------------------------------------------------------------------------------------------------- */

$.validator.addMethod("regex", function (value, element, regexp) {
    var re = new RegExp(regexp);
    return this.optional(element) || re.test(value);
}, "Please check your input.");


jQuery.validator.addMethod("match", function (value, element, options) {

    if (value === $(options).val()) {
        return true;
    } else {
        return false;
    }
}, "Elements do not match");


/* ==================================================================================================================== */

$(document).ready(function () {


    $('form#form_descarga').validate({
        rules: {
            nome: {
                regex: /^[a-zA-ZÁÉÍÓÚÂÊÔáéíóúçâêôã\s]{3,}$/
            },
            sobrenome: {
                regex: /^[a-zA-ZÁÉÍÓÚÂÊÔáéíóúçâêôã\s]{4,}$/
            },
            nome_completo: {
                regex: /^[a-zA-ZÁÉÍÓÚÂÊÔáéíóúçâêôã\s]{7,}$/
            },
            senha: {
                rangelength: [6, 15]
            },
            confirmar_senha: {
                // equalTo: "#senha",
                equalTo: "form[id='form_descarga'] div[id='descarga'] #senha",
                rangelength: [6, 15]
            },
            email: {
                regex: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/
            },
            confirmar_email: {
                // equalTo: "#email"
                equalTo: "form[id='form_descarga'] div[id='descarga'] #email",
                regex: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/
            },
            telefone: {
                regex: /\([0-9]{2}\)[\s][0-9]{4}-[0-9]{4}/
            },
            celular: {
                celular: true,
                regex: /\([0-9]{2}\)[\s]9[0-9]{4}-[0-9]{4}/
            },
            mensagem: {
                maxlength: 255
            },

            /* -------------------------------------------------------------------------------------------------------------------- */

            data_nascimento: {
                date: true,
                min: "1900-01-01",
                max: "2018-01-01"
            },
            cpf: {
                cpf: true
            },
            altura_pessoa: {
                number: true,
                regex: /[1-2]{1}.[0-9]{1}[0-9]{1}/,
                min: 1.00,
                max: 2.39
            },
            peso_pessoa: {
                digits: true,
                min: 30,
                max: 229
            },

            /* -------------------------------------------------------------------------------------------------------------------- */

            cnpj: {
                cnpj: true
            }
        },
        messages: {
            nome: {
                required: "Preenchimento obrigatório.",
                regex: "Mínimo: 3 caracteres alfabéticos. Sem números."
            },
            sobrenome: {
                required: "Preenchimento obrigatório.",
                regex: "Mínimo: 4 caracteres alfabéticos. Sem números."
            },
            nome_completo: {
                required: "Preenchimento obrigatório.",
                regex: "Mínimo: 7 caracteres alfabéticos. Sem números."
            },
            senha: {
                required: "Preenchimento obrigatório.",
                rangelength: "Mínimo: 6 caracteres, Máximo: 15 caracteres."
            },
            confirmar_senha: {
                required: "Preenchimento obrigatório.",
                rangelength: "Mínimo: 6 caracteres, Máximo 15 caracteres",
                equalTo: "As senhas não conferem!."
            },
            email: {
                required: "Preenchimento obrigatório.",
                regex: "Digite um email valido.",
                email: "Digite um email válido."
            },
            confirmar_email: {
                required: "Preenchimento obrigatório.",
                email: "Digite um email válido.",
                equalTo: "Os endereços de email digitados não conferem!"
            },
            telefone: {
                required: "Preenchimento obrigatório.",
                regex: "Código de área ou número de telefone inválido."
            },
            celular: {
                required: "Preenchimento obrigatório.",
                celular: "Número de celular inválido!",
                regex: "Código de área ou número de celular inválido."
            },
            mensagem: {
                required: "Digite a sua mensagem.",
                maxlength: "Máximo: 255 caracteres"
            },

            /* -------------------------------------------------------------------------------------------------------------------- */

            data_nascimento: {
                date: "Data de nascimento inválida",
                required: "Informe a data de nascimento",
                min: "A data deve ser superior a 01/01/1900",
                max: "A data deve ser inferior a 01/01/2018"
            },
            sexo: {
                required: "Clique em  uma das alternativas."
            },
            escolaridade: {
                required: "Clique em  uma das alternativas."
            },
            cpf: {
                required: "Preenchimento obrigatório.",
                cpf: 'CPF inválido'
            },
            altura_pessoa: {
                number: "Altura inválida.",
                required: "Informe sua altura.",
                regex: "Valor inválido!",
                min: "Altura mínima: 1.00m",
                max: "Altura máxima: 2.39m"
            },
            peso_pessoa: {
                digits: "Digite só números (valor inteiro).",
                required: "Informe o seu peso.",
                min: "Valor mínimo: 30kg",
                max: "Valor máximo: 229kg"
            },

            /* -------------------------------------------------------------------------------------------------------------------- */

            cep: {
                required: "Preenchimento obrigatório.",
            },
            uf: {
                required: "Selecione o Estado."
            },
            pais: {
                required: "Selecione o País."
            },

            /* -------------------------------------------------------------------------------------------------------------------- */

            cnpj: {
                required: "Preenchimento obrigatório.",
                cpf: 'CNPJ inválido'
            },

            /* -------------------------------------------------------------------------------------------------------------------- */

            submitHandler: function (form) {
                alert('ok');
            }


            /*
             required: "Este campo &eacute; requerido.",
             remote: "Por favor, corrija este campo.",
             email: "Por favor, forne&ccedil;a um endere&ccedil;o eletr&ocirc;nico v&aacute;lido.",
             url: "Por favor, forne&ccedil;a uma URL v&aacute;lida.",
             date: "Por favor, forne&ccedil;a uma data v&aacute;lida.",
             dateISO: "Por favor, forne&ccedil;a uma data v&aacute;lida (ISO).",
             number: "Por favor, forne&ccedil;a um n&uacute;mero v&aacute;lido.",
             digits: "Por favor, forne&ccedil;a somente d&iacute;gitos.",
             creditcard: "Por favor, forne&ccedil;a um cart&atilde;o de cr&eacute;dito v&aacute;lido.",
             equalTo: "Por favor, forne&ccedil;a o mesmo valor novamente.",
             accept: "Por favor, forne&ccedil;a um valor com uma extens&atilde;o v&aacute;lida.",
             maxlength: jQuery.validator.format("Por favor, forne&ccedil;a n&atilde;o mais que {0} caracteres."),
             minlength: jQuery.validator.format("Por favor, forne&ccedil;a ao menos {0} caracteres."),
             rangelength: jQuery.validator.format("Por favor, forne&ccedil;a um valor entre {0} e {1} caracteres de comprimento."),
             range: jQuery.validator.format("Por favor, forne&ccedil;a um valor entre {0} e {1}."),
             max: jQuery.validator.format("Por favor, forne&ccedil;a um valor menor ou igual a {0}."),
             min: jQuery.validator.format("Por favor, forne&ccedil;a um valor maior ou igual a {0}.")
             
             */
        }
    });
});
