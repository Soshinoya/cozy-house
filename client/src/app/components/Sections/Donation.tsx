import React from 'react';
import { Container } from '../Layout/Container';
import { CreditCard } from 'lucide-react';
import imgDonationDog from '../../../assets/donation-dog.png';

export const Donation: React.FC = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#f6f6f6]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="flex justify-center order-2 lg:order-1">
            <img 
              src={imgDonationDog} 
              alt="Поддержите наш приют"
              className="w-full max-w-[505px] h-auto object-contain"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6 order-1 lg:order-2">
            <h2 className="font-[Georgia,serif] text-[#545454] text-[2.1875rem] md:text-[2.1875rem] leading-[1.3] tracking-[0.06em] m-0">
              Вы также можете<br />сделать пожертвование
            </h2>
            <h5 className="font-[Georgia,serif] text-[#545454] text-[0.9375rem] leading-[1.1] tracking-[0.06em] m-0">
              Название банка / Тип счёта
            </h5>

            {/* Card Number */}
            <div className="flex items-center gap-4 bg-[#f1cdb3] rounded-lg px-6 py-4 max-w-[400px]">
              <CreditCard size={30} className="text-[#292929]" />
              <span className="font-[Georgia,serif] text-[#545454] text-[1.25rem] leading-[1.3] tracking-[0.06em]">
                8380 2880 8028 8791 7435
              </span>
            </div>

            <p className="font-[Arial,sans-serif] text-[#b2b2b2] text-[0.75rem] italic leading-[1.5] max-w-[380px]">
              Юридическая информация: lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed ac
              diam. Praesent ultrices maximus tortor et vulputate. Interdum et
              malesuada fames ac ante ipsum primis in faucibus.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
