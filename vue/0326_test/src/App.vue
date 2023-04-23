<template>
  <div>
    <h1>Solana Wallet Connect Practice</h1>
    <solana-wallet />
  </div>
</template>

<script>
import SolanaWallet from './components/SolanaWallet.vue'

export default {
  name: 'App',
  components: {
    SolanaWallet,
  },
}
</script>

<!-- <script>
import SolanaWallet from './components/SolanaWallet.vue'
// Destructuring the data named solana from window
const { solana: solanaData } = window;
var phantom_input;
// Optional chaining
// if solanaData contain isPhantom attribute  
if (solanaData?.isPhantom) {
  phantom_input = solanaData;
}
else {
  phantom_input = null;
}
export default {
  // import components
  components: {
    SolanaWallet,
  },
  // provide data to grand child
  // use inject to access
  provide() {
    return {
      walletData: phantom_input
    }
  }
}
</script>
<template>
  <SolanaWallet />
</template> -->

<!-- <template>
  <div id="app">
    <solana-wallet></solana-wallet>
  </div>
</template>

<script>
import SolanaWallet from "./components/SolanaWallet.vue";

export default {
  name: "App",
  components: {
    SolanaWallet,
  },
};
</script> -->

<!-- <script setup>
import { WalletMultiButton } from "solana-wallets-vue";
</script>

<template>
  <wallet-multi-button></wallet-multi-button>
</template> -->

