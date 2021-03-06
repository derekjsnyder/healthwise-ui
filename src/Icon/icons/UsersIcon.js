import React from 'react'
import Icon from '../Icon'
import { PathContrast, PathPrimary, PathPrimaryStroke } from '../IconFormatting'

import { defaultTheme } from '../../Theme'

const UsersIcon = props => {
  return (
    <Icon viewBox="0 0 96 96" {...props}>
      <PathContrast as="circle" cx="81.27" cy="67.13" r="11.96" theme={props.theme} />
      <PathContrast as="circle" cx="13.96" cy="28.31" r="11.96" theme={props.theme} />
      <PathContrast as="circle" cx="81.19" cy="28.31" r="11.96" theme={props.theme} />
      <PathPrimary
        d="M14.1 34.73a6.14 6.14 0 1 1 6.14-6.14 6.14 6.14 0 0 1-6.14 6.14zm0-10.54a4.41 4.41 0 1 0 4.41 4.4 4.41 4.41 0 0 0-4.41-4.4zm66.81 10.54A6.14 6.14 0 1 1 87 28.59a6.14 6.14 0 0 1-6.09 6.14zm0-10.54a4.41 4.41 0 1 0 4.4 4.4 4.42 4.42 0 0 0-4.4-4.4zM14.1 73.12A6.14 6.14 0 1 1 20.24 67a6.14 6.14 0 0 1-6.14 6.12zm0-10.54A4.4 4.4 0 1 0 18.51 67a4.4 4.4 0 0 0-4.41-4.42zm66.81 10.54A6.14 6.14 0 1 1 87 67a6.14 6.14 0 0 1-6.09 6.12zm0-10.54a4.4 4.4 0 1 0 4.4 4.4 4.41 4.41 0 0 0-4.4-4.4zM47.29 30.6a.87.87 0 0 1-.87-.87V14.35a.87.87 0 1 1 1.74 0v15.38a.87.87 0 0 1-.87.87zm0 51.14a.87.87 0 0 1-.87-.87V65.49a.87.87 0 1 1 1.74 0v15.38a.87.87 0 0 1-.87.87z"
        theme={props.theme}
      />
      <PathPrimary
        d="M31.92 39.35a.88.88 0 0 1-.44-.12l-13-7.61a.86.86 0 1 1 .87-1.49l13 7.6a.88.88 0 0 1 .31 1.19.86.86 0 0 1-.74.43zm44.15 26.24a.8.8 0 0 1-.44-.13L62.4 57.61a.88.88 0 0 1-.3-1.19.86.86 0 0 1 1.19-.3L76.52 64a.87.87 0 0 1-.45 1.62zm-56.98-.09a.85.85 0 0 1-.74-.42.86.86 0 0 1 .29-1.19l12.83-7.75a.87.87 0 0 1 .9 1.48l-12.83 7.75a.84.84 0 0 1-.45.13zm43.73-26.07a.87.87 0 0 1-.45-1.61L75.44 30a.88.88 0 0 1 1.19.3.86.86 0 0 1-.3 1.19l-13.07 7.8a.88.88 0 0 1-.44.14zM42.73 85a.82.82 0 0 1-.43-.12L18.08 70.79a.87.87 0 0 1 .87-1.5L43.17 83.4a.86.86 0 0 1 .31 1.18.86.86 0 0 1-.75.42zM18.52 26.47a.86.86 0 0 1-.75-.43.88.88 0 0 1 .31-1.19l24.22-14.1a.87.87 0 0 1 .87 1.5L19 26.35a.82.82 0 0 1-.48.12zM14 62.22a.87.87 0 0 1-.87-.86V34a.87.87 0 0 1 1.74 0v27.36a.87.87 0 0 1-.87.86zM52.56 85a.86.86 0 0 1-.75-.43.86.86 0 0 1 .31-1.18L76.19 69.3a.87.87 0 1 1 .88 1.49L53 84.89a.88.88 0 0 1-.44.11zm23.93-58.67a.88.88 0 0 1-.44-.12l-23.93-14a.87.87 0 0 1 .88-1.5l23.93 14a.87.87 0 0 1-.44 1.62zm4.84 35.89a.86.86 0 0 1-.86-.86V34a.87.87 0 1 1 1.73 0v27.36a.87.87 0 0 1-.87.86z"
        theme={props.theme}
      />
      <PathPrimary
        d="M47.66 15.22a6.14 6.14 0 1 1 6.14-6.14 6.14 6.14 0 0 1-6.14 6.14zm0-10.54a4.4 4.4 0 1 0 4.41 4.4 4.41 4.41 0 0 0-4.41-4.4zm0 87.6a6.14 6.14 0 1 1 6.14-6.14 6.15 6.15 0 0 1-6.14 6.14zm0-10.54a4.4 4.4 0 1 0 4.41 4.4 4.41 4.41 0 0 0-4.41-4.4zm0-15.67a18.53 18.53 0 1 1 18.53-18.53 18.55 18.55 0 0 1-18.53 18.53zm0-35.32a16.79 16.79 0 1 0 16.8 16.79 16.81 16.81 0 0 0-16.8-16.79z"
        theme={props.theme}
      />
      <PathPrimaryStroke
        as="circle"
        cx="47.51"
        cy="41.69"
        r="6.49"
        fill="none"
        strokeMiterlimit="10"
        strokeWidth="1.75"
        theme={props.theme}
      />
      <PathPrimaryStroke
        fill="none"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M47.22 65.17a18 18 0 0 1-11.48-4.6c-.5-.41-.67-.69-.56-1.16 1.64-7.22 5.46-10.81 12.33-10.81s10.76 4 12.39 11.16c.1.43 0 .52-.19.71a17.81 17.81 0 0 1-12.49 4.7z"
        theme={props.theme}
      />
    </Icon>
  )
}

UsersIcon.defaultProps = {
  theme: defaultTheme,
}

export default UsersIcon
