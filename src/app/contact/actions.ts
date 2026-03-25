'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export type ActionState = {
  success?: boolean;
  error?: string;
};

export async function submitContact(prevState: ActionState, formData: FormData): Promise<ActionState> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { error: '모든 필드를 입력해주세요.' };
  }

  try {
    // Next.js Server Action (서버에서 실행되는 함수)
    const { error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL ?? '',
      subject: `New Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error(error);
      return { error: '메시지 전송에 실패했습니다. (Resend API 에러)' };
    }

    return { success: true };
  } catch (error) {
    console.error(error);
    return { error: '알 수 없는 에러가 발생했습니다.' };
  }
}
