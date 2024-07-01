export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server'

export async function GET(req: any) {
  const token = req.cookies.get('token')
  try {
    const data = [
      { id: 1, name: '张三', age: 18 },
      { id: 2, name: '李四', age: 20 },
    ]
    return NextResponse.json({ data }, { status: 200 })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
