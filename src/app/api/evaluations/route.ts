import { NextRequest, NextResponse } from 'next/server';
import { Evaluation } from '@/types';

// Mock database - will be replaced with Supabase
const evaluations: Evaluation[] = [];

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({ data: evaluations, count: evaluations.length });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch evaluations' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as Evaluation;
    const newEvaluation: Evaluation = {
      ...body,
      id: Date.now().toString(),
      createdAt: new Date(),
      status: 'submitted',
    };
    evaluations.push(newEvaluation);
    return NextResponse.json(newEvaluation, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create evaluation' }, { status: 500 });
  }
}
