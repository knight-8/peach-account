import { defineComponent } from "vue";
import purse from '../../assets/icons/purse.svg'
import s from './WelcomeLayout.module.scss'
import { RouterLink } from "vue-router";
import { WelcomeLayout } from "./WelcomeLayout";

export const First = defineComponent({
    setup: (props, context) => {
        const slots = {
            icon: () => <img src={purse} />,
            title: () => <h2>会挣钱<br />也会省钱</h2>,
            buttons: () => <>
                <RouterLink class={s.fake} to="/welcome/2">下一页</RouterLink>
                <RouterLink class={s.next} to="/welcome/2">下一页</RouterLink>
                <RouterLink to="/start">跳过</RouterLink>
                </>
        }
        return () => (
            <WelcomeLayout v-slots={slots}></WelcomeLayout>
        )
    }
})