<template>
  <div>
      <div style="margin-top:15%">

        <img src="../assets/Spinner-1s-200px.gif" alt="">
        <h1>PREPARE YOURSELF...</h1>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    created () {
        this.$store.dispatch('fetchEnemy')
    },
    sockets: {
      matchmakeComplete (data) {
        console.log('dari loading', data);
        let { id, UserIdB } = data
        if (this.room.id == id) {
          this.$router.push('/match')
          this.$store.commit('SET_ROOM', { room: id, UserIdB })
        }
      }
    },
    computed: {
    ...mapState(['room'])
    }
}
</script>

<style>

</style>