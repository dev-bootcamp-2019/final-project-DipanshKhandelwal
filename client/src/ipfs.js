var ipfsClient = require('ipfs-http-client')

// connect to ipfs daemon API server
var ipfs = ipfsClient('ipfs.infura.io', '5001', { protocol: 'http' })

export default ipfs;