<template>
  <div class="billboard">
    <!-- <h1 class="display-5">time left : {{startValue}} s</h1> -->
    <!-- <div id="score">
    </div> -->
      <h1 class="display-5">{{user1.username}} <br> {{userScore1}}</h1>
      <h1 class="display-5">{{user2.username}} <br> {{userScore2}}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Billboard',
  data () {
    return {
      startValue: 5
    }
  },
  methods: {
    countDownTimer() {
      if(this.startValue > 0) {
        setTimeout(() => {
            this.startValue -= 1
            this.countDownTimer()
        }, 1000)
      }
    }
  },
  created: function () {
    this.countDownTimer()
  },
  computed: {
    ...mapState(['userScore1']),
    ...mapState(['userScore2']),
    ...mapState(['user1']),
    ...mapState(['user2'])
  }
}
</script>

<style scoped>
  .billboard{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 10px 0;
  }
</style>
