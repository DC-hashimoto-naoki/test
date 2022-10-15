import styled from 'vue-styled-components';

const StyledButton = styled('button', btnProps)`
    font-size: 2rem;
    margin: 3em;
    color: blue;
`

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