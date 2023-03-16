import { defineComponent, ref } from "vue";
import { RouterView } from "vue-router";
import "./App.scss"

export const App = defineComponent({
    setup() {
        return () => (
            <div>
                <RouterView />
                <h1>哈哈</h1>
            </div>
        )
    }
})