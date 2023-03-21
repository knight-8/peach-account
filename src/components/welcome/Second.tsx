import { defineComponent } from "vue";
import clock from '../../assets/icons/clock.svg'
import s from './First.module.scss'
import { RouterLink } from "vue-router";

export const Second = defineComponent({
    setup:(props, context) => {
        return () => (
            <div class={s.wrapper}>
                <div class={s.card}>
                    <img src={clock} alt="钱包" />
                    <h2>每日提醒<br/>每一笔账单都不会遗漏</h2>
                </div>
                <div class={s.actions}>
                    <RouterLink class={s.fake} to="/welcome/3">下一页</RouterLink>
                    <RouterLink class={s.next} to="/welcome/3">下一页</RouterLink>
                    <RouterLink to="/start">跳过</RouterLink>
                </div>
            </div>
        )
    }
})