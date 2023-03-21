import { defineComponent } from "vue";
import visuliazation from '../../assets/icons/visuliazation.svg'
import s from './WelcomeLayout.module.scss'
import { RouterLink } from "vue-router";
import { WelcomeLayout } from "./WelcomeLayout";

export const Third = defineComponent({
    setup: (props, context) => {
        return () => (
            <WelcomeLayout>
                {{
                    icon: () => <img src={visuliazation} alt="钱包" />,
                    title: () => <h2>数据可视化<br />收支一目了然</h2>,
                    buttons: () => <>
                        <RouterLink class={s.fake} to="/welcome/4">下一页</RouterLink>
                        <RouterLink class={s.next} to="/welcome/4">下一页</RouterLink>
                        <RouterLink to="/start">跳过</RouterLink>
                    </>
                }}
            </WelcomeLayout>
        )
    }
})