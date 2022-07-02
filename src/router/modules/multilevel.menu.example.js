const Layout = () => import('@/layout/index.vue')

export default {
    path: '/multilevel_menu_example',
    component: Layout,
    redirect: '/multilevel_menu_example/page',
    name: 'multilevelMenuExample',
    meta: {
        title: '我的文件夹',
        icon: 'folder'
    },
    children: [
        {
            path: 'page',
            name: 'multilevelMenuExample1',
            component: () => import('@/views/multilevel_menu_example/page.vue'),
            meta: {
                title: 'word',
                icon:'word'
            }
        },
        {
            path: 'markdown',
            name: 'markdown-editor',
            component: () => import('@/views/multilevel_menu_example/markDown.vue'),
            meta: {
                title: 'markDown',
                icon:'markdown'
            }
        },
        {
            path: 'code',
            name: 'code-editor',
            component: () => import('@/views/multilevel_menu_example/code.vue'),
            meta: {
                title: 'code',
                icon:'code'
            }
        },
        {
            path: 'level2',
            name: 'multilevelMenuExample2',
            redirect: '/multilevel_menu_example/level2/page',
            meta: {
                title: '导航2',
                icon: 'folder'
            },
            children: [
                {
                    path: 'page',
                    name: 'multilevelMenuExample2-1',
                    component: () => import('@/views/multilevel_menu_example/level2/page.vue'),
                    meta: {
                        title: '导航2-1'
                    }
                },
                {
                    path: 'level3',
                    name: 'multilevelMenuExample2-2',
                    redirect: '/multilevel_menu_example/level2/level3/page1',
                    meta: {
                        title: '导航2-2',
                        icon:'folder'
                    },
                    children: [
                        {
                            path: 'page1',
                            name: 'multilevelMenuExample2-2-1',
                            component: () => import('@/views/multilevel_menu_example/level2/level3/page1.vue'),
                            meta: {
                                title: '导航2-2-1'
                            }
                        },
                        {
                            path: 'page2',
                            name: 'multilevelMenuExample2-2-2',
                            component: () => import('@/views/multilevel_menu_example/level2/level3/page2.vue'),
                            meta: {
                                title: '导航2-2-2'
                            }
                        }
                    ]
                }
            ]
        }
    ]
}
