<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180"
        sortable
        :filters="dataList"
        :filter-method="filterHandler"
      >
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column
        prop="tag"
        label="标签"
        width="100"
        :filters="[
          { text: '家', value: '家' },
          { text: '公司', value: '公司' },
        ]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.tag === '家' ? 'primary' : 'success'"
            disable-transitions
            >{{ scope.row.tag }}</el-tag
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Config',
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '家',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          tag: '公司',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          tag: '家',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '公司',
        },
      ],
      dataList: [
        { text: '2016-05-01', value: '2016-05-01' },
        { text: '2016-05-02', value: '2016-05-02' },
        { text: '2016-05-03', value: '2016-05-03' },
        { text: '2016-05-04', value: '2016-05-04' },
      ],
    }
  },
  methods: {
    // 动态数据
    getData() {
      this.$http.get('http://127.0.0.1:3333/tablist').then(
        (res) => {
          //res后端返回的数据
          console.log(res)
          if (res.data.code == '200') {
            this.tableData = res.data.result
            for (var i = 0; i < this.tableData.length; i++) {
              // 可添加去重的判断处理
              this.dataList.push({
                text: this.tableData[i].date,
                value: this.tableData[i].date,
              })
            }
          }
        },
        (error) => {
          console.log(error)
        }
      )
    },
    filterHandler(value, row, column) {
      //value代表 拿到的筛选日期值，row代表 这一行数据 column代表 拿到某行的日期值
      const property = column['property'] //date
      return row[property] === value //row.date === value  row[date] == value
    },
    filterTag(value, row) {
      return row.tag === value
    },
  },
  mounted() {
    //挂载完成
    this.getData()
  },
}
</script>

<style lang="scss" scoped>
</style>