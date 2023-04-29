export { default } from 'next-auth/middleware'

export const config = {
  matcher: ['/dashboard3']
}

/* export const config = {
  matcher: ['/dashboard3', '/app/:path*']
} */

/* export const config = {
  matcher: ['/((?!register|api|signin).*)']
} */
