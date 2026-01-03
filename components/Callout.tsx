interface CalloutProps {
  children: React.ReactNode;
}

export default function Callout({ children }: CalloutProps) {
  return (
    <div className="bg-gradient-to-r from-accent to-accent-light border-l-4 border-secondary p-8 md:p-10 rounded-r-xl shadow-soft my-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-5 rounded-full -mr-16 -mt-16"></div>
      <div className="relative z-10">
        <div className="flex items-start mb-4">
          <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="text-gray-800 leading-relaxed text-lg">{children}</div>
        </div>
      </div>
    </div>
  );
}

