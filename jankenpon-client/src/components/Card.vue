<template>
  <div>
    <img src="../assets/batu.png" alt="rock-picture" class="match-img" @click.prevent="chooseCard('Rock')">
    <img src="../assets/gunting.png" alt="shears-picture" class="match-img" @click.prevent="chooseCard('Shears')">
    <img src="../assets/kertas.png" alt="paper-picture" class="match-img" @click.prevent="chooseCard('Paper')">
    <hr class="my-4">
    <div id="card">
      <h1 class="display-5" v-if="flag === true">{{userCard1}}</h1>
      <h1 class="display-5" v-if="flag === true">{{userCard2}}</h1>
    </div>
    <!-- <p class="lead">
      <a class="btn btn-secondary btn-lg" href="#" role="button" @click.prevent="getResult">Play</a>
    </p> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Cards',
  data () {
    return {
      flag: false
    }
  },
  methods: {
    chooseCard (card) {
      this.cardPoint = card
      console.log(card, 'INI CARD =====++++==+++===++++')
      this.$socket.emit('sendCard', {cardFromVue: this.cardPoint, access_token: localStorage.access_token, room: localStorage.room})
      
    },
    getResult () {
      if (this.userCard1 && this.userCard2) {
        this.flag = true
      } 
      if (this.userCard1 === 'Rock' && this.userCard2 === 'Shears') {
        // this.userScore1 += 1
        this.$store.commit('SET_USERSCORE1', true)
        setTimeout(() => {
          this.$store.commit('REMOVE_USER1')
          this.$store.commit('REMOVE_USER2')
  
          this.$store.commit('REMOVE_CARD1')
          this.$store.commit('REMOVE_CARD2')
          this.flag = false
        }, 1500)
      } else if (this.userCard1 === 'Rock' && this.userCard2 === 'Paper') {
        // this.userScore2 += 1
        this.$store.commit('SET_USERSCORE2', true)
        setTimeout(() => {
          this.$store.commit('REMOVE_USER1')
          this.$store.commit('REMOVE_USER2')
  
          this.$store.commit('REMOVE_CARD1')
          this.$store.commit('REMOVE_CARD2')
          this.flag = false
        }, 1500)
      } else if (this.userCard1 === 'Shears' && this.userCard2 === 'Paper') {
        // this.userScore1 += 1
        this.$store.commit('SET_USERSCORE1', true)
        setTimeout(() => {
          this.$store.commit('REMOVE_USER1')
          this.$store.commit('REMOVE_USER2')
  
          this.$store.commit('REMOVE_CARD1')
          this.$store.commit('REMOVE_CARD2')
          this.flag = false
        }, 1500)
      } else if (this.userCard2 === 'Rock' && this.userCard1 === 'Shears') {
        // this.userScore2 += 1
        this.$store.commit('SET_USERSCORE2', true)
        setTimeout(() => {
          this.$store.commit('REMOVE_USER1')
          this.$store.commit('REMOVE_USER2')
  
          this.$store.commit('REMOVE_CARD1')
          this.$store.commit('REMOVE_CARD2')
          this.flag = false
        }, 1500)
      } else if (this.userCard2 === 'Rock' && this.userCard1 === 'Paper') {
        // this.userScore1 += 1
        this.$store.commit('SET_USERSCORE1', true)
        setTimeout(() => {
          this.$store.commit('REMOVE_USER1')
          this.$store.commit('REMOVE_USER2')
  
          this.$store.commit('REMOVE_CARD1')
          this.$store.commit('REMOVE_CARD2')
          this.flag = false
        }, 1500)
      } else if (this.userCard2 === 'Shears' && this.userCard1 === 'Paper') {
        // this.userScore2 += 1
        this.$store.commit('SET_USERSCORE2', true)
        setTimeout(() => {
          this.$store.commit('REMOVE_USER1')
          this.$store.commit('REMOVE_USER2')
  
          this.$store.commit('REMOVE_CARD1')
          this.$store.commit('REMOVE_CARD2')
          this.flag = false
        }, 1500)
      } else if (this.userCard2 === 'Rock' && this.userCard1 === 'Rock' || this.userCard2 === 'Shears' && this.userCard1 === 'Shears' || this.userCard2 === 'Paper' && this.userCard1 === 'Paper') {
        // this.userScore2 += 1
        setTimeout(() => {
          this.$store.commit('REMOVE_USER1')
          this.$store.commit('REMOVE_USER2')
  
          this.$store.commit('REMOVE_CARD1')
          this.$store.commit('REMOVE_CARD2')
          this.flag = false
        }, 1500)
      }
      if (+this.userScore1 == 3 || +this.userScore2 == 3) {
        if (+this.userScore1 > +this.userScore2) {
          this.$swal({
          title: `${this.user1.username} win`,
          text: `${this.userScore1} vs ${this.userScore2}`,
          icon: "success",
          button: "OK",
        })
        this.$store.commit('REMOVE_USERSCORE1')
        this.$store.commit('REMOVE_USERSCORE2')
        } else if (+this.userScore1 < +this.userScore2) {
          this.$swal({
          title: `${this.user2.username} win`,
          text: `${this.userScore2} vs ${this.userScore1}`,
          icon: "success",
          button: "OK",
        })
        this.$store.commit('REMOVE_USERSCORE1')
        this.$store.commit('REMOVE_USERSCORE2')
        }
      }
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
  #card{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 10px 0;
  }
</style>