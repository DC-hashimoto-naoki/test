Vue.component('button-counter', {
    data: function(){
        return{
            count: 0
        }
    },
    template: '<div>text button</div>'
})

Vue.component('box', {
    data: function(){
        return{
            num: 1
        }
    },
    template: '<div>{{ num }}</div>'
})


new Vue({
    el: "#app",
    data: {
        text: "test"
    }
})