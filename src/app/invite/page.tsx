import { redirect } from 'next/navigation';
export default function Page() {
  return redirect('https://discord.com/oauth2/authorize?client_id=1555245594438533221&permissions=805306368&integration_type=0&scope=bot+applications.commands');
};