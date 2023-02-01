import request from '@/utils/request'

// 上传图片
// 指定 multipart/form-data 类型
export function uploadImage(data) {
    return request({
        url: '/youke/upload_image',
        method: 'post',
        data: data
    })
}