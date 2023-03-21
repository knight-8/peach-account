import { defineComponent } from "vue";
import purse from '../../assets/icons/purse.svg'
import s from './First.module.scss'
import { RouterLink } from "vue-router";

export const First = defineComponent({
    setup:(props, context) => {
        return () => (
            <div class={s.wrapper}>
                <div class={s.card}>
                    <img src={purse} alt="钱包" />
                    <h2>会赚钱<br/>也会省钱</h2>
                </div>
                <div class={s.actions}>
                    <RouterLink class={s.fake} to="/welcome/2">下一页</RouterLink>
                    <RouterLink class={s.next} to="/welcome/2">下一页</RouterLink>
                    <RouterLink to="/start">跳过</RouterLink>
                </div>
            </div>
        )
    }
})