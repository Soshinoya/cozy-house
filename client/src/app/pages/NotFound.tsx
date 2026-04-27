import React from 'react';
import { Link } from 'react-router';
import { Container } from '../components/Layout/Container';
import { Button } from '../components/ui/Button';
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
            Страница не найдена
          </h2>
          <p className="font-[Arial,sans-serif] text-[#4c4c4c] text-[1.125rem] leading-[1.6] max-w-[600px]">
            Страница, которую вы ищете, не существует или была перемещена.
            Давайте вернём вас к поиску вашего нового лучшего друга!
          </p>
          <Link to="/">
            <Button variant="primary" size="md">
              <Home size={20} className="mr-2" />
              На главную
            </Button>
          </Link>
        </div>
      </Container>
    </main>
  );
};
