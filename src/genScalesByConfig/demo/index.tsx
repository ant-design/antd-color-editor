import { JsonView, genScalesByConfig } from 'antd-color-editor';

export default () => {
  const data = genScalesByConfig({
    colorList: [
      {
        color: '#1677FF',
        darkColor: '#1677FF',
        id: 'Primary',
        title: 'Primary',
        type: 'normal',
      },
      {
        color: '#1677FF',
        darkColor: '#1677FF',
        id: 'Neutral',
        title: 'Neutral',
        type: 'neutral',
      },
      {
        color: '#da4a45',
        darkColor: '#da4a45',
        id: 'Red',
        title: 'Red',
        type: 'normal',
      },
    ],
    generate: {
      dark: {
        down: {
          cEasing: [0, 0, 1, 1],
          cTarget: 5,
          hEasing: [0, 0, 1, 1],
          hRotate: -10,
          tEasing: [0, 0, 1, 1],
          tTarget: 98,
        },
        up: {
          cEasing: [0, 0, 1, 1],
          cTarget: 50,
          hEasing: [0, 0, 1, 1],
          hRotate: 20,
          tEasing: [0, 0, 1, 1],
          tTarget: 10,
        },
      },
      hue: {
        multiply: -0.5,
        segment: [100, 200],
      },
      light: {
        down: {
          cEasing: [0, 0, 1, 1],
          cTarget: 50,
          hEasing: [0, 0, 1, 1],
          hRotate: 20,
          tEasing: [0, 0, 1, 1],
          tTarget: 10,
        },
        up: {
          cEasing: [0, 0, 1, 1],
          cTarget: 5,
          hEasing: [0, 0, 1, 1],
          hRotate: -10,
          tEasing: [0, 0, 1, 1],
          tTarget: 98,
        },
      },
      neutral: {
        cEasingDown: [0, 0, 1, 1],
        cEasingUp: [0, 0, 1, 1],
        cStart: 15,
        cTarget: 10,
        standard: '#888888',
      },
      step: {
        down: 5,
        up: 5,
      },
    },
    stepFliter: [],
    system: {
      edit: {
        isolateEdit: false,
      },
      pattern: {
        displayFliterStep: false,
        isFliterStep: false,
        isolateDark: false,
      },
    },
  });

  return <JsonView data={data} />;
};
