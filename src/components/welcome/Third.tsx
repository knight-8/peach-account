import { defineComponent } from "vue";
import visuliazation from '../../assets/icons/visuliazation.svg'
import s from './First.module.scss'
import { RouterLink } from "vue-router";

export const Third = defineComponent({
    setup:(props, context) => {
        return () => (
            <div class={s.wrapper}>
                <div class={s.card}>
                    <img src={visuliazation} alt="钱包" />
                    <h2>数据可视化<br/>收支一目了然</h2>
                </div>
                <div class={s.actions}>
                    <RouterLink class={s.fake} to="/welcome/4">下一页</RouterLink>
                    <RouterLink class={s.next} to="/welcome/4">下一页</RouterLink>
                    <RouterLink to="/start">跳过</RouterLink>
                </div>
            </div>
        )
    }
})