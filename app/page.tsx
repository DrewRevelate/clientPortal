import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/auth/signin');
  
  // This won't be rendered as redirect will take effect
  return null;
}
