import { defineComponent } from "vue";
import cloud from '../../assets/icons/cloud.svg'
import s from './WelcomeLayout.module.scss'
import { RouterLink } from "vue-router";
import { WelcomeLayout } from "./WelcomeLayout";

export const Forth = defineComponent({
    setup: (props, context) => {
        return () => (
            <WelcomeLayout>
                {{
                    icon: () => <img src={cloud} alt="钱包" />,
                    title: () => <h2>云备份<br />无惧数据丢失</h2>,
                    buttons: () => <>
                        <RouterLink class={s.fake} to="/welcome/3">下一页</RouterLink>
                        <RouterLink class={s.next} to="/start">完成</RouterLink>
                        <RouterLink class={s.fake} to="/start">跳过</RouterLink>
                    </>
                }}
            </WelcomeLayout>
        )
    }
})