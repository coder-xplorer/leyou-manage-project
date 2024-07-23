<template>
  <el-row :gutter="24">
    <el-col :lg="6" :md="12" :xs="24">
      <el-card>
        <div class="card-header">
          <div class="title">总销售额</div>
          <el-icon><Icon-ep-warning /></el-icon>
        </div>
        <div class="num">¥{{ handleThousandNum(12848) }}</div>
        <div style="height: 46px; justify-self: end" class="flex-align-center">
          <span style="margin-right: 8px" class="flex-align-center"
            >周同比12%<el-icon color="red"><el-icon-caretTop /></el-icon>
          </span>
          <span class="flex-align-center"
            >日同比11%<el-icon color="green"><el-icon-caretBottom /></el-icon
          ></span>
        </div>
        <div class="footer-info">
          <span style="padding-right: 8px">日销售额</span>
          ￥{{ handleThousandNum(12423) }}
        </div>
      </el-card>
    </el-col>
    <el-col :lg="6" :md="12" :xs="24">
      <el-card>
        <div class="card-header">
          <div class="title">访问量</div>
          <el-icon><Icon-ep-warning /></el-icon>
        </div>
        <div class="num">{{ handleThousandNum(8848) }}</div>
        <div ref="lineChartEl" class="line-chart"></div>
        <div class="footer-info">
          <span style="padding-right: 8px">日访问量</span>
          {{ handleThousandNum(1234) }}
        </div>
      </el-card>
    </el-col>
    <el-col :lg="6" :md="12" :xs="24">
      <el-card>
        <div class="card-header">
          <div class="title">支付笔数</div>
          <el-icon><Icon-ep-warning /></el-icon>
        </div>
        <div class="num">{{ handleThousandNum(6560) }}</div>
        <div ref="barChartEl" class="line-chart"></div>
        <div class="footer-info">
          <span style="padding-right: 8px">转化率</span>
          60%
        </div>
      </el-card>
    </el-col>
    <el-col :lg="6" :md="12" :xs="24">
      <el-card>
        <div class="card-header">
          <div class="title">运营活动效果</div>
          <el-icon><Icon-ep-warning /></el-icon>
        </div>
        <div class="num">78%</div>
        <div style="height: 46px" class="flex-align-center">
          <el-progress
            style="width: 100%"
            :text-inside="false"
            :stroke-width="8"
            :percentage="78"
          />
        </div>
        <div class="footer-info">
          <div style="justify-self: end" class="flex-align-center">
            <span style="margin-right: 8px" class="flex-align-center"
              >周同比12%<el-icon color="red"><el-icon-caretTop /></el-icon>
            </span>
            <span class="flex-align-center"
              >日同比11%<el-icon color="green"><el-icon-caretBottom /></el-icon
            ></span>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import useEcharts from '@/hooks/useEcharts';

const lineChartEl = ref<HTMLElement | null>(null);
const barChartEl = ref<HTMLElement | null>(null);
const { initChart, setOption, echarts } = useEcharts();

const handleThousandNum = (num: number) => {
  return num.toLocaleString();
};

onMounted(() => {
  if (lineChartEl.value) {
    const myChart = initChart(lineChartEl.value);
    setOption(myChart, {
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周天'],
        boundaryGap: false,
        show: false,
      },
      yAxis: {
        type: 'value',
        show: false,
      },
      grid: {
        left: 0, // 设置左边距为 0
        right: 0, // 设置右边距为 0
        top: 0, // 设置上边距为 0
        bottom: 0, // 设置下边距为 0
      },
      series: [
        {
          name: '访问量',
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 0,
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(55, 162, 255, 0.6)',
              },
              {
                offset: 1,
                color: 'rgb(116, 21, 219, 0.2)',
              },
            ]),
          },
          emphasis: {
            focus: 'series',
          },
          data: [7, 5, 8, 7, 3, 5, 8],
        },
      ],
    });
  }

  if (barChartEl.value) {
    const myChart = initChart(barChartEl.value);
    setOption(myChart, {
      color: '#409EFF',
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        type: 'category',
        data: [
          '07-02',
          '07-03',
          '07-04',
          '07-05',
          '07-06',
          '07-07',
          '07-08',
          '07-09',
          '07-10',
        ],
        show: false,
      },
      yAxis: {
        type: 'value',
        show: false,
      },
      grid: {
        left: 0, // 设置左边距为 0
        right: 0, // 设置右边距为 0
        top: 0, // 设置上边距为 0
        bottom: 0, // 设置下边距为 0
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 100, 90, 150],
          type: 'bar',
        },
      ],
    });
  }
});
</script>

<style scoped>
.el-col {
  margin-bottom: 24px;
}
.el-card {
  font-size: 14px;
  --el-card-padding: 20px 24px 8px;
  --el-card-border-radius: 8px;
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      color: rgba(0, 0, 0, 0.65);
    }
  }

  .line-chart {
    width: 100%;
    height: 46px;
  }
  .num {
    font-size: 30px;
    color: rgba(0, 0, 0, 0.88);
  }
  .footer-info {
    color: rgba(0, 0, 0, 0.8);
    border-top: 1px solid rgba(5, 5, 5, 0.06);
    margin-top: 8px;
    padding-top: 9px;
  }
}
</style>
