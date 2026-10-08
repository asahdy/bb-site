"use client"

import Script from "next/script"

export default function FacebookFeed() {
  return (
    <>
      <div id="fb-root" />
      <Script
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v20.0"
        strategy="lazyOnload"
        crossOrigin="anonymous"
      />
      <div
        className="fb-page"
        data-href="https://www.facebook.com/billy.branch/"
        data-tabs="timeline"
        data-width="500"
        data-height="650"
        data-small-header="true"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="false"
      />
    </>
  )
}
