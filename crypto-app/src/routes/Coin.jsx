import React, {useState, useEffect} from 'react'

const Coin = () => {
        const [coin, setCoin] = useState({})

        const url = "https://api.coingecko.com/api/v3/coins/bitcoin"

        useEffect(() => {
          axios.get(url).then((res) => {
                setCoins(res.data)
          }).catch((error) => {
                console.log(error)
          })
        }, [])


        return (
      <div>
        <h1>{coin.id}</h1>
      </div>
        )
}

export default Coin
