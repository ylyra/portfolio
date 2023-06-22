import { createElement, forwardRef } from 'react'
import { styled } from './factory.mjs';
import { getScrollableStyle } from '../patterns/scrollable.mjs';

export const Scrollable = forwardRef(function Scrollable(props, ref) {
  const { direction, hideScrollbar, ...restProps } = props
const styleProps = getScrollableStyle({direction, hideScrollbar})
return createElement(styled.div, { ref, ...styleProps, ...restProps })
})    