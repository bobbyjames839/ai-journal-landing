import { NextResponse } from 'next/server';
import { db } from '@/utils/firebase';
import { collection, query, where, getDocs, addDoc } from 'firebase/firestore';

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email || !/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }

  try {
    const subscribersRef = collection(db, 'subscribers');
    const q = query(subscribersRef, where('email', '==', email));
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      return NextResponse.json({ message: 'Email already subscribed' }, { status: 200 });
    }

    await addDoc(subscribersRef, {
      email,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to save email' }, { status: 500 });
  }
}
