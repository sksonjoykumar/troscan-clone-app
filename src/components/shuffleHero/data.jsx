import Square from './Square';

const squareData = [
  { id: 1, src: '/imgs/img-1.avif' },
  { id: 2, src: '/imgs/img-2.avif' },
  { id: 3, src: '/imgs/img-3.avif' },
  { id: 4, src: '/imgs/img-4.avif' },
  { id: 5, src: '/imgs/img-5.avif' },
  { id: 6, src: '/imgs/img-6.avif' },
];

const shuffle = array => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export const generateSquares = () => {
  return shuffle([...squareData]).map(sq => (
    <Square key={sq.id} id={sq.id} src={sq.src} />
  ));
};
