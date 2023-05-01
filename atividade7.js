let custo=Number(prompt("Digite o preço de custo:"));
let percentual=Number(prompt("Digite o percentual de acréscimo:"));
let venda=percentual/100;
let mult=venda*custo;
let soma=mult+custo;
document.write(`O preço da venda é ${soma}`);
