"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import ShimmerButton from '@/components/magicui/shimmer-button';
import LetterPullup from '@/components/magicui/letter-pullup';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [username, setUsername] = useState<string>('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Login:', { email, password });
    } else {
      console.log('Register:', { username, email, password });
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setEmail('');
    setPassword('');
    setUsername('');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-t from-sky-500 to-pink-500 p-4 text-white">
      <header className=" flex items-center justify-center p-4 text-white mb-4">
        <LetterPullup className="text-white" words={isLogin ? 'Login' : 'Register'} delay={0.05} />
      </header>
      <div className="w-full max-w-md bg-white bg-opacity-10 backdrop-blur-md rounded-[50px] p-20 text-white">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
              className="bg-white bg-opacity-10 backdrop-blur-md text-white w-full p-2 rounded-lg focus:outline-none"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            className="bg-white bg-opacity-10 backdrop-blur-md text-white w-full p-2 rounded-lg focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className="bg-white bg-opacity-10 backdrop-blur-md text-white w-full p-2 rounded-lg focus:outline-none"
          />
          <ShimmerButton type="submit">
            <span className="text-center text-sm font-medium leading-none tracking-tight text-white">
              {isLogin ? 'Login' : 'Register'}
            </span>
          </ShimmerButton>
        </form>
        <button onClick={toggleForm} className="mt-4 text-sm text-white ">
          {isLogin ? "Don't have an account? Register" : 'Already have an account? Login'}
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
