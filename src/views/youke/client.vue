<template>
    <div class="container">
        <!-- 上传图片和下载图片 -->
        <div class="upload">
            <div class="upload-img">
                <img :src="imgUrl" alt="">
            </div>
            <div class="upload-btn">
                <el-button type="primary" @click="uploadImg">上传图片</el-button>
                <el-button type="primary" @click="downloadImg">下载图片</el-button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Dashboard',
    data: {
        imgData: '',
        remoteImgUrl: 'https://www.baidu.com/img/bd_logo1.png'
    },
    methods: {
        uploadImg() {
            console.log('uploadImg')
            // 本地图片上传
            this.$refs.uploadImg.click()

        },
        downloadImg() {
            console.log('downloadImg')
            // 下载 remoteImgUrl 图片到本地
            window.location.href(this.remoteImgUrl)
        }
    },
}
</script>

<style lang="scss" scoped>
</style>
