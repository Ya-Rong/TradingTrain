<template>
  <div>
    <button v-if="!publicWalletAddress" @click="connectPhantom">Connect Wallet</button>
    <div v-else>
      <p>Welcome to the Solana network</p>
      <button @click="disconnectPhantom">Disconnect Wallet</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    // 創建狀態鉤子，將 publicWalletAddress 設置為初始值 ''
   const publicWalletAddress = ref('');   // ref()：用於保存狀態。

    // 定義 connectPhantom 函數，使用 async (異步)非同步方式，
    // 監聽並檢查是否安裝了 Phantom 錢包，然後連接錢包並獲取錢包地址
    async function connectPhantom() {
      const walletData = window.solana && window.solana.isPhantom;
      if (walletData) {
        try {
          await window.solana.connect();
          const publicKey = window.solana.publicKey.toString();
          publicWalletAddress.value = publicKey;
        } catch (e) {
          console.log(e);
        }
      } else {
        alert('Phantom wallet is not installed');
      }
    }

    // 定義 disconnectPhantom 函數，
    // 斷開錢包連接並重置 publicWalletAddress 為空字符串
    function disconnectPhantom() {
      window.solana.disconnect();
      publicWalletAddress.value = '';
    }

    // 返回要在模板中使用的所有變量和函數，這裡使用 ES6 物件簡寫的方式
    return {
      publicWalletAddress,
      connectPhantom,
      disconnectPhantom
    };
  }
}
</script>

<style scoped>
body {
  background-color: rgba(31, 41, 55, 1);
}
</style>

<!-- <script>
export default {
  data() {
    return {
      publicWalletAddress: ''
    }
  },
  methods: {
    async connectPhantom() {
      const walletData = window.solana && window.solana.isPhantom
      if (walletData) {
        try {
          await window.solana.connect();
          const publicKey = window.solana.publicKey.toString();
          this.publicWalletAddress = publicKey;
        } catch (e) {
          console.log(e)
        }
      } else {
        alert('Phantom wallet is not installed');
      }
    },
    disconnectPhantom() {
      window.solana.disconnect();
      this.publicWalletAddress = '';
    }
  }
}
</script>

<template>
    <div>
      <button v-if="!publicWalletAddress" @click="connectPhantom">Connect Wallet</button>
      <div v-else>
        <p>Welcome to the Solana network, {{ publicWalletAddress }}</p>
        <button @click="disconnectPhantom">Disconnect Wallet</button>
      </div>
    </div>
  </template>

<style scoped>
body {
  background-color: rgba(31, 41, 55, 1);
}
</style> -->

<!-- <template>
  <div>
    <button v-if="!connected" @click="connect()">Connect</button>
    <div v-if="connected">
      Connected to wallet address: {{ publicKey }}
      <button @click="disconnect()">Disconnect</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { usePhantomWallet } from "@solana/wallet-adapter-react";

export default {
  setup() {
    const publicKey = ref(null);
    const connected = ref(false);

    const { publicKey: walletPublicKey, signAllTransactions, connect, disconnect } = usePhantomWallet();

    publicKey.value = walletPublicKey?.toBase58();
    connected.value = !!walletPublicKey;

    return {
      publicKey,
      connected,
      signAllTransactions,
      connect,
      disconnect,
    };
  },
};
</script> -->
