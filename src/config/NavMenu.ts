export interface NavMenuItem {
    title: string;
    path?: string;
    children?: NavMenuItem[];
}

export const navMenu: NavMenuItem[] = [
    {
        title: "首页",
        path: "/",
    },
    {
        title: "文章",
        path: "/posts",
    },
    {
        title: "分类",
        path: "/categories",
        children: [
            { title: "技术", path: "/categories/tech" },
            { title: "生活", path: "/categories/life" },
        ],
    },
    {
        title: "关于",
        path: "/about",
    },
];