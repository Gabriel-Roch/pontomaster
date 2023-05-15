const dataAtual = new Date();
const horas = ('0' + dataAtual.getHours()).slice(-2);
const minutos = ('0' + dataAtual.getMinutes()).slice(-2);
const segundos = ('0' + dataAtual.getSeconds()).slice(-2);
const ano = dataAtual.getFullYear();
const mes = ('0' + (dataAtual.getMonth() + 1)).slice(-2);
const dia = ('0' + dataAtual.getDate()).slice(-2);

const dateFormatada = () => {
    return `${ano}-${mes}-${dia}`
}

const dateHoraFormatada = () => {
    return `${ano}-${mes}-${dia} ${horas}:${minutos}:${segundos}`
}

module.exports = {
    dateFormatada,
    dateHoraFormatada
}
