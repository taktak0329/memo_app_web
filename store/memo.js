// memo.js
export default {
  namespaced: true,
  state() {
    return {
      memo: [],
      page: 0,
    };
  },
  mutations: {
    insert: function(state, obj) {
      var d = new Date();
      var fmt = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes();
      state.memo.unshift({
        title: obj.title,
        content: obj.content,
        created: fmt
      });
    console.log('New memo added:', state.memo);
    },

    set_page: function(state, p) {
      state.page = p;
    },

    remove: function(state, obj) {
      for (let i = 0; i < state.memo.length; i++) {
        const ob = state.memo[i];
        if (ob.title === obj.title && ob.content === obj.content && ob.created === obj.created) {
          alert('remove it! -- ' + ob.title);
          state.memo.splice(i, 1);
          return;
        }
      }
    }
  }
};
