import * as echarts from 'echarts/core';
import type { ECharts, EChartsCoreOption } from 'echarts/core';
import { BarChart, LineChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  DatasetComponent, // 数据集组件
  TransformComponent, // 内置数据转换器组件 (filter, sort)
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

export default function useEcharts() {
  const { use, init } = echarts;

  use([
    BarChart,
    LineChart,
    TitleComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    DatasetComponent,
    TransformComponent,
    CanvasRenderer,
    LabelLayout,
    UniversalTransition,
  ]);

  const initChart = (el: HTMLElement): ECharts => {
    return init(el);
  };

  const setOption = (chart: ECharts, option: EChartsCoreOption) => {
    if (option) {
      chart.setOption(option);
    }
  };

  return {
    echarts,
    initChart,
    setOption,
  };
}
