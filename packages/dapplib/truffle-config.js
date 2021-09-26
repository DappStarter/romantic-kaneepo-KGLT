require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remember history hover clinic foster ten'; 
let testAccounts = [
"0xa8d86dcee62a758cec40a436d1888adf90ecef535678a2a31ccc74b6f287a600",
"0xd9c321379975298fa50a74e0507c72a346355e5bcdcd09bc6a11099a4abf4778",
"0x470988b2ddcfc6171576aed04ad642dddbedb27dd9894421259c03cac548b2fe",
"0x070c6ad038123f34eff303ea759d12826a53a7862072ec527d346085e73de4e5",
"0x0e2ac122d149cb85bdf49c24e5897519095970a3dd7a27822b3ef953aa14f4f5",
"0x5a6c85e46fa1e3d8ce22ceac475db11a6247c5fb7b3f6f70c1d22fe7679845f8",
"0x23b91a084d5d1a805bd4c7f565fdd0724ad39ce8f68ba4848c78d48ba96b8bcc",
"0x82ecec1dbeccd84910539d3c3c5e885e881de7e2836c74d29e425ff2bb6381c4",
"0x8c5900af9fd403d1b02935975eeec81adcc420833b3c320563d201563de8f46a",
"0xe76cdb2bb5cdc6f13446afa63e8ed547f2d2effebb1dc9026b02c036bafb254c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

