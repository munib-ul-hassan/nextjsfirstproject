import Link from 'next/link'
import React from 'react'

const NotFound  = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for might be in another castle.</p>
      <a>
      <Link href="/user">
      Home
      </Link>
        </a>
    </div>
  )
}

export default NotFound 