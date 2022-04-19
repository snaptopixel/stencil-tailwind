import { Component, h } from '@stencil/core'

import { StyledHost } from '../helpers'

@Component({
  tag: 'styled-component',
  shadow: true,
})
export class StyledComponent {
  render() {
    return (
      <StyledHost>
        <h1 class='leading-2 w-64 rounded bg-slate-700 p-4 text-center text-xl font-extrabold text-slate-500'>
          By <code class='font-mono text-lg font-medium'>&lt;import&gt;</code>ing the stylesheet, styles can work in
          shadow-dom as well
        </h1>
      </StyledHost>
    )
  }
}
