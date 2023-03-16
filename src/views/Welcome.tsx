import { defineComponent } from "vue"; // 导入名为 defineComponent 的函数
import { RouterView } from "vue-router";
import s from './Welcome.module.scss'
import logo from '../assets/icons/peach.svg'


console.log(logo);

// 导出一个名为 Welcome 的组件
export const Welcome = defineComponent({

  // 该组件的设置和逻辑
  setup: (props, context) => {

    // 返回一个函数，表示该组件的模板内容
    return () => {
      
      // 一个 div 元素，class 为 's.wrapper'
      return <div class={s.wrapper}>

        {/*顶部的 header 元素，显示文字 'logo'*/}
        <header>
            <img src="logo" alt="" />
        </header>

        {/*中间的 main 元素，使用 Vue Router 动态组件展示页面内容*/}
        <main><RouterView/></main>

        {/*底部的 footer 元素，显示一些按钮*/}
        <footer>buttons</footer>
      </div>
    }
  }
})
