    'use client';

    import { useEffect } from 'react';
    import { useRouter } from 'next/navigation';
    import Link from 'next/link';
    import Image from 'next/image';

    const LogIn = () => {
      const router = useRouter();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const handleGoogleResponse = (response: any) => {
        console.log('Encoded JWT ID token:', response.credential);
      };

      const handleCustomGoogleSignIn = () => {
        if (window?.google) {
          window.google.accounts.id.prompt();
        }
      };

      useEffect(() => {
        if (typeof window !== 'undefined' && window.google) {
          window.google.accounts.id.initialize({
            client_id: 'YOUR_GOOGLE_CLIENT_ID',
            callback: handleGoogleResponse,
          });
        }
      }, []);

          const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const email = formData.get('email') as string;
            const password = formData.get('password') as string;
        
            if (email && password) {
                try {
                    const res = await fetch('/api/auth/login', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ email, password }),
                    });
        
                    const data = await res.json();
                    if (res.ok) {
                        localStorage.setItem('token', data.token);
                        router.push('/dashboard/centered');
                    } else {
                        console.error(data.error);
                    }
                } catch (error) {
                    console.error('Login failed:', error);
                }
            }
        };
    

      return (
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute top-6 left-6">
          <Link href="/landing">
            <Image src="/logo.png" alt="Your Company" width={100} height={40} priority />
          </Link>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        >
          <div
          style={{
              clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              backgroundImage: 'linear-gradient(to top right, #03611C, #03611C)',
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Member Login</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">Log in to access your account, or use Google to sign in.</p>
          </div>

          <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-xl sm:mt-12 p-8  rounded-lg">
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                Email
              </label>
              <input type="email" name="email" id="email" autoComplete="email" required className="w-full mt-2.5 rounded-md px-3.5 py-2 text-gray-900 bg-white outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-green-600" />
            </div>
            
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-semibold leading-6 text-gray-900">
                Password
              </label>
              <input type="password" name="password" id="password" autoComplete="current-password" required className="w-full mt-2.5 rounded-md px-3.5 py-2 text-gray-900 bg-white outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-green-600" />
            </div>
            
            <div className="text-sm text-right mb-6">
              <Link href="/forgotten-password" className="text-green-600 hover:underline">Forgot your password?</Link>
            </div>
            
            <button type="submit" className="block w-full rounded-md bg-green-600 px-4 py-2 text-white shadow-sm hover:bg-green-700 focus:ring-2 focus:ring-green-600">
              Log In
            </button>
            
            <div className="flex flex-col items-center mt-6">
              <button type="button" onClick={handleCustomGoogleSignIn} className="flex items-center justify-center w-full h-12 border border-gray-300 bg-white rounded-lg shadow-md hover:bg-gray-100">
                <Image src="/google.png" alt="Google Logo" width={24} height={24} className="mr-3" />
                <span className="text-sm font-medium text-gray-700">Continue with Google</span>
              </button>
            </div>
            
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                Don&apos;t have an account? <Link href="/register" className="text-green-600 hover:underline">Register</Link>
              </p>
            </div>
          </form>
        </div>
      );
    };

    export default LogIn;
