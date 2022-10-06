module.exports = {
    description: '创建组件',
    prompts: [
        {
            type: 'list',
            name: 'type',
            message: '请选择组件类型',
            choices: ['page', 'global_component', 'component'],
            default: 'page'
        },
        {
            type: 'input',
            name: 'path',
            message: '请输入目录',
            when: (answers) => {
                return answers.type === 'component'
            }
            // validate: (v) => {
            //     if (!v || v.trim === '') {
            //         return '目录不能为空'
            //     } else {
            //         return true
            //     }
            // }
        },
        {
            type: 'list',
            name: 'css',
            message: '请选择css语言',
            choices: ['css', 'less', 'scss'],
            default: 'scss'
        },
        {
            type: 'input',
            name: 'name',
            message: '请输入组件名称',
            validate: (v) => {
                if (!v || v.trim === '') {
                    return '组件名称不能为空'
                } else {
                    return true
                }
            }
        }
    ],
    actions: (data) => {
        let path = ''
        const type = data.type

        if (type === 'global_component') {
            path = 'src/components/{{properCase name}}/index.vue'
        } else if (type === 'component') {
            path = `src/pages/components${data.path ? `/${data.path}` : ''}/{{properCase name}}/index.vue`
        } else {
            // path = 'src/pages/{{dotCase name}}.vue'
            path = 'src/pages/{{name}}.vue'
        }

        const actions = [
            {
                type: 'add',
                path: path,
                templateFile: 'templates/component/index.hbs'
            }
        ]
        return actions
    }
}