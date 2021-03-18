<template>
  <div>
    <img src="../assets/batu.png" alt="rock-picture" class="match-img" @click.prevent="chooseCard('Rock')">
    <img src="../assets/gunting.png" alt="shears-picture" class="match-img" @click.prevent="chooseCard('Shears')">
    <img src="../assets/kertas.png" alt="paper-picture" class="match-img" @click.prevent="chooseCard('Paper')">
    <hr class="my-4">
    <h1 class="display-5">{{"userCard1"}}</h1>
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
      matchCard: 0,
      cardPoint: ''
    }
  },
  methods: {
    chooseCard (card) {
      this.cardPoint = card
      this.$socket.emit('sendCard', {cardFromVue: this.cardPoint, access_token: localStorage.access_token, room: localStorage.room})
      
    },
    getResult () {
      if (this.userCard1 === 'Rock' && this.userCard2 === 'Shears') {
        // this.userScore1 += 1
        this.$store.commit('SET_USERSCORE1', true)
        this.$store.commit('REMOVE_USER1')
        this.$store.commit('REMOVE_USER2')

        this.$store.commit('REMOVE_CARD1')
        this.$store.commit('REMOVE_CARD2')
      } else if (this.userCard1 === 'Rock' && this.userCard2 === 'Paper') {
        // this.userScore2 += 1
        this.$store.commit('SET_USERSCORE2', true)
        this.$store.commit('REMOVE_USER1')
        this.$store.commit('REMOVE_USER2')

        this.$store.commit('REMOVE_CARD1')
        this.$store.commit('REMOVE_CARD2')
      } else if (this.userCard1 === 'Shears' && this.userCard2 === 'Paper') {
        // this.userScore1 += 1
        this.$store.commit('SET_USERSCORE1', true)
      } else if (this.userCard2 === 'Rock' && this.userCard1 === 'Shears') {
        // this.userScore2 += 1
        this.$store.commit('SET_USERSCORE2', true)
        this.$store.commit('REMOVE_USER1')
        this.$store.commit('REMOVE_USER2')

        this.$store.commit('REMOVE_CARD1')
        this.$store.commit('REMOVE_CARD2')
      } else if (this.userCard2 === 'Rock' && this.userCard1 === 'Paper') {
        // this.userScore1 += 1
        this.$store.commit('SET_USERSCORE1', true)
        this.$store.commit('REMOVE_USER1')
        this.$store.commit('REMOVE_USER2')

        this.$store.commit('REMOVE_CARD1')
        this.$store.commit('REMOVE_CARD2')
      } else if (this.userCard2 === 'Shears' && this.userCard1 === 'Paper') {
        // this.userScore2 += 1
        this.$store.commit('SET_USERSCORE2', true)
        this.$store.commit('REMOVE_USER1')
        this.$store.commit('REMOVE_USER2')

        this.$store.commit('REMOVE_CARD1')
        this.$store.commit('REMOVE_CARD2')
      }
      // this.$store.commit('REMOVE_USER1')
      // this.$store.commit('REMOVE_USER2')

      // this.$store.commit('REMOVE_CARD1')
      // this.$store.commit('REMOVE_CARD2')

      // console.log(this.userScore1, 'ini player 1');
    }
  },
  computed: {
    ...mapState(['user1']),
    ...mapState(['user2']),
    ...mapState(['userCard1']),
    ...mapState(['userCard2']),
    ...mapState(['userScore1']),
    ...mapState(['userScore2'])
  },
  sockets: {
    sendAll (data) {
      if (this.user1.id) {
          if (this.user1.id == data.id) {
            console.log('ID-nya sama');
            this.$store.commit('REMOVE_CARD1')
            this.$store.commit('REMOVE_CARD2')
            this.$store.commit('SET_CARD1', data)
            this.$store.commit('SET_CARD2', data)
          } else {
            this.$store.commit('REMOVE_CARD2')
            this.$store.commit('SET_USER2', data)
            this.$store.commit('SET_CARD2', data)
          }
      } else {
        this.$store.commit('REMOVE_CARD1')
        this.$store.commit('SET_USER1', data)
        this.$store.commit('SET_CARD1', data)
      }
      // HAPUSSSSS SEMUAAAA =============++++++=++++++==++++++==+++++
      // this.$store.commit('REMOVE_USER1')
      // this.$store.commit('REMOVE_USER2')

      // this.$store.commit('REMOVE_CARD1')
      // this.$store.commit('REMOVE_CARD2')

      if (this.user1.room && this.user2.room && this.user1.room == this.user2.room) {
          console.log('ABIS INI BANDINGKAN DAN TENTUKAN YG MENANG');
          this.getResult()
      } else if (this.user1.room && this.user2.room && this.user1.room != this.user2.room) {
        this.$store.commit('REMOVE_USER1')
        this.$store.commit('REMOVE_USER2')
      }
      
      console.log(this.user1.id, this.userCard1, 'DARI CARD DOT VUE1')
      console.log(this.user2.id, this.userCard2, 'DARI CARD DOT VUE2')
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