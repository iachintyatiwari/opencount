import React, { useRef, useState } from 'react';
import { WIDGET_STYLES } from '@/constants';
import { WidgetPreview } from './WidgetPreview';
import { Check } from 'lucide-react';

interface StyleGridProps {
  selectedId: string;
  onSelect: (id: string) => void;
}

interface TiltCardProps {
  children: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, isSelected, onClick }) => {
    const cardRef = useRef<HTMLButtonElement>(null);
    const [rotate, setRotate] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -4; // Max rotation deg
        const rotateY = ((x - centerX) / centerX) * 4;

        setRotate({ x: rotateX, y: rotateY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
        setIsHovering(false);
        setRotate({ x: 0, y: 0 });
    };

    return (
        <button
            ref={cardRef}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`group relative flex flex-col text-left rounded-xl border transition-all duration-200 ease-out overflow-hidden focus:outline-none w-full ${
                isSelected 
                  ? 'border-orange-500 ring-1 ring-orange-500 shadow-lg shadow-orange-900/5 z-10 scale-[1.02]' 
                  : 'border-dark-700 hover:border-orange-600/50 hover:shadow-xl hover:z-10'
            } bg-dark-900`}
            style={{
                transform: isHovering ? `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.02, 1.02, 1.02)` : 'perspective(1000px) rotateX(0) rotateY(0)',
                zIndex: isHovering ? 20 : 1
            }}
        >
            {children}
        </button>
    );
}

export const StyleGrid: React.FC<StyleGridProps> = ({ selectedId, onSelect }) => {
  return (
    // Changed grid cols to allow wider cards.
    // grid-cols-1 on most screens ensures cards are full width of the container (which is half-screen in the layout)
    // xl:grid-cols-2 only splits them when there is massive space available.
    <div className="grid gap-6 grid-cols-1 xl:grid-cols-2 perspective-1000 w-full">
      {WIDGET_STYLES.map((style) => {
        const isSelected = selectedId === style.id;
        
        return (
          <TiltCard
            key={style.id}
            isSelected={isSelected}
            onClick={() => onSelect(style.id)}
          >
            {/* Preview Area - Increased height */}
            <div className="h-48 w-full flex items-center justify-center relative overflow-hidden transition-colors duration-300 bg-dark-950/50 text-slate-400">
               {/* Grid Pattern */}
               <div className="absolute inset-0 opacity-20 pointer-events-none" 
                    style={{ 
                        backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', 
                        backgroundSize: '16px 16px' 
                    }}>
               </div>

               {/* Animated element wrapper */}
               <div className="relative z-10 transform transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1 pointer-events-none px-4">
                 <WidgetPreview styleConfig={style} />
               </div>
               
               {/* Selection Indicator */}
               {isSelected && (
                   <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-sm animate-in fade-in zoom-in duration-200">
                       <Check size={14} strokeWidth={3} />
                   </div>
               )}
            </div>

            {/* Info Area - No Description */}
            <div className="p-4 border-t border-dark-800 w-full bg-dark-900">
                <h3 className="font-semibold text-sm text-white group-hover:text-orange-400 transition-colors font-display">
                    {style.name}
                </h3>
            </div>
          </TiltCard>
        );
      })}
    </div>
  );
};