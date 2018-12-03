import React from 'react'
import { Text } from 'react-native'
import Default from '../style/default'

//Inverte Texto
export const Invert = props => {
  const textoInvertido = props.texto.split('').reverse().join('')
  return <Text style={Default.ex}>{textoInvertido}</Text>
}

//Função para gerar números aleatórios entre 1 e 60
export const MegaSena = props => {
  //Atribui valor às duas variáveis min e max ao mesmo tempo
  const [min, max] = [1, 60]
  /*Cria um array com X numeros OU 6, caso não for passado um,
  com o valor 0. Ou seja (6 elementos).fill [0, 0, 0, 0, 0, 0]*/
  const numeros = Array(props.numeros || 6).fill(0))
  for (let i = 0; i < numeros.length; i++){
    let novoNumero = 0
    // Enquanto a array numeros incluir os numeros na array novoNumero..
    while (numeros.includes(novoNumero)){
   //Randomiza numeros entre 1 e 60 (max e min) e armazena em novoNumero
      novoNumero = Math.floor(Math.random() * (max - min + 1) + min )
    }
    //Guarda os valores randomicos de novoNumero na array numeros
    numeros[i] = novoNumero
  }
  //Ordena os valores em ordem crescente
  numeros.sort((a, b) => a - b)
  return <Text style={Default.ex}>{numeros.join(', ')}</Text>
}
