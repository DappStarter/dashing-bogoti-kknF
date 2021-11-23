require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note meadow undo hunt person equal gate'; 
let testAccounts = [
"0x0226ad2401af51ecb7a255b65553956fb41f6455f4d35d9df6f53a191555957d",
"0x13b0812dbcdb9824bee48d503e9372a60987b19e3f226fe0813725c4a8fb9c30",
"0x7cfdae6b245a3bfe5617dac28a4d01cfbb2f12bd7f66b941bf028667845cc18d",
"0xb1aeb22b3f6613cfaa1001439beaa1d1ca0597db9a06778fd3daf33c1e108052",
"0xcc1902fba22401a768d9f7bc3d35961fb6b8c07ba0f1603fc65ec7f34982c077",
"0xef341a5366da693ee3b35121308bcb39a6f48d7f544586a76fb0560cd00d20e5",
"0xd1de7150f1655ebcc2f05b7edd29e78334c581853d28d38dad2c13f760dd28ca",
"0xfd3f59e3905401ba7477c5e2cf2d187261dee95e6ce5a5d743407e1f14dbc44d",
"0x1d5b8f42aa30872c6b55abe59981e65711a13219d872b9d5844883ee291547ac",
"0xdababb94dece6eb02dc38309457cdb9240e735110b5e461124f497808c095740"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


