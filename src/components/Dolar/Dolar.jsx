import React, { useEffect } from 'react'
import { useState } from 'react'


export const Dolar = () => {

    const [dolar, setDolar] = useState([]);
    const [btc, setBtc] = useState([])

    const valorDolar = () => {
        fetch('https://criptoya.com/api/dolar')
            .then(response => response.json())
            .then((dolar) => {
                console.log(dolar)
                const { oficial, solidario, mep, blue } = dolar;
                const plantillaDolar =
                    <>
                        <p>Dolar Blue: ${blue}</p>
                        <p>Dolar MEP: ${mep}</p>
                        <p>Dolar Oficial: ${oficial}</p>
                        <p>Dolar Solidario: ${solidario}</p>
                    </>
                setDolar(plantillaDolar);
            });
    }

    const valorBtc = () => {    
        fetch('https://criptoya.com/api/btc/ars/1')
            .then(response => response.json())
            .then((btc) => {
                console.log(btc)
                const { argenbtc, bitex, bitmonedero, bitso, buenbit, cryptomkt, ripio, kriptonmarket, latamex, lemoncash, satoshitango } = btc;
                /* const argFormat = argenbtc.ask.toLocaleString('es-AR'); */
                const argFormat = (exchange) => {
                    return exchange.ask.toLocaleString('es-AR');
                }
                const argFormat2 = (exchange) => {
                    return exchange.bid.toLocaleString('es-AR');
                }
                const plantillaBTC =
                    <>
                        <p>Argen BTC: ${argFormat(argenbtc)} ${argFormat2(argenbtc)}</p>
                        <p>Bitex: ${argFormat(bitex)}  ${argFormat2(bitex)}</p>
                        <p>Bitmonedero: ${argFormat(bitmonedero)}  ${argFormat2(bitmonedero)}</p>
                        <p>Bitso: ${argFormat(bitso)}  ${argFormat2(bitso)}</p>
                        <p>Buenbit: ${argFormat(buenbit)}  ${argFormat2(buenbit)}</p>
                        <p>Cryptomkt: ${argFormat(cryptomkt)}  ${argFormat2(cryptomkt)}</p>
                        <p>Ripio: ${argFormat(ripio)}  ${argFormat2(ripio)}</p>
                        <p>Kriptonmarket: ${argFormat(kriptonmarket)}  ${argFormat2(kriptonmarket)}</p>
                        <p>Latamex: ${argFormat(latamex)}  ${argFormat2(latamex)}</p>
                        <p>Lemoncash: ${argFormat(lemoncash)}  ${argFormat2(lemoncash)}</p>
                        <p>Satoshitango: ${argFormat(satoshitango)}  ${argFormat2(satoshitango)}</p>
                    </>
                setBtc(plantillaBTC);
            })
    }

    const valorBancos = () => {
        fetch('https://criptoya.com/api/bancostodos')
        .then(response => response.json())
        .then((bancos) => {
            console.log(bancos)
        }) 
    }

    useEffect(() => {
        valorDolar();
        valorBtc();
        valorBancos()
        setInterval(() => {
            valorDolar();
        }, 60000);
    }, [])

    return (
        <>
            {dolar}
            {btc}
        </>
    )
}
