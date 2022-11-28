import React from "react"
import Link from "next/link"

const SanityLink = ({ children, link, ...props }) => {
  const internalSanityLink = link?.linkType === "internal"
  const externalSanityLink = link?.linkType === "external"

  if (internalSanityLink) {
    return (
      <Link href={link.internalLink.slug.current} {...props}>
        {children}
      </Link>
    )
  }
  if (externalSanityLink) {
    return (
      <a href={link.href} target={link.blank ? `_blank` : null} {...props}>
        {children}
      </a>
    )
  }
}

export default SanityLink