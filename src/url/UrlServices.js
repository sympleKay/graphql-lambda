// const fetch = require('node-fetch');
const axios = require('axios').default;
const {URL_SHORTENER_API} = require ('../utils/constant');

const createShortUrl = async (args) => {
   
    const res = await axios.post(`${URL_SHORTENER_API}/api/shorten`, {
        longUrl: args.url
    })

    // console.log(res.data);
    return {
        id: res?.data?._id,
        short_code: res?.data?.urlCode,
        short_url: res?.data?.shortUrl,
        long_url: res?.data?.longUrl,
        created: res?.data?.createdAt
    };
}

module.exports = {createShortUrl}
