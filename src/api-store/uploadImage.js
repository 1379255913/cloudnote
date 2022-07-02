import api from '@/api'
import compressFile from '@/util/compress'
export function tinymceUpload(imgFile) {
    let formData = new FormData()
    formData.append('uploadFile', imgFile)
    return new Promise((resolve, reject) => {
        api.post('file/upload',
            formData
            , {
                'Content-type': 'multipart/form-data'
            }).then(res => {
            console.log(res.data)
            resolve(res.data)
        }).catch(error => {
            reject(error)
        })
    })
}
