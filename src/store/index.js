import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {imageUrl: 'https://c1.staticflickr.com/2/1530/24444226506_2028124153_b.jpg',
        id: 'asddsf12', title: 'Meetup in New York', date: '2017-11-08'},
      {imageUrl: 'https://c1.staticflickr.com/9/8233/8586789587_c5f7ac6079_b.jpg',
        id: 'zxdsf34', title: 'Meetup in Paris', date: '2017-11-09'}
    ]
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
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
    }
  }
});