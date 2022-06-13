import React from 'react'

export default function ConfigOverrides() {
    const { useBabelRc, override } = require('customize-cra');
    module.exports = override(useBabelRc());
  
    return (
    <></>
  )
}
