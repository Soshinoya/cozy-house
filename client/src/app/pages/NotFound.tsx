import React from 'react';
import { Link } from 'react-router';
import { Container } from '../components/Layout/Container';
import { Button } from '../components/UI/Button';
import { Home } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <main className="bg-white min-h-[calc(100vh-400px)] flex items-center justify-center py-16">
      <Container>
        <div className="flex flex-col items-center text-center gap-8">
          <h1 className="font-[Georgia,serif] text-[#545454] text-[6rem] md:text-[8rem] leading-[1.1] tracking-[0.06em] m-0">
            404
          </h1>
          <h2 className="font-[Georgia,serif] text-[#545454] text-[2rem] md:text-[2.5rem] leading-[1.3] tracking-[0.06em] m-0">
            Page Not Found
          </h2>
          <p className="font-[Arial,sans-serif] text-[#4c4c4c] text-[1.125rem] leading-[1.6] max-w-[600px]">
            The page you are looking for doesn't exist or has been moved. 
            Let's get you back to finding your new best friend!
          </p>
          <Link to="/">
            <Button variant="primary" size="md">
              <Home size={20} className="mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </Container>
    </main>
  );
};
