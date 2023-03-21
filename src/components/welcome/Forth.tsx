import { defineComponent } from "vue";
import cloud from '../../assets/icons/cloud.svg'
import s from './First.module.scss'
import { RouterLink } from "vue-router";

export const Forth = defineComponent({
    setup:(props, context) => {
        return () => (
            <div class={s.wrapper}>
                <div class={s.card}>
                    <img src={cloud} alt="钱包" />
                    <h2>云备份<br/>无惧数据丢失</h2>
                </div>
                <div class={s.actions}>
                    <RouterLink class={s.fake} to="/welcome/3">下一页</RouterLink>
                    <RouterLink class={s.next} to="/start">完成</RouterLink>
                    <RouterLink class={s.fake} to="/start">跳过</RouterLink>
                </div>
            </div>
        )
    }
})