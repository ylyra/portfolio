import { createElement, forwardRef } from 'react'
import { mergeCss } from '../css/css.mjs';
import { splitProps } from '../helpers.mjs';
import { getScrollableStyle } from '../patterns/scrollable.mjs';
import { styled } from './factory.mjs';

export const Scrollable = /* @__PURE__ */ forwardRef(function Scrollable(props, ref) {
  const [patternProps, restProps] = splitProps(props, ["direction","hideScrollbar"])

const styleProps = getScrollableStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })