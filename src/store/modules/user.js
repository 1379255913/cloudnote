import api from '@/api'
import { ElMessage } from 'element-plus'
import useRouteStore from './route'
import useMenuStore from './menu'

const useUserStore = defineStore(
    // 唯一ID
    'user',
    {
        state: () => ({
            account: localStorage.account || '',
            token: localStorage.token || '',
            failure_time: localStorage.failure_time || '',
            permissions: [],
            nickName: localStorage.nickName || ''
        }),
        getters: {
            isLogin: state => {
                let retn = false
                if (state.token) {
                    if (new Date().getTime() < state.failure_time * 1000) {
                        retn = true
                    }
                }
                return retn
            }
        },
        actions: {
            login(data) {
                return new Promise((resolve, reject) => {
                    // 通过 mock 进行登录
                    api.post('user/login', data, {
                    }).then(res => {
                        localStorage.setItem('account', res.data.user.userName)
                        localStorage.setItem('token', res.data.token)
                        localStorage.setItem('nickName', res.data.user.nickName)
                        localStorage.setItem('failure_time', Math.ceil(new Date().getTime() / 1000) + 24 * 60 * 60)
                        this.nickName = res.data.user.nickName
                        this.account = res.data.user.userName
                        this.token = res.data.token
                        this.failure_time = Math.ceil(new Date().getTime() / 1000) + 24 * 60 * 60
                        resolve()
                    }).catch(error => {
                        reject(error)
                    })
                })
            },
            register(data) {
                console.log(data)
                return new Promise((resolve, reject) => {
                    // 通过 mock 进行登录
                    api.post('user/register', data, {
                    }).then(res => {
                        ElMessage.success('注册成功!')
                        resolve()
                    }).catch(error => {
                        reject(error)
                    })
                })
            },
            logout() {
                return new Promise(resolve => {
                    const routeStore = useRouteStore()
                    const menuStore = useMenuStore()
                    localStorage.removeItem('account')
                    localStorage.removeItem('token')
                    localStorage.removeItem('nickName')
                    localStorage.removeItem('failure_time')
                    this.account = ''
                    this.token = ''
                    this.failure_time = ''
                    this.nickName = ''
                    routeStore.removeRoutes()
                    menuStore.setActived(0)
                    resolve()
                })
            },
            // 获取我的权限
            getPermissions() {
                return new Promise(resolve => {
                    // 通过 mock 获取权限
                    api.get('member/permission', {
                        baseURL: '/mock/',
                        params: {
                            account: this.account
                        }
                    }).then(res => {
                        this.permissions = res.data.permissions
                        resolve(res.data.permissions)
                    })
                })
            },
            editPassword(data) {
                return new Promise(resolve => {
                    api.post('member/edit/password', {
                        account: this.account,
                        password: data.password,
                        newpassword: data.newpassword
                    }, {
                        baseURL: '/mock/'
                    }).then(() => {
                        resolve()
                    })
                })
            }
        }
    }
)

export default useUserStore
