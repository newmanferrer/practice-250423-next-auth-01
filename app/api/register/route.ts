import { prisma } from '@/lib/prisma/db/client'
import { hash } from 'bcrypt'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json()
    const hashedPassword = await hash(password, 12)
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword
      }
    })

    return NextResponse.json({
      user: {
        name: user.name,
        email: user.email,
        password: user.password
      }
    })
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        error: error.message
      }),
      { status: 500, statusText: 'Internal Server Error' }
    )
  }
}
