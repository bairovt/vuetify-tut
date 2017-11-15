import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
// import router from 'vue-router'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {imageUrl: 'https://c1.staticflickr.com/2/1530/24444226506_2028124153_b.jpg',
        id: 'asddsf12', title: 'Meetup in New York', date: new Date(),
        location: 'New York', description: 'New York, New York'},
      {imageUrl: 'https://c1.staticflickr.com/9/8233/8586789587_c5f7ac6079_b.jpg',
        id: 'zxdsf34', title: 'Meetup in Paris', date: new Date(),
        location: 'Paris', description: 'Paris, Paris'}
    ],
    user: null
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    },
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'sdfsdfdfg'
      };
      commit('createMeetup', meetup)
    },
    signUserUp ({commit}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
          .then(user => {
            const newUser = {
              id: user.uid,
              registeredMeetups: []
            }
            commit('setUser', newUser)
          })
          .catch(console.error)
    },
    signUserIn ({commit}, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
          .then(user => {
            const newUser = {
              id: user.uid,
              registeredMeetups: []
            }
            commit('setUser', newUser)
          })
          .catch(console.error)
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          // console.log(meetup.id,  meetupId)
          return meetup.id === meetupId
        })
      }
    },
    user  (state) {
      return state.user
    }
  }
});