export const maskName = (name: string) => {
  const isKoreanName = /[가-힣]{2,}/.test(name);

  if (isKoreanName) {
    if (name.length === 2) {
      return name.replace(/([가-힣])([가-힣]+)/, (_, $1) => `${$1}*`);
    }

    return maskExceptForEdge(name, 1);
  }

  const unmaskedSideSize = name.length < 6 ? 1 : 2;
  return maskExceptForEdge(name, unmaskedSideSize);
};

const maskExceptForEdge = (text: string, edgeSize: number) => {
  return (
    text.slice(0, edgeSize) +
    text
      .slice(edgeSize, text.length - edgeSize)
      .replace(/[a-zA-Z가-힣]/g, '*') +
    text.slice(text.length - edgeSize, text.length)
  );
};
