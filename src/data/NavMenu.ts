// menu.ts
export interface MenuItem {
  label: string;  // 菜单项显示文本
  href?: string;  // 可选链接，如果是叶子节点
  children?: MenuItem[];  // 可选子菜单，递归定义
}

// 示例菜单数据（可以无限嵌套）
export const navMenu: MenuItem[] = [
  {
    label: '首页',
    href: '/',
  },
  {
    label: '关于我们',
    children: [
      {
        label: '公司简介',
        href: '/about/company',
      },
      {
        label: '团队',
        children: [
          {
            label: '领导层',
            href: '/team/leaders',
          },
          {
            label: '员工',
            href: '/team/staff',
            children: [  // 更深层嵌套
              {
                label: '开发团队',
                href: '/team/dev',
                  children: [  // 更深层嵌套
                      {
                          label: '开发团队',
                          href: '/team/dev',
                      },
                  ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: '服务',
    children: [
      {
        label: '产品',
        href: '/services/products',
      },
    ],
  },
  {
    label: '联系',
    href: '/contact',
  },
    {
        label: '首页',
        href: '/',
    },
    {
        label: '关于我们',
        children: [
            {
                label: '公司简介',
                href: '/about/company',
            },
            {
                label: '团队',
                children: [
                    {
                        label: '领导层',
                        href: '/team/leaders',
                    },
                    {
                        label: '员工',
                        href: '/team/staff',
                        children: [  // 更深层嵌套
                            {
                                label: '开发团队',
                                href: '/team/dev',
                                children: [  // 更深层嵌套
                                    {
                                        label: '开发团队',
                                        href: '/team/dev',
                                        children: [  // 更深层嵌套
                                            {
                                                label: '开发团队',
                                                href: '/team/dev',
                                                children: [  // 更深层嵌套
                                                    {
                                                        label: '开发团队',
                                                        href: '/team/dev',
                                                        children: [  // 更深层嵌套
                                                            {
                                                                label: '开发团队',
                                                                href: '/team/dev',
                                                                children: [  // 更深层嵌套
                                                                    {
                                                                        label: '开发团队',
                                                                        href: '/team/dev',
                                                                        children: [  // 更深层嵌套
                                                                            {
                                                                                label: '开发团队',
                                                                                href: '/team/dev',
                                                                                children: [  // 更深层嵌套
                                                                                    {
                                                                                        label: '开发团队',
                                                                                        href: '/team/dev',
                                                                                        children: [  // 更深层嵌套
                                                                                            {
                                                                                                label: '开发团队',
                                                                                                href: '/team/dev',
                                                                                            },
                                                                                        ],
                                                                                    },
                                                                                ],
                                                                            },
                                                                        ],
                                                                    },
                                                                ],
                                                            },
                                                        ],
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        label: '服务',
        children: [
            {
                label: '产品',
                href: '/services/products',
            },
        ],
    },
    {
        label: '联系',
        href: '/contact',
    },
    {
        label: '首页',
        href: '/',
    },
    {
        label: '关于我们',
        children: [
            {
                label: '公司简介',
                href: '/about/company',
            },
            {
                label: '团队',
                children: [
                    {
                        label: '领导层',
                        href: '/team/leaders',
                    },
                    {
                        label: '员工',
                        href: '/team/staff',
                        children: [  // 更深层嵌套
                            {
                                label: '开发团队',
                                href: '/team/dev',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        label: '服务',
        children: [
            {
                label: '产品',
                href: '/services/products',
            },
        ],
    },
    {
        label: '联系',
        href: '/contact',
    },
];