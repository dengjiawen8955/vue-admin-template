<template>
  <div class="container">
    <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false"
      accept="image/*" :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>

<script>
import { compressImages } from '@/utils/image'
import { uploadImage } from '@/api/youke'

export default {
  name: 'Dashboard',
  data() {
    return {
      imageUrl: '',
      fil2: null,
    };
  },
  methods: {
    downloadFile2() {
      const blob = new Blob([this.file2], { type: 'image/jpeg' })
      const link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = this.file2.name
      link.click()
    },
    async beforeAvatarUpload(file, fileList) {
      // 压缩图片
      // console.log('[压缩前]图片大小：', file.size / 1024, 'KB')
      // const blob = compressAccurately(file, 0.5)
      // console.log('[压缩后]图片大小：', blob.size / 1024, 'KB')

      // 打印图片信息
      console.log('[图片信息]', file)

      // 压缩图片
      const file2 = await compressImages(file);
      this.file2 = file2

      // 打印图片信息
      console.log('[图片信息]2', file2)

      // 图片转化为 base64
      const reader = new FileReader()
      reader.readAsDataURL(file2)
      reader.onload = () => {
        const base64Str = reader.result
        console.log('[base64] length', base64Str.length)

        // 压缩图片

        const data = {
          "base64_str": base64Str,
          "file_name": file2.name,
        }

        uploadImage(data).then(res => {
          console.log(res)
          this.imageUrl = res.data.url
        })
      }

      // 跳过默认上传
      return false
    }
  }
}
</script>


<style>

/* flex居中布局 */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
/* container 每个子元素间距 */
.container > * {
  margin: 10px 0;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>