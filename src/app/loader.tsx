import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = () => (
  <ContentLoader 
    speed={5}
    width={1140}
    height={2000}
    viewBox="0 0 1140 2000"
    backgroundColor="#f3f3f3"
    foregroundColor="#9e9e9e"
  >
    <rect x="0" y="0" rx="0" ry="0" width="1140" height="722" /> 
    <rect x="50" y="970" rx="0" ry="0" width="185" height="85" /> 
    <rect x="285" y="970" rx="0" ry="0" width="185" height="85" /> 
    <rect x="570" y="970" rx="0" ry="0" width="185" height="85" /> 
    <rect x="805" y="970" rx="0" ry="0" width="185" height="85" />
  </ContentLoader>
)

export default MyLoader

