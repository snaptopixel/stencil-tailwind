import { css } from '@emotion/css'
import { Component, FunctionalComponent, h } from '@stencil/core'
import { JSXBase } from '@stencil/core/internal'

// Just a flexbox w/centered content
const CenteredBox: FunctionalComponent<JSXBase.IntrinsicElements['div']> = (
  { class: className = '', ...attrs },
  children
) => {
  return (
    <div {...attrs} class={`${className} flex flex-col items-center justify-center`}>
      {children}
    </div>
  )
}

// You can also still write css using emotion
const customCSS = css`
  font-family: Comic Sans MS;
  color: orange;
`

@Component({
  tag: 'demo-site',
})
export class Site {
  render() {
    return (
      <CenteredBox class='h-screen w-screen'>
        <h1 class='text-4xl font-black text-purple-700'>Hello World</h1>
        <p class='italic text-purple-400'>Make changes anywhere and watch your browser update</p>
        <span class={`${customCSS} font-bold uppercase`}>Much Wow</span>
        <styled-component class='mt-4' />
      </CenteredBox>
    )
  }
}
