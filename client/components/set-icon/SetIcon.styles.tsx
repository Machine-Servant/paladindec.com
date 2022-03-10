import styled from '@emotion/styled';

export const SetIcon = styled.div<{ color?: string; src: string }>`
  ${({ color = 'black', src }) => `
    background-color: ${color};
    -webkit-mask-image: url(${src});
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: center;
    mask-image: url(${src});
  `}
`;

export const MasterpieceSetIcon = styled.div<{ src: string }>`
  background: linear-gradient(
    135deg,
    #ea8d66 0%,
    #ea8d66 15%,
    #fdef8a 28%,
    #8bcc93 42%,
    #a6dced 55%,
    #6f75aa 68%,
    #e599c2 84%,
    #e599c2 100%
  );
  ${({ src }) => `
    -webkit-mask-image: url(${src});
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: center;
    mask-image: url(${src});
  `}
`;

export const CommonSetIcon = styled.div<{ src: string }>`
  background-color: black;
  ${({ src }) => `
    -webkit-mask-image: url(${src});
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: center;
    mask-image: url(${src});
  `}
`;

export const UncommonSetIcon = styled.div<{ src: string }>`
  background: -webkit-linear-gradient(
    left,
    #5a6572 0%,
    #9e9e9e 50%,
    #5a6572 100%
  );
  ${({ src }) => `
    -webkit-mask-image: url(${src});
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: center;
    mask-image: url(${src});
  `}
`;

export const RareSetIcon = styled.div<{ src: string }>`
  background: -webkit-linear-gradient(
    left,
    #876a3b 0%,
    #dfbd6b 50%,
    #876a3b 100%
  );
  ${({ src }) => `
    -webkit-mask-image: url(${src});
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: center;
    mask-image: url(${src});
  `};
`;

export const MythicSetIcon = styled.div<{ src: string }>`
  background: -webkit-linear-gradient(
    left,
    #b21f0f 0%,
    #f38300 50%,
    #b21f0f 100%
  );
  ${({ src }) => `
    -webkit-mask-image: url(${src});
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: center;
    mask-image: url(${src});
  `};
`;
