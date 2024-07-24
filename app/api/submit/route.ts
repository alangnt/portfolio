import { NextRequest, NextResponse } from 'next/server';
import pg from "pg";

const { Pool } = pg;

const client = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

client.connect();

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();
  try {
    const query = 'INSERT INTO reviews (name, email, message) VALUES ($1, $2, $3)';
    const values = [name, email, message];
    await client.query(query, values);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

