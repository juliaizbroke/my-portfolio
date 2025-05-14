'use client';

import { Typography } from '@mui/material';
import { useTypewriter } from '@/app/hooks/useTypewriter';

const Typewriter = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delay = 1500,
}) => {
  const displayText = useTypewriter(texts, typingSpeed, deletingSpeed, delay);

  return (
    <Typography
      sx={{
        fontSize: { xs: '12px', md: '16px' },
        fontWeight: 500,
        backgroundClip: 'text',
        textAlign: 'center',
        mb: 2,
      }}
    >
      {displayText}
    </Typography>
  );
};

export default Typewriter;
