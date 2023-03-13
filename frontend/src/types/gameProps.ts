export type gameProps = {
  getInfo: {
    info: {
      time: number;
      sentence: number;
      questions: {main: [{question: string}]; translated: [{question: string}]};
      option: string;
    };
    gameInfo: () => void;
  };
  points: {
    correct: number;
    wrong: number;
    points: number;
    decrease: () => void;
    increase: () => void;
    wrongFunc: () => void;
  };
};
