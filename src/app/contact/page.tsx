'use client';

import { useActionState } from 'react';
import { submitContact } from './actions';

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(submitContact, {});

  return (
    <main className="pt-32 pb-24 min-h-screen">
        <div className="max-w-2xl mx-auto px-8">
          <header className="mb-16">
            <h1 className="font-headline text-4xl lg:text-5xl font-extrabold tracking-tighter mb-6 text-on-surface">
              Get in Touch
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              안녕하세요, 프로젝트 문의나 커피 한잔의 여유가 필요하시다면 언제든 메시지를 남겨주세요.
            </p>
          </header>

          {state?.success ? (
            <div className="bg-primary/10 border border-primary/20 text-primary p-6 rounded-xl text-center">
              <h3 className="font-headline text-2xl font-bold mb-2">메시지가 전송되었습니다!</h3>
              <p>빠른 시일 내에 답변 드리겠습니다.</p>
            </div>
          ) : (
            <form action={formAction} className="space-y-6">
              {state?.error && (
                <div className="bg-error-container text-on-error-container p-4 rounded-lg text-sm">
                  {state.error}
                </div>
              )}
              
              <div className="space-y-2">
                <label htmlFor="name" className="font-label text-xs uppercase tracking-widest text-primary font-bold block">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  disabled={isPending}
                  className="w-full bg-surface-container border border-outline-variant rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="홍길동"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="font-label text-xs uppercase tracking-widest text-primary font-bold block">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  disabled={isPending}
                  className="w-full bg-surface-container border border-outline-variant rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="hello@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="font-label text-xs uppercase tracking-widest text-primary font-bold block">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5}
                  required 
                  disabled={isPending}
                  className="w-full bg-surface-container border border-outline-variant rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-y"
                  placeholder="내용을 입력해주세요."
                />
              </div>

              <button 
                type="submit" 
                disabled={isPending}
                className="w-full bg-primary text-on-primary rounded-lg px-8 py-4 font-label text-sm font-bold hover:opacity-90 transition-opacity disabled:opacity-50 flex justify-center"
              >
                {isPending ? '전송 중...' : '메시지 전송'}
              </button>
            </form>
          )}
        </div>
    </main>
  );
}
