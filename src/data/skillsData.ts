export const skillsData = {
    'ui-ux-design': {
        title: 'UI & UX Design',
        description: 'User interface design, user experience design, user research. Fokus pada menciptakan pengalaman digital yang intuitif dan menyenangkan bagi pengguna, dari wireframe hingga prototipe akhir.',
        applications: ['Figma', 'Sketch', 'Adobe XD', 'Miro', 'Photoshop'],
        projects: [
            {
                name: 'Mobile Banking App Redesign',
                description: 'Redesain aplikasi mobile banking untuk meningkatkan user flow dan pengalaman pengguna.',
                link: '#',
            },
            {
                name: 'E-commerce Website Usability Study',
                description: 'Melakukan studi usability dan mengimplementasikan perbaikan untuk website e-commerce.',
                link: '#',
            },
        ],
    },
    'graphic-design': {
        title: 'Graphic Design',
        description: 'User interface design, user experience design, user research. Menciptakan aset visual yang menarik dan kohesif untuk branding, pemasaran, dan media digital.',
        applications: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Canva'],
        projects: [
            {
                name: 'Brand Identity for Startup X',
                description: 'Pengembangan logo, panduan gaya, dan materi branding untuk startup baru.',
                link: '#',
            },
            {
                name: 'Social Media Campaign Graphics',
                description: 'Desain grafis untuk kampanye media sosial yang menarik.',
                link: '#',
            },
        ],
    },
    'web-development': {
        title: 'Web Development',
        description: 'Sebagai seorang Full-Stack Web Developer, saya memiliki keahlian dalam membangun dan mengelola aplikasi web dari sisi front-end hingga back-end. Saya fokus pada pembuatan solusi yang responsif, fungsional, dan memberikan pengalaman pengguna yang optimal.',
        applications: ['VS Code', 'Chrome DevTools', 'Git', 'GitHub', 'Node.js', 'npm/yarn', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Express.js', 'Python', 'Django/Flask'],
        projects: [
            {
                name: 'Personal Portfolio Website (Saat Ini)',
                description: 'Pengembangan website portofolio pribadi ini menggunakan Next.js, TypeScript, dan Tailwind CSS untuk menampilkan karya dan informasi profesional.',
                link: '#',
            },
            {
                name: 'E-commerce Platform Backend',
                description: 'Mengembangkan API RESTful dengan Node.js dan Express.js, serta database MongoDB, untuk mendukung operasi e-commerce seperti manajemen produk, pesanan, dan otentikasi pengguna.',
                link: '#',
            },
            {
                name: 'Real-time Chat Application',
                description: 'Membangun aplikasi chat real-time menggunakan WebSockets (Socket.IO) dengan React.js di front-end dan Node.js di back-end.',
                link: '#',
            },
            {
                name: 'Blog Aplikasi dengan Django',
                description: 'Membuat aplikasi blog dengan framework Django (Python), termasuk sistem otentikasi, CRUD untuk postingan, dan komentar.',
                link: '#',
            },
        ],
    },
};

export type SkillKey = 'ui-ux-design' | 'graphic-design' | 'web-development';

export interface Project {
    name: string;
    description: string;
    link: string;
}

export interface SkillDetail {
    title: string;
    description: string;
    applications: string[];
    projects: Project[];
}