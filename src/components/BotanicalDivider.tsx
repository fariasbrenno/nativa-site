export function BotanicalDivider({ light = false }: { light?: boolean }) {
  return (
    <div className="flex justify-center items-center py-4" style={{ opacity: 0.4 }}>
      <svg width="280" height="28" viewBox="0 0 280 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="14" x2="100" y2="14" stroke={light ? 'white' : 'hsl(37,34%,54%)'} strokeWidth="0.8" />
        <path d="M110 14 C118 6, 126 6, 134 14 C126 22, 118 22, 110 14Z" stroke={light ? 'white' : 'hsl(37,34%,54%)'} strokeWidth="0.8" fill="none"/>
        <circle cx="140" cy="14" r="2" fill={light ? 'white' : 'hsl(37,34%,54%)'}/>
        <path d="M146 14 C154 6, 162 6, 170 14 C162 22, 154 22, 146 14Z" stroke={light ? 'white' : 'hsl(37,34%,54%)'} strokeWidth="0.8" fill="none"/>
        <line x1="180" y1="14" x2="280" y2="14" stroke={light ? 'white' : 'hsl(37,34%,54%)'} strokeWidth="0.8" />
        {/* Small leaves */}
        <path d="M126 8 C128 4, 132 5, 130 10" stroke={light ? 'white' : 'hsl(37,34%,54%)'} strokeWidth="0.7" fill="none"/>
        <path d="M154 8 C156 4, 160 5, 158 10" stroke={light ? 'white' : 'hsl(37,34%,54%)'} strokeWidth="0.7" fill="none"/>
      </svg>
    </div>
  );
}
