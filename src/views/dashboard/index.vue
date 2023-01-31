<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <div class="dashboard-text">Hello</div>
    <!-- 选择图片按钮 -->
    <el-button type="primary" @click="chooseImage">选择图片</el-button>
    <!-- 上传图片按钮 -->
    <el-button type="primary" @click="uploadImage">提交图片</el-button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  data() {
    return {
      file: null,
    }
  },
  methods: {
    // 选择图片
    chooseImage() {
      this.$refs.file.click()
    },
    // 上传图片
    uploadImage() {
      const formData = new FormData()
      formData.append('file', this.file)
      this.$axios.post('/upload', formData).then(res => {
        console.log(res)
      })
    },
    // 选择图片后的回调
    handleFileChange(e) {
      this.file = e.target.files[0]
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
