import { defineComponent } from "vue";
import clock from '../../assets/icons/clock.svg'
import s from './WelcomeLayout.module.scss'
import { RouterLink } from "vue-router";
import { WelcomeLayout } from "./WelcomeLayout";

export const Second = defineComponent({
    setup:(props, context) => {
        return () => (
            <WelcomeLayout>
                {{
                    icon: () => <img src={clock} alt="钱包" />,
                    title: () => <h2>每日提醒<br/>每一笔账单都不会遗漏</h2>,
                    buttons: () => <>
                    <RouterLink class={s.fake} to="/welcome/3">下一页</RouterLink>
                    <RouterLink class={s.next} to="/welcome/3">下一页</RouterLink>
                    <RouterLink to="/start">跳过</RouterLink>
                    </>
                }}
            </WelcomeLayout>
        )
    }
})