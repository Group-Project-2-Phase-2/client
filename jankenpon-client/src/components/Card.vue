<template>
  <div>
    <img src="../assets/batu.png" alt="rock-picture" class="match-img" @click.prevent="changeCard('Rock')">
    <img src="../assets/gunting.png" alt="shears-picture" class="match-img" @click.prevent="changeCard('Shears')">
    <img src="../assets/kertas.png" alt="paper-picture" class="match-img" @click.prevent="changeCard('Paper')">
    <hr class="my-4">
    <h1 class="display-5">{{userCard1}}</h1>
    <p class="lead">
      <a class="btn btn-secondary btn-lg" href="#" role="button" @click.prevent="getResult">Submit</a>
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Cards',
  data () {
    return {
      matchCard: 0
    }
  },
  methods: {
    changeCard (card) {
      this.$store.commit('SET_CARD', card)
      this.$socket.emit('sendCard', this.userCard1)
    },
    getResult () {
      // if (this.cardName === 'Rock' && this.cardName === 'Shears') {
      //   this.matchCard += 0
      // } else if (this.cardName === 'Rock' && this.cardName === 'Paper') {
      //   this.matchCard += 0
      // } else if (this.cardName === 'Shears' && this.cardName === 'Paper') {
      //   this.matchCard += 1
      // } else if (this.cardName === 'Rock' && this.cardName === 'Rock') {
      //   this.matchCard += 1
      // }
      this.$store.commit('SET_SCORE')
    }
  },
  computed: {
    ...mapState(['userCard1'])
  },
  sockets: {
    sendAll (card) {
      console.log(card, 'DARI CARD DOT VUE');
    }
  }
}
</script>

<style scoped>
  .match-img{
    height: 100px;
    margin: 0 50px;
  }
  .match-img:hover{
    transform: scale(1.5);
  }
</style>