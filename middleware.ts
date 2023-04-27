export { default } from 'next-auth/middleware'

export const config = {
  matcher: ['/dashboard3', '/app/:path*']
}
