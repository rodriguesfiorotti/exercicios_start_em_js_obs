import dayjs from "dayjs";

export function calcularIdade(dataNascimento) {
    //Salva a data de hoje e a de nascimento no formato do dayjs
    const hoje = dayjs();
    const nascimento = dayjs(dataNascimento);
    //Calcula a diferença entre elas e retorna no formato "year"
    const idade = hoje.diff(nascimento, "year");
    return idade;   
}

export function calcularDiasRestantesParaAniversario(dataNascimento) {
    //Salva a data de hoje e a de nascimento no formato do dayjs
    const hoje = dayjs();
    const nascimento = dayjs(dataNascimento);

    let proximoAniversario = nascimento.year(hoje.year())

    if (proximoAniversario.isBefore(hoje)) {
        proximoAniversario = proximoAniversario.add(1, "year");
    }

    console.log({proximoAniversario, hoje})
    const diasRestantes = proximoAniversario.diff(hoje, "day")
    return diasRestantes

}