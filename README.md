# React TSX NPM Package

## Overview

This package provides a set of reusable React components, including buttons, alerts, and spinners, to help you quickly build and style your React applications. The components are designed to be highly customizable and easy to integrate into your projects.

## Installation

npm:
```bash
npm install react-ttsx
```


## Usage



- Types :

| Buttons:

    Primary = 1,
    Secondary = 2,
    Success = 3,
    Danger = 4,
    Warning = 5,
    Info = 6,
    Light = 7,
    Dark = 8

| Alert:

    Primary = 1,
    Secondary = 2,
    Success = 3,
    Danger = 4,
    Warning = 5,
    Info = 6,
    Dark = 7

| Spinner ( Loading ): 

    1 = Defualt Spinner Type




- Buttons:
```tsx
import { Button } from "react.tsx"

const MyButton = new Button(2).build() // Types From 1 To 8

export default function App() {
  return <MyButton />
}
```

- Spinner 
```tsx 
import { Spinner } from "react.tsx"

const MySpinner = new Spinner().build() // Types ( 1 )

export default function App() {
  return <MySpinner />
}
```


- Alert 
```tsx 
import { Alert } from "react.tsx"

const MyAlert = new Alert(1).build() // Types From 1 To 7

export default function App() {
  return <MyAlert />
}
```

## Contact With The Author

- Discord Userame: ( 4qf_ )
