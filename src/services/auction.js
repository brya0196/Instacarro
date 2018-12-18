import axios from "axios";

const config = {
  headers: {'Access-Control-Allow-Origin': '*'}
};

const proxy = {
  host: '172.17.25.49',
	port: 8080
};

const get = () => {
  return axios.get('https://s3-sa-east-1.amazonaws.com/config.instacarro.com/recruitment/auctions.json', config, proxy);
}

export {
  get
}