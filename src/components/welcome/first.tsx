import { defineComponent } from "vue";
import logo from '../../assets/icons/peach.svg'

export const First = defineComponent({
    setup:(props, context) => {
        return () => {
            <div>
                <img src={logo} alt="" />
                <h1>First</h1>
            </div>
            
        }
    }
})